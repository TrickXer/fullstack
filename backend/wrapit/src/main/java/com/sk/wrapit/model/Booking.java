package com.sk.wrapit.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private Integer bookingId;

    private Date submissionData;
    private Date eventData;
    private Integer bookingStatus;
    private Integer headCount;

    @ManyToOne
    private Customer customer;

    @ManyToOne
    private Venue venue;

    @ManyToOne
    private Event event;

    @OneToOne
    private Payment payment;
}
