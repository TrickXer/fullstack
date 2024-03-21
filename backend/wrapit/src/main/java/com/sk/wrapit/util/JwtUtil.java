package com.sk.wrapit.util;

import java.util.Map;
import java.util.Date;
import java.util.HashMap;
import java.security.Key;
import java.util.function.Function;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;

import com.sk.wrapit.model.User;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("deprecation")
public class JwtUtil {

    @Value("${application.jwt.secret-key}")
    private String secret;

    private final Long expirationDuration = (long) (24 * 60 * 60 * 1000);

    public Key key() {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(secret));
    }

    public String extractUserEmail(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
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

    public String generateToken(User user) {
        Map<String, Object> claims = new HashMap<>();

        claims.put("user", Map.of(
                "uuid", user.getUserId(),
                "username", user.getUsername(),
                "role", user.getUserRole()));

        return createToken(claims, user);
    }

    public String createToken(Map<String, Object> claims, UserDetails user) {
        System.out.println(user.getUsername());

        long time = System.currentTimeMillis();

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(user.getUsername())
                .setIssuer(user.getUsername())
                .setIssuedAt(new Date(time))
                .setExpiration(new Date(time + expirationDuration))
                .signWith(key())
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
