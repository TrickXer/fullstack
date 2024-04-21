package com.sk.wrapit.dto.request;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder 
@NoArgsConstructor
@AllArgsConstructor
public class BookingReq {
    private String eventId;
    private String venueId;
    private Date eventDate;
}
