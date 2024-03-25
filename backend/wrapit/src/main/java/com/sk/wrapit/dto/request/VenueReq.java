package com.sk.wrapit.dto.request;

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
    private String maxCapacity;
    private double venueCharge;
    private String suitableFor;
    private String venueLocation;
}
