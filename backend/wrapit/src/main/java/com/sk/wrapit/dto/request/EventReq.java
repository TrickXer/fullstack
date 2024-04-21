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
public class EventReq {
    private String eventName;
    private String eventType;
    private String eventDescription;
    private Date eventDate;
    private String eventDuration;
    private String eventLocation;
    private String eventOrganizer;
    private String eventPricing;
}
