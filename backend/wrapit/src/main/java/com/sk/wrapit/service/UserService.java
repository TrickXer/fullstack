package com.sk.wrapit.service;

import java.security.Principal;

import com.sk.wrapit.dto.request.PasswordReq;

public interface UserService {
    void forgotPassword(PasswordReq request, Principal principal);
}
