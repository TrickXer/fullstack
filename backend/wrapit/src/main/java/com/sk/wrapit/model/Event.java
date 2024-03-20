package com.sk.wrapit.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private Integer eventId;

    private String eventType;
    private String description;
    private String suitableFor;
    private String maxCapacity;
    private Integer charges;

    @ManyToMany
    private List<Customer> customers;

    @OneToMany
    private List<Booking> bookings;
}
