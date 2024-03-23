package com.sk.wrapit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sk.wrapit.model.Event;

public interface EventRepo extends JpaRepository<Event, String> {

}
