package com.sk.wrapit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sk.wrapit.model.Payment;

public interface PaymentRepo extends JpaRepository<Payment, String> {

}
