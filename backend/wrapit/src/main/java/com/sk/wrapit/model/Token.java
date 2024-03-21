package com.sk.wrapit.model;

import com.sk.wrapit.model.enum.TokenType;

import lombok.Data;
import lombok.Builder;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import jakarta.persistence.Table;
import jakarta.persistence.Entity;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "wi_token")
public class Token {
    @Id
    @Column(length = 6)
    @GeneratedValue(strategy = GenerationType.UUID)
    private String tokenId;

    @Column(unique = true)
    private String token;
    
    @Builder.Default
    @Enumerated(EnumType.STRING)
    private TokenType tokenType = TokenType.BEARER;

    public Boolean revoked;
    
    public Boolean expired;
    
    // @ManyToOne(fetch = FetchType.LAZY)
    // @JoinColumn(name = "user_id")
    // public User user;
}