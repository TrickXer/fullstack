package com.sk.wrapit.service;

import java.util.List;

import com.sk.wrapit.dto.request.EventReq;
import com.sk.wrapit.dto.response.BasicRes;
import com.sk.wrapit.model.Event;

public interface EventService {

    BasicRes<String> addEvent(EventReq eventReq);

    BasicRes<String> deleteEvent(String eventId);

    BasicRes<String> updateEvent(Event event) throws IllegalArgumentException, IllegalAccessException;

    BasicRes<List<Event>> viewAllEvent(); 

    BasicRes<Event> viewOneEvent(String eventId);
}
