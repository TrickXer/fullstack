package com.sk.wrapit.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.Data;
import lombok.Builder;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import lombok.NoArgsConstructor;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToOne;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "wi_customer")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "customerId")
public class Customer {
  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private String customerId;

  private String customerName;

  @ManyToMany(mappedBy = "customers", cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
  private List<Event> events;
  
  @OneToMany(mappedBy = "customer", cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
  private List<Booking> bookings;

  @OneToOne(cascade = CascadeType.MERGE)
  private User user;
}
