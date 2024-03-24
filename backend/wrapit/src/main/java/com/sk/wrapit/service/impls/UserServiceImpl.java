package com.sk.wrapit.service.impls;

import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder.BCryptVersion;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.sk.wrapit.model.User;
import com.sk.wrapit.enumerated.Role;
import com.sk.wrapit.repository.UserRepo;
import com.sk.wrapit.service.UserService;
import com.sk.wrapit.util.Patcher;
import com.sk.wrapit.dto.request.RegisterReq;
import com.sk.wrapit.dto.request.PasswordPatchReq;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public final class UserServiceImpl implements UserService {
    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;


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
    public void patchPassword(PasswordPatchReq request, User user) throws IllegalArgumentException, IllegalAccessException {
        User updatedUser = User.builder().password(passwordEncoder.encode(request.getNewPassword())).build();
        user = Patcher.patcher(user, updatedUser);

        userRepo.save(user);
    }
}
