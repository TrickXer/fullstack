package com.sk.wrapit.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
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
@Table(name = "wi_event")
public class Event {
    @Id
    @Column(length = 4)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eventId;

    private String eventType;
    private String description;
    private String suitableFor;
    private String maxCapacity;
    private Integer charges;

    @ManyToMany
    private List<Customer> customers;

    @OneToMany(mappedBy = "event")
    private List<Booking> bookings;
}
