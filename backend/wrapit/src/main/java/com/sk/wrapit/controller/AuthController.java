package com.sk.wrapit.controller;

import org.springframework.web.bind.annotation.RestController;

import com.sk.wrapit.model.User;
import com.sk.wrapit.util.JwtUtil;
import com.sk.wrapit.dto.request.Login;
import com.sk.wrapit.repository.UserRepo;
import com.sk.wrapit.service.UserService;
import com.sk.wrapit.dto.request.Register;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

@RestController
@RequestMapping("/wrapit/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final JwtUtil jwtUtil;
    private final UserRepo userRepo;
    private final UserService userService;
    private final AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Login request) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

        User user = userRepo.findByEmail(request.getEmail()).orElseThrow();
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtUtil.generateToken(user);

        return ResponseEntity.ok().body(token);
    }

    @PostMapping("/sign-up")
    public ResponseEntity<?> register(@RequestBody Register request) {
        Boolean isSaved = userService.add(request);
        return ResponseEntity.ok().body(isSaved);
    }
}
