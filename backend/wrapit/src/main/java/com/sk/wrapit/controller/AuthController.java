package com.sk.wrapit.controller;

import org.springframework.web.bind.annotation.RestController;

import com.sk.wrapit.dto.request.LoginReq;
import com.sk.wrapit.dto.response.BasicRes;
import com.sk.wrapit.dto.response.LoginRes;
import com.sk.wrapit.dto.request.RegisterReq;
import com.sk.wrapit.service.impls.AuthServiceImpl;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequiredArgsConstructor
@RequestMapping("/wrapit/api/v1/auth")
public class AuthController {

    private final AuthServiceImpl authServiceImpl;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginReq request) {
        LoginRes response = new LoginRes();
        
        try {
            response = authServiceImpl.login(request);
            return new ResponseEntity<>(response, HttpStatus.FOUND);
        } catch (Exception e) {
            response.setMessage("User not found");
            response.setAccessToken(null);

            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/sign-up")
    public ResponseEntity<?> register(@RequestBody RegisterReq request) {
        BasicRes<String> response = new BasicRes<>();

        try {
            response = authServiceImpl.register(request);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Oops!... Something went wrong. Please try again.");
            response.setData("");
            
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }
}
