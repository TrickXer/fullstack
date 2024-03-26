package com.sk.wrapit.dto.request;

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
    private String description;
    private String eventPackage;
    private int participantCount;
    private double charges;
}
