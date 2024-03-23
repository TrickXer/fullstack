package com.sk.wrapit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sk.wrapit.model.Venue;

public interface VenueRepo extends JpaRepository<Venue, String> {

}
