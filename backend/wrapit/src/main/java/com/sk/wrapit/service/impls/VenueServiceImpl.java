package com.sk.wrapit.service.impls;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sk.wrapit.model.Venue;
import com.sk.wrapit.util.Patcher;
import com.sk.wrapit.repository.VenueRepo;
import com.sk.wrapit.service.VenueService;
import com.sk.wrapit.dto.request.VenueReq;
import com.sk.wrapit.dto.response.BasicRes;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class VenueServiceImpl implements VenueService {
    private final VenueRepo venueRepo;

    @Override
    public BasicRes<String> add(VenueReq request) {
        Venue venue = Venue.builder()
                .venueName(request.getVenueName())
                .venueLocation(request.getVenueLocation())
                .charges(request.getVenueCharge())
                .maxCapacity(request.getMaxCapacity())
                .suitableFor(request.getSuitableFor())
                .build();

        venueRepo.save(venue);

        return BasicRes.<String>builder()
                .message("Venue added successfully")
                .build();
    }

    @Override
    public BasicRes<List<Venue>> all() {
        List<Venue> venues = venueRepo.findAll();

        return BasicRes.<List<Venue>>builder()
                .message("All venues data retrieved successfully")
                .data(venues)
                .build();
    }

    @Override
    public BasicRes<Venue> get(String id) {
        var venue = venueRepo.findById(id).orElse(null);

        return BasicRes.<Venue>builder()
                .message("Venue data retrieed successfully")
                .data(venue)
                .build();
    }

    @Override
    public BasicRes<String> patch(Venue newVenue) throws IllegalArgumentException, IllegalAccessException {
        Venue oldVenue = venueRepo.findById(newVenue.getVenueId()).orElseThrow();
        oldVenue = Patcher.patcher(oldVenue, newVenue);

        venueRepo.save(oldVenue);
        return BasicRes.<String>builder()
                .message("venue details updated successfullt")
                .data("true")
                .build();
    }
}
