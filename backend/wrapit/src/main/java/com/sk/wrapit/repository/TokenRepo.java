package com.sk.wrapit.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sk.wrapit.model.Token;

public interface TokenRepo extends JpaRepository<Token, String> {
    
    List<Token> findAllByUser_userIdAndRevokedFalseAndExpiredFalse(String id);

    Optional<Token> findByToken(String token);

}
