package com.sk.wrapit.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
@Table(name = "wi_payment")
public class Payment {
    @Id
    @Column(length = 4)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long paymentId;

    private String status;
    private Double totalAmount;
    private LocalDateTime paymentDate;
    private String modeOfPayment;
}
