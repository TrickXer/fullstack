package com.sk.wrapit.service.impls;

import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.sk.wrapit.model.User;
import com.sk.wrapit.util.Patcher;
import com.sk.wrapit.repository.UserRepo;
import com.sk.wrapit.service.UserService;
import com.sk.wrapit.dto.request.PasswordPatchReq;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public final class UserServiceImpl implements UserService {
    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void patchPassword(PasswordPatchReq request, User user) throws IllegalArgumentException, IllegalAccessException {
        User updatedUser = User.builder()
                .verified(user.isVerified())
                .password(passwordEncoder.encode(request.getNewPassword()))
                .build();
        user = Patcher.patcher(user, updatedUser);

        userRepo.save(user);
    }
}
