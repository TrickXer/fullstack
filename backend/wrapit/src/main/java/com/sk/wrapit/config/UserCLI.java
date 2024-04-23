package com.sk.wrapit.config;

import org.springframework.stereotype.Service;

import java.util.Date;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.sk.wrapit.model.Address;
import com.sk.wrapit.model.Event;
import com.sk.wrapit.model.User;
import com.sk.wrapit.model.Venue;
import com.sk.wrapit.enumerated.Role;
import com.sk.wrapit.repository.EventRepo;
import com.sk.wrapit.repository.UserRepo;
import com.sk.wrapit.repository.VenueRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserCLI implements CommandLineRunner {

    private final UserRepo userRepo;
    private final VenueRepo venueRepo;
    private final EventRepo eventRepo;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        if (userRepo.count() > 0)
            return;

        var admin = User.builder()
                .name("admin")
                .verified(true)
                .email("admin@gmail.com")
                .password(passwordEncoder.encode("admin@123"))
                .role(Role.ADMIN)
                .build();
        userRepo.save(admin);

        var user = User.builder()
                .name("sk")
                .verified(true)
                .email("kingkrabby10@gmail.com")
                .password(passwordEncoder.encode("sk@123"))
                .role(Role.USER)
                .build();
        userRepo.save(user);

        var venueAddress = Address.builder()
                .street("123 Main Street")
                .city("Metropolis")
                .state("State")
                .country("United States")
                .postal("12345")
                .build();

        var venue = Venue.builder()
                .venueName("Grand Plaza Ballroom")
                .venueType("Banquet Hall")
                .venueDescription("Elegant ballroom suitable for weddings, corporate events, and special occasions.")
                .venueCapacity("175")
                .venueAddress(venueAddress)
                .venueEmail("info@grandplazaballroom.com")
                .venuePhone("+123-456-7890")
                .venuePricing("8000")
                .isAvailable(true)
                .build();
        venueRepo.save(venue);

        var event = Event.builder()
                .eventName("Tech Conference 2024")
                .eventType("Conference")
                .eventDescription("Annual technology conference featuring keynote speakers, workshops, and networking opportunities.")
                .eventDate(new Date())
                        .eventDuration("48")
                .eventLocation(venue.getVenueId())
                .eventOrganizer("Tech Events Co.")
                .eventPricing("300")
                .build();
        eventRepo.save(event);
    }
}
