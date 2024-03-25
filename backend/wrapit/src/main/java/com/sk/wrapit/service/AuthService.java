package com.sk.wrapit.service;

import com.sk.wrapit.dto.request.LoginReq;
import com.sk.wrapit.dto.response.LoginRes;
import com.sk.wrapit.dto.response.BasicRes;
import com.sk.wrapit.dto.request.PasswordReq;
import com.sk.wrapit.dto.request.RegisterReq;
import com.sk.wrapit.dto.request.PasswordPatchReq;

import io.jsonwebtoken.io.IOException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface AuthService {
    BasicRes<LoginRes> login(LoginReq request);

    BasicRes<String> register(RegisterReq request);

    BasicRes<String> verify(String token);

    BasicRes<String> forgotPassword(PasswordReq request);

    void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;

    BasicRes<String> patchPassword(String token, PasswordPatchReq request) throws IllegalArgumentException, IllegalAccessException;
}
