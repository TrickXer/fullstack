package com.sk.wrapit.controller;

import org.springframework.web.bind.annotation.RestController;

import com.sk.wrapit.model.Venue;
import com.sk.wrapit.dto.request.VenueReq;
import com.sk.wrapit.service.VenueService;
import com.sk.wrapit.dto.response.BasicRes;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.security.access.prepost.PreAuthorize;

@RestController
@RequiredArgsConstructor
@RequestMapping("/wrapit/venue")
public class VenueController {
    private final VenueService venueService;

    @GetMapping("/all")
    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    public ResponseEntity<?> all() {
        BasicRes<List<Venue>> response = new BasicRes<>();
        
        try {
            response = venueService.all();
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Oops!... Something went wrong. Please try again.");

            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    public ResponseEntity<?> get(@PathVariable String id) {
        BasicRes<Venue> response = new BasicRes<>();

        try {
            response = venueService.get(id);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Oops!... Something went wrong. Please try again.");

            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PostMapping("/add")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> add(@RequestBody VenueReq request) {
        BasicRes<String> response = new BasicRes<>();

        try {
            response = venueService.add(request);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Oops!... Something went wrong. Please try again.");

            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PatchMapping("/patch")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> patch(@RequestBody Venue request)
            throws IllegalArgumentException, IllegalAccessException {
        BasicRes<String> response = new BasicRes<>();

        try {
            response = venueService.patch(request);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Oops!... Something went wrong. Please try again.");

            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @DeleteMapping("/delete/{eventId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deleteEvent(@PathVariable String eventId ){
        BasicRes<String> response = new BasicRes<>();
        try {
            response = venueService.delete(eventId);
            return new ResponseEntity<>(response,HttpStatus.ACCEPTED);

        } catch (Exception e) {
            response.setMessage("Oops!... Something went wrong. Please try again.");
            response.setData("");

            return new ResponseEntity<>(response,HttpStatus.ACCEPTED);
        }
    }
}
