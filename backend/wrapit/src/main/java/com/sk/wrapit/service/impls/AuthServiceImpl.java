package com.sk.wrapit.service.impls;

import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Map;
import java.util.HashMap;

import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import com.sk.wrapit.model.User;
import com.sk.wrapit.model.Token;
import com.sk.wrapit.util.JwtUtil;
import com.sk.wrapit.util.MailBody;
import com.sk.wrapit.enumerated.Role;
import com.sk.wrapit.repository.UserRepo;
import com.sk.wrapit.service.AuthService;
import com.sk.wrapit.service.MailService;
import com.sk.wrapit.service.UserService;
import com.sk.wrapit.enumerated.TokenType;
import com.sk.wrapit.repository.TokenRepo;
import com.sk.wrapit.dto.request.LoginReq;
import com.sk.wrapit.dto.response.BasicRes;
import com.sk.wrapit.dto.response.LoginRes;
import com.sk.wrapit.dto.request.RegisterReq;
import com.sk.wrapit.dto.request.PasswordReq;
import com.sk.wrapit.model.ResetPasswordToken;
import com.sk.wrapit.dto.request.PasswordPatchReq;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sk.wrapit.repository.ResetPasswordTokenRepo;
import com.fasterxml.jackson.core.exc.StreamWriteException;
import com.fasterxml.jackson.databind.DatabindException;

import lombok.NonNull;
import io.jsonwebtoken.io.IOException;
import lombok.RequiredArgsConstructor;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public final class AuthServiceImpl implements AuthService {

    private final JwtUtil jwtUtil;
    private final UserRepo userRepo;
    private final TokenRepo tokenRepo;
    private final UserService userService;
    private final MailService mailService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final ResetPasswordTokenRepo resetPasswordTokenRepo;


    @Override
    public BasicRes<String> register(RegisterReq request) {
        boolean isExist = userRepo.findByEmail(request.getEmail()).isPresent();

        if (isExist) {
            return BasicRes.<String>builder()
                    .message("User already exist with email id: " + request.getEmail())
                    .data("")
                    .build();
        }

        User user = User.builder()
                .email(request.getEmail())
                .name(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        userRepo.save(user);

        return BasicRes.<String>builder()
                .message("User registerd successfully")
                .build();
    }

    @Override
    public LoginRes login(LoginReq request) {
        authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepo.findByEmail(request.getEmail()).orElseThrow();

        Map<String, Object> claims = new HashMap<>();
        claims.put("role", user.getRole().toString());
        var accessToken = jwtUtil.generateToken(user);

        revokeAllUserToken(user);
        saveUserToken(user, accessToken);

        return LoginRes.builder()
                .message("Logged in successfully")
                .accessToken(accessToken)
                .build();
    }

    private void saveUserToken(User user, String accessToken) {
        Token token = Token.builder()
                .user(user)
                .token(accessToken)
                .tokenType(TokenType.BEARER)
                .revoked(false)
                .expired(false)
                .build();
        tokenRepo.save(token);
    }

    private void revokeAllUserToken(User user) {
        var validTokens = tokenRepo.findAllByUser_userIdAndRevokedFalseAndExpiredFalse(user.getUserId());

        if (validTokens.isEmpty())
            return;

        validTokens.forEach(validToken -> {
            validToken.setRevoked(true);
            validToken.setExpired(true);
        });

        tokenRepo.saveAll(validTokens);
    }

    @Override
    public void refreshToken(@NonNull HttpServletRequest request, 
            @NonNull HttpServletResponse response) throws IOException {
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        final String refreshToken;
        final String email;

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return;
        }

        refreshToken = authHeader.substring(7);
        email = jwtUtil.extractUserEmail(refreshToken);

        if (email != null) {
            User user = userRepo.findByEmail(email).orElseThrow();

            if (jwtUtil.isTokenValid(refreshToken, user)) {
                var accessToken = jwtUtil.generateToken(user);
                var authRes = LoginRes.builder()
                        .message("New access token generated successfully")
                        .accessToken(accessToken)
                        .build();

                try {
                    new ObjectMapper().writeValue(response.getOutputStream(), authRes);
                } catch (StreamWriteException e) {
                    e.printStackTrace();
                } catch (DatabindException e) {
                    e.printStackTrace();
                } catch (java.io.IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    @Override
    public BasicRes<String> forgotPassword(PasswordReq request) {
        var user = userRepo.findByEmail(request.getEmail()).orElseThrow();

        var resetToken = jwtUtil.generateResetToken(user);

        revokeAllResetToken(user);
        saveResetToken(user, resetToken);

        MailBody mailBody = MailBody.builder()
                .recipient(request.getEmail())
                .subject("Reset Password")
                .msgBody("http://localhost:5173/reset-password?token=" + resetToken)
                .build();

        return mailService.sendSimpleMail(mailBody);
    }
    
    @Override
    public BasicRes<String> patchPassword(String token, PasswordPatchReq request) throws IllegalArgumentException, IllegalAccessException {
        String email = jwtUtil.extractUserEmail(token);
        
        if (email != null) {
            var user = userRepo.findByEmail(email).orElseThrow();

            if (jwtUtil.isTokenValid(token, user)) {
                var storedResetToken = resetPasswordTokenRepo.findByResetToken(token).orElseThrow();

                if (!storedResetToken.expired && !storedResetToken.revoked) {
                    userService.patchPassword(request, user);
                    
                    storedResetToken.setExpired(true);
                    storedResetToken.setRevoked(true);
                    resetPasswordTokenRepo.save(storedResetToken);
    
                    return BasicRes.<String>builder()
                            .message("Updated successfully")
                            .build();
                }
            }
        }

        return BasicRes.<String>builder()
                .message("Oops!...Something went wrong")
                .build();
    }

    private void saveResetToken(User user, String resetToken) {
        ResetPasswordToken token = ResetPasswordToken.builder()
                .user(user)
                .resetToken(resetToken)
                .revoked(false)
                .expired(false)
                .build();
        resetPasswordTokenRepo.save(token);
    }

    private void revokeAllResetToken(User user) {
        var validTokens = resetPasswordTokenRepo.findAllByUser_userIdAndRevokedFalseAndExpiredFalse(user.getUserId());

        if (validTokens.isEmpty())
            return;

        validTokens.forEach(validToken -> {
            validToken.setRevoked(true);
            validToken.setExpired(true);
        });

        resetPasswordTokenRepo.saveAll(validTokens);
    }

}
