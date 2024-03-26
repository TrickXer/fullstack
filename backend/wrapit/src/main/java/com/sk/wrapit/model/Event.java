package com.sk.wrapit.model;

import lombok.Data;
import lombok.Builder;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import lombok.NoArgsConstructor;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "wi_event")
@JsonIdentityInfo(
  generator = ObjectIdGenerators.PropertyGenerator.class, 
  property = "eventId")
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

    @ManyToMany(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
    private List<Customer> customers;

    @OneToMany(mappedBy = "event", cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
    private List<Booking> bookings;
}
