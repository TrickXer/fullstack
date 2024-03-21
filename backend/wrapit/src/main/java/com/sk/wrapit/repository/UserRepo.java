package com.sk.wrapit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sk.wrapit.model.User;


public interface UserRepo extends JpaRepository<User, String> {
    User findByEmail(String email);
}
