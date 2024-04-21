package com.sk.wrapit.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.access.prepost.PreAuthorize;

import com.sk.wrapit.dto.request.PaymentReq;
import com.sk.wrapit.dto.response.BasicRes;
import com.sk.wrapit.model.Payment;
import com.sk.wrapit.service.PaymentService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/wrapit/payment")
public class PaymentController {
    
    private final PaymentService paymentService;

    @PostMapping("/add")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> addPayment(@RequestBody PaymentReq paymentReq) {

        BasicRes<String> response = new BasicRes<>();
        try {
            response = paymentService.addPayment(paymentReq);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);

        } catch (Exception e) {
            response.setData(null);
            response.setMessage("");
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        }
    }
    
    @PatchMapping("/patch")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> updateEvent(@RequestBody Payment payment) {
        BasicRes<String> response = new BasicRes<>();
        try {
            response = paymentService.updatePayment(payment);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);

        } catch (Exception e) {
            response.setMessage("Oops!... Something went wrong. Please try again.");
            response.setData("");

            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        }
    }

    @GetMapping("/all")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> viewAllPayment(){

        BasicRes<List<Payment>> response = new BasicRes<>();
        try {
            response = paymentService.viewAllPayment();
            return new ResponseEntity<>(response,HttpStatus.ACCEPTED);
            
        } catch (Exception e) {
            response.setData(null);
            response.setMessage("");
            return new ResponseEntity<>(response,HttpStatus.ACCEPTED);
        }
    }
}
