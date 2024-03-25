package com.sk.wrapit.model;

import java.util.List;

import lombok.Data;
import lombok.Builder;
import jakarta.persistence.Id;
import lombok.NoArgsConstructor;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "wi_event")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String eventId;

    private String eventName;
    private String eventType;
    private String description;
    private String eventPackage;
    private int participantCount;
    private double charges;

    @ManyToMany
    private List<Customer> customers;

    @OneToMany(mappedBy = "event")
    private List<Booking> bookings;
}
