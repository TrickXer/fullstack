package com.sk.wrapit.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
@Table(name = "wi_user")
public class User {
    @Id
    @Column(length = 6)
    @GeneratedValue(strategy = GenerationType.UUID)
    private String userID;

    private String email;
    private String password;
    private String username;
    private String userRole;

    @OneToOne
    private Customer customer;
}
