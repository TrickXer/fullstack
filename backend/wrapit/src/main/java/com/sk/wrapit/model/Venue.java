package com.sk.wrapit.model;

import java.util.List;

import lombok.Data;
import lombok.Builder;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "wi_venue")
public class Venue {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String venueId;

    private String venueName;
    private String suitableFor;
    private String maxCapacity;
    private String venueLocation;
    private double charges;

    @OneToMany(mappedBy = "venue")
    private List<Booking> bookings;
}
