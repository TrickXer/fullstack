package com.sk.wrapit.controller;

import org.springframework.web.bind.annotation.RestController;

import com.sk.wrapit.model.Venue;
import com.sk.wrapit.service.impls.VenueServiceImpl;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;



@RestController
@RequiredArgsConstructor
@RequestMapping("/wrapit/api/v1/venue")
public class VenueController {
    private final VenueServiceImpl venueServiceImpl;

    @GetMapping("/all")
    public ResponseEntity<?> all() {
        return ResponseEntity.ok().body(venueServiceImpl.all());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> get(@PathVariable String id) {
        return ResponseEntity.ok().body(venueServiceImpl.get(id));
    }
    
    @PostMapping("/add")
    // @PreAuthorize(value = "")
    public ResponseEntity<?> add(@RequestBody Venue request) {
        return ResponseEntity.ok().body(venueServiceImpl.add(request));
    }
    
    @PatchMapping("/patch")
    // @PreAuthorize(value = "")
    public ResponseEntity<?> patch(@RequestBody Venue request) throws IllegalArgumentException, IllegalAccessException {
        return ResponseEntity.ok().body(venueServiceImpl.patch(request.getVenueId(), request));
    }
}
