package com.sk.wrapit.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sk.wrapit.model.User;



public interface UserRepo extends JpaRepository<User, String> {
    Optional<User> findByEmail(String email);

    User findByUserId(String userId);
}
