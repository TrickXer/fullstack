package com.sk.wrapit.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
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
@Table(name = "wi_customer")
public class Customer {
    @Id
    @Column(length = 6)
    @GeneratedValue(strategy = GenerationType.UUID)
    private String customerId;

    private String customerName;

    @OneToMany(mappedBy = "customer")
    private List<Booking> bookings;

    @ManyToMany
    private List<Event> events;

    @OneToOne
    private User user;
}
