package com.sk.wrapit.dto.request;

import java.time.LocalDateTime;

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
    private Integer headCount;
    private LocalDateTime eventDate;
}
