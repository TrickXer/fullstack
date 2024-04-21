package com.sk.wrapit.dto.request;

import com.sk.wrapit.model.Address;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class VenueReq {
    private String venueName;
    private String venueType;
    private String venueDescription;
    private String venueCapacity;
    private Address venueAddress;
    private String venueEmail;
    private String venuePhone;
    private String venuePricing;
}
