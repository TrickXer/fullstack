package com.sk.wrapit.service;

import java.util.List;

import com.sk.wrapit.model.Venue;
import com.sk.wrapit.dto.request.VenueReq;
import com.sk.wrapit.dto.response.BasicRes;

public interface VenueService {
    BasicRes<String> add(VenueReq request);

    BasicRes<String> delete(String eventId);

    BasicRes<List<Venue>> all();

    BasicRes<Venue> get(String id);

    BasicRes<String> patch(Venue request) throws IllegalArgumentException, IllegalAccessException;
}
