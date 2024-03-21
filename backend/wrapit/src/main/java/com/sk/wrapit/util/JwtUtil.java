package com.sk.wrapit.util;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.sk.wrapit.model.User;
import com.sk.wrapit.repository.UserRepo;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("deprecation")
public class JwtUtil {

    private String secret = "";

    private final UserRepo userRepo;
    private final Long expirationDuration = (long) (24 * 60 * 60 * 1000);

    public Key key() {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(secret));
    }

    public String extractUserEmail(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    private <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parser()
                .setSigningKey(key())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private String generateToken(UserDetails userDetails) {
        User user = userRepo.findByEmail(userDetails.getUsername()).orElseThrow();
        Map<String, Object> claims = new HashMap<>();

        claims.put("user", Map.of(
                "uuid", user.getUserId(),
                "username", user.getUsername(),
                "role", user.getUserRole()));

        return createToken(claims, userDetails);
    }

    private String createToken(Map<String, Object> claims, UserDetails userDetails) {
        long time = System.currentTimeMillis();

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(userDetails.getUsername())
                .setIssuer(userDetails.getUsername())
                .setIssuedAt(new Date(time))
                .setExpiration(new Date(time + expirationDuration))
                .signWith(key())
                .compact();
    }

    public Boolean isTokenValid(String token, UserDetails userDetails) {
        final String email = extractUserEmail(token);
        return email.equals(userDetails.getUsername()) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

}
