package com.sk.wrapit.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "wi_booking")
public class Booking {
    @Id
    @Column(length = 6)
    @GeneratedValue(strategy = GenerationType.UUID)
    private String bookingId;

    private LocalDateTime submissionData;
    private LocalDateTime eventData;
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
