package com.sk.wrapit.service.impls;

import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Map;
import java.util.HashMap;

import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import com.sk.wrapit.model.Token;
import com.sk.wrapit.model.User;
import com.sk.wrapit.repository.TokenRepo;
import com.sk.wrapit.repository.UserRepo;
import com.sk.wrapit.service.AuthService;
import com.sk.wrapit.util.JwtUtil;
import com.fasterxml.jackson.core.exc.StreamWriteException;
import com.fasterxml.jackson.databind.DatabindException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sk.wrapit.dto.request.LoginReq;
import com.sk.wrapit.dto.response.BasicRes;
import com.sk.wrapit.dto.response.LoginRes;
import com.sk.wrapit.dto.request.RegisterReq;
import com.sk.wrapit.enumerated.Role;
import com.sk.wrapit.enumerated.TokenType;

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
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    @Override
    public BasicRes<String> register(RegisterReq request) {
        boolean isExist = userRepo.findByEmail(request.getEmail()).isPresent();

        if (isExist) {
            return BasicRes.<String>builder()
                    .message("User already registered with email id: " + request.getEmail())
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
                .message("User logged in successfully")
                .build();
    }

    @Override
    public LoginRes login(LoginReq request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        User user = userRepo.findByEmail(request.getEmail()).orElseThrow();

        Map<String, Object> claims = new HashMap<>();
        claims.put("role", user.getRole());

        String accessToken = jwtUtil.generateToken(user);
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
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'revokeAllUserToken'");
    }

    @Override
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
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

}
