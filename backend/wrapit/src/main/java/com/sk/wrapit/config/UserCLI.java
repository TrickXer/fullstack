package com.sk.wrapit.config;

import org.springframework.stereotype.Service;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.sk.wrapit.model.User;
import com.sk.wrapit.enumerated.Role;
import com.sk.wrapit.repository.UserRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class UserCLI implements CommandLineRunner {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        if (userRepo.count() > 0)
            return;

        var admin = User.builder()
                .name("admin")
                .verified(true)
                .email("admin@gmail.com")
                .password(passwordEncoder.encode("admin@123"))
                .role(Role.ADMIN)
                .build();
        userRepo.save(admin);
    }
}
