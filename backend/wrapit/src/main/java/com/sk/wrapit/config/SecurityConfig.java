package com.sk.wrapit.config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.Customizer;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@SuppressWarnings("deprication")
public class SecurityConfig {

    private final AuthenticationProvider authenticationProvider;
    
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors(corsConfigurationSource -> corsConfigurationSource.configurationSource(corsConfigurationSource()))
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(
                        auth -> auth.requestMatchers("/wrapit/api/v1/auth/**").permitAll()
                                .anyRequest()
                                .authenticated()
                )
                .sessionManagement(
                        session -> session.sessionCreationPolicy(
                                SessionCreationPolicy.STATELESS)
                )
                .authenticationProvider(authenticationProvider)
                .httpBasic(Customizer.withDefaults());

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/*", config);

        return source;
    }
}
