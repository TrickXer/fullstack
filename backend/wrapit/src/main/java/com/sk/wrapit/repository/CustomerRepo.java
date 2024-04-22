package com.sk.wrapit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sk.wrapit.model.Customer;
import com.sk.wrapit.model.User;


public interface CustomerRepo extends JpaRepository<Customer, String> {
    Customer findByUser(User user);
}
