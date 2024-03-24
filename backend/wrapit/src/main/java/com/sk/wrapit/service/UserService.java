package com.sk.wrapit.service;

import com.sk.wrapit.model.User;
import com.sk.wrapit.dto.request.PasswordPatchReq;

public interface UserService {
    void patchPassword(PasswordPatchReq request, User user) throws IllegalArgumentException, IllegalAccessException;
}
