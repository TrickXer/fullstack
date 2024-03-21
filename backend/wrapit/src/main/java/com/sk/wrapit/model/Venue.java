package com.sk.wrapit.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
@Table(name = "wi_venue")
public class Venue {
    @Id
    @Column(length = 6)
    @GeneratedValue(strategy = GenerationType.UUID)
    private String venueId;

    private String venueName;
    private String venueLocation;

    @OneToMany(mappedBy = "venue")
    private List<Booking> bookings;
}
