package com.sk.wrapit.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sk.wrapit.model.ResetPasswordToken;

public interface ResetPasswordTokenRepo extends JpaRepository<ResetPasswordToken, String> {
    List<ResetPasswordToken> findAllByUser_userIdAndRevokedFalseAndExpiredFalse(String id);

    Optional<ResetPasswordToken> findByResetToken(String token);
}
