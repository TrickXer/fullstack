package com.sk.wrapit.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.PatchExchange;

import com.sk.wrapit.dto.request.EventReq;
import com.sk.wrapit.dto.response.BasicRes;
import com.sk.wrapit.model.Event;
import com.sk.wrapit.service.EventService;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequiredArgsConstructor
@RequestMapping("/wrapit/event")
public class EventController {
    private final EventService eventService;

    @PostMapping("/add")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> addEvent(@RequestBody EventReq eventReq) {
         BasicRes<String> response = new BasicRes<>();
        try {
            response = eventService.addEvent(eventReq);
            return new ResponseEntity<>(response,HttpStatus.ACCEPTED);

        } catch (Exception e) {
            response.setMessage("Oops!... Something went wrong. Please try again.");
            response.setData("");

            return new ResponseEntity<>(response,HttpStatus.ACCEPTED);
        }
    }

    @PatchExchange("/patch")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> updateEvent(@RequestBody Event event ){
        BasicRes<String> response = new BasicRes<>();
        try {
            response = eventService.updateEvent(event);
            return new ResponseEntity<>(response,HttpStatus.ACCEPTED);

        } catch (Exception e) {
            response.setMessage("Oops!... Something went wrong. Please try again.");
            response.setData("");

            return new ResponseEntity<>(response,HttpStatus.ACCEPTED);
        }
    }

    @DeleteMapping("/delete/{eventId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deleteEvent(@PathVariable String eventId ){
        BasicRes<String> response = new BasicRes<>();
        try {
            response = eventService.deleteEvent(eventId);
            return new ResponseEntity<>(response,HttpStatus.ACCEPTED);

        } catch (Exception e) {
            response.setMessage("Oops!... Something went wrong. Please try again.");
            response.setData("");

            return new ResponseEntity<>(response,HttpStatus.ACCEPTED);
        }
    }

    @GetMapping("/all")
    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    public ResponseEntity<?> viewAllEvent(){
        BasicRes<List<Event>> response = new BasicRes<>();
        try {
            response = eventService.viewAllEvent();
            return new ResponseEntity<>(response,HttpStatus.ACCEPTED);

        } catch (Exception e) {
            response.setMessage("Oops!... Something went wrong. Please try again.");
            response.setData(null);

            return new ResponseEntity<>(response,HttpStatus.ACCEPTED);
        }
    }

    @GetMapping("/view/{eventId}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    public ResponseEntity<?> viewOneEvent(@PathVariable String eventId ){
        BasicRes<Event> response = new BasicRes<>();
        try {
            response = eventService.viewOneEvent(eventId);
            return new ResponseEntity<>(response,HttpStatus.ACCEPTED);

        } catch (Exception e) {
            response.setMessage("Oops!... Something went wrong. Please try again.");
            response.setData(null);

            return new ResponseEntity<>(response,HttpStatus.ACCEPTED);
        }
    } 
}
