package com.sk.wrapit.util;

import java.util.Map;
import java.util.Date;
import java.util.HashMap;
import java.util.function.Function;

import javax.crypto.SecretKey;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;

import com.sk.wrapit.model.User;
import com.sk.wrapit.repository.UserRepo;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class JwtUtil {

    @Value("${wrapit.jwt.secret-key}")
    private String secret;

    @Value("${wrapit.jwt.expiry-date}")
    private long expirationDuration;
    
    private final UserRepo userRepo;
    

    public SecretKey key() {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(secret));
    }

    public String extractUserEmail(String token) {
        return extractClaim(token, Claims::getIssuer);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    public Claims extractAllClaims(String token) {
        return Jwts.parser()
                .verifyWith(key())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    public String generateToken(UserDetails userdDetails) {
        User user = userRepo.findByEmail(userdDetails.getUsername()).orElseThrow();
        Map<String, Object> claims = new HashMap<>();

        claims.put("user", Map.of(
                "uuid", user.getUserId(),
                "username", user.getUsername(),
                "role", user.getRole()));

        return createToken(claims, user);
    }

    public String generateEmailVerificationToken(User user) {
        long time = System.currentTimeMillis();
        
        Map<String, Object> claims = new HashMap<>();
        claims.put("user", user);

        return Jwts.builder()
                .claims(claims)
                .issuer(user.getUsername())
                .issuedAt(new Date(time))
                .expiration(new Date(time + expirationDuration))
                .signWith(key(), Jwts.SIG.HS256)
                .compact();
    }

    public String generateResetToken(UserDetails userdDetails) {
        User user = userRepo.findByEmail(userdDetails.getUsername()).orElseThrow();
        Map<String, Object> claims = new HashMap<>();

        claims.put("user", Map.of(
                "uuid", user.getUserId(),
                "username", user.getUsername()
                ));

        return createToken(claims, user);
    }

    private String createToken(Map<String, Object> claims, UserDetails userDetails) {
        User user = userRepo.findByEmail(userDetails.getUsername()).orElseThrow();
        long time = System.currentTimeMillis();

        return Jwts.builder()
                .claims(claims)
                .issuer(user.getUsername())
                .issuedAt(new Date(time))
                .expiration(new Date(time + expirationDuration))
                .signWith(key(), Jwts.SIG.HS256)
                .compact();
    }

    public Boolean isTokenValid(String token, UserDetails user) {
        final String email = extractUserEmail(token);
        return email.equals(user.getUsername()) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

}
