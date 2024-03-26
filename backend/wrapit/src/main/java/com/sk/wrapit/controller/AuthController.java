package com.sk.wrapit.controller;

import org.springframework.web.bind.annotation.RestController;

import com.sk.wrapit.service.AuthService;
import com.sk.wrapit.dto.request.LoginReq;
import com.sk.wrapit.dto.request.PasswordPatchReq;
import com.sk.wrapit.dto.request.PasswordReq;
import com.sk.wrapit.dto.response.BasicRes;
import com.sk.wrapit.dto.response.LoginRes;
import com.sk.wrapit.dto.request.RegisterReq;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequiredArgsConstructor
@RequestMapping("/wrapit/auth")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginReq request) {
        BasicRes<LoginRes> response = new BasicRes<>();

        try {
            response = authService.login(request);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Login failed!");
            response.setData(LoginRes.builder()
                    .message("Token generation failed!")
                    .accessToken("")
                    .build());

            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/sign-up")
    public ResponseEntity<?> register(@RequestBody RegisterReq request) {
        BasicRes<String> response = new BasicRes<>();

        try {
            response = authService.register(request);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Oops!... Something went wrong. Please try again.");
            response.setData("");

            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PostMapping("/verify-account")
    public ResponseEntity<?> confirmAccount(@RequestParam String token) {
        BasicRes<String> response = new BasicRes<>();

        try {
            response = authService.verify(token);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            response.setMessage("Oops!... Something went wrong. Please try again.");
            response.setData("");

            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PostMapping("/forgot-password")
    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    public ResponseEntity<?> forgotPassword(@RequestBody PasswordReq request) {
        BasicRes<String> response = new BasicRes<>();

        try {
            response = authService.forgotPassword(request);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Oops!... Something went wrong. Please try again.");
            response.setData("");

            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PatchMapping("/reset-password")
    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    public ResponseEntity<?> patchPassword(@RequestParam String token, @RequestBody PasswordPatchReq request) {
        BasicRes<String> response = new BasicRes<>();

        try {
            response = authService.patchPassword(token, request);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Oops!... Something went wrong. Please try again.");
            response.setData("");

            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }
}