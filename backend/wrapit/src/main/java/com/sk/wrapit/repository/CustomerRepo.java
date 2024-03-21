package com.sk.wrapit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sk.wrapit.model.Customer;

public interface CustomerRepo extends JpaRepository<Customer, String> {

}
