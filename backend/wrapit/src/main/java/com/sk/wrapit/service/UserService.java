package com.sk.wrapit.service;

import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder.BCryptVersion;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.sk.wrapit.model.User;
import com.sk.wrapit.model.enumerate.Role;
import com.sk.wrapit.dto.request.Register;
import com.sk.wrapit.repository.UserRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepo userRepo;

    private String passwordEncoder(String password) {
        return new BCryptPasswordEncoder(BCryptVersion.$2A).encode(password);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<User> user = userRepo.findByEmail(email);

        user.orElseThrow(() -> new UsernameNotFoundException("Not Found: " + email));

        return user.get();
    }

    @SuppressWarnings("null")
    public Boolean add(Register request) {
        User user = User.builder()
                .email(request.getEmail())
                .username(request.getUsername())
                .password(passwordEncoder(request.getPassword()))
                .userRole(Role.USER)
                .build();

        return userRepo.save(user) != null;
    }
    
}
