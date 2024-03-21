package com.sk.wrapit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sk.wrapit.model.Booking;

public interface BookingRepo extends JpaRepository<Booking, String> {
    
}
