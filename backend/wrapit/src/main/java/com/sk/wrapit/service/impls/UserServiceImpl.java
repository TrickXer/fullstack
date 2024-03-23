package com.sk.wrapit.service.impls;

import java.security.Principal;

import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder.BCryptVersion;

import com.sk.wrapit.model.User;
import com.sk.wrapit.repository.UserRepo;
import com.sk.wrapit.service.UserService;
import com.sk.wrapit.dto.request.PasswordReq;
import com.sk.wrapit.dto.request.RegisterReq;
import com.sk.wrapit.enumerated.Role;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public final class UserServiceImpl implements UserService {
    private final UserRepo userRepo;

    private String passwordEncoder(String password) {
        return new BCryptPasswordEncoder(BCryptVersion.$2A).encode(password);
    }

    public boolean add(RegisterReq request) {
        User user = User.builder()
                .email(request.getEmail())
                .name(request.getUsername())
                .password(passwordEncoder(request.getPassword()))
                .role(Role.USER)
                .build();

        return userRepo.save(user) != null;
    }

    @Override
    public void forgotPassword(PasswordReq request, Principal principal) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'forgotPassword'");
    }
}
