package com.sk.wrapit.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sk.wrapit.model.EmailVerificationToken;

public interface EmailVerificationTokenRepo extends JpaRepository<EmailVerificationToken, String> {
    List<EmailVerificationToken> findAllByUser_userIdAndExpiredFalse(String id);

    Optional<EmailVerificationToken> findByVerificationToken(String token);
}
