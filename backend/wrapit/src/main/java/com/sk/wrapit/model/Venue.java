package com.sk.wrapit.model;

import lombok.Data;
import lombok.Builder;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.NoArgsConstructor;
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
@Table(name = "wi_venue")
@JsonIdentityInfo(
  generator = ObjectIdGenerators.PropertyGenerator.class, 
  property = "venueId")
public class Venue {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String venueId;

    private String venueName;
    private String suitableFor;
    private String maxCapacity;
    private String venueLocation;
    private double charges;

    @OneToMany(mappedBy = "venue", cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
    private List<Booking> bookings;
}
