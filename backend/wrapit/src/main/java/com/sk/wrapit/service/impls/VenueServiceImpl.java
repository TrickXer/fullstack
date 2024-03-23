package com.sk.wrapit.service.impls;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sk.wrapit.model.Venue;
import com.sk.wrapit.util.Patcher;
import com.sk.wrapit.repository.VenueRepo;
import com.sk.wrapit.service.VenueService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class VenueServiceImpl implements VenueService {
    private final VenueRepo venueRepo;

    // SAVE
    public boolean add(Venue venue) {
        return venueRepo.save(venue) != null;
    }

    // GET_ALL
    public List<Venue> all() {
        return venueRepo.findAll();
    }

    // GET
    public Venue get(String id) {
        return venueRepo.findById(id).orElseThrow();
    }

    // PATCH
    public boolean patch(String id, Venue newVenue) throws IllegalArgumentException, IllegalAccessException {
        Venue oldVenue = venueRepo.findById(id).orElseThrow();
        oldVenue = Patcher.patcher(oldVenue, newVenue);

        return venueRepo.save(oldVenue) != null;
    }
}
