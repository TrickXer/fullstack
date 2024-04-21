package com.sk.wrapit.service.impls;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sk.wrapit.dto.request.EventReq;
import com.sk.wrapit.dto.response.BasicRes;
import com.sk.wrapit.model.Event;
import com.sk.wrapit.repository.EventRepo;
import com.sk.wrapit.service.EventService;
import com.sk.wrapit.util.Patcher;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EventServiceImpl implements EventService {
    
    private final EventRepo eventRepo;

    @Override
    public BasicRes<String> addEvent(EventReq eventReq){

        Event event = Event.builder()
                    .eventName(eventReq.getEventName())
                    .eventType(eventReq.getEventType())
                    .eventDescription(eventReq.getEventDescription())
                    .eventDate(eventReq.getEventDate())
                    .eventDuration(eventReq.getEventDuration())
                    .eventLocation(eventReq.getEventLocation())
                    .eventOrganizer(eventReq.getEventOrganizer())
                    .eventPricing(eventReq.getEventPricing())
                    .build();

        eventRepo.save(event);

        return BasicRes.<String>builder()
                .message("Event Created SuccessFully")
                .data(event.getEventId())
                .build();
    }

    @Override
    public BasicRes<String> deleteEvent( String eventId){

        var isEventPresent = eventRepo.findById(eventId).orElse(null);

        if(isEventPresent!=null)
        eventRepo.deleteById(eventId);


        return BasicRes.<String>builder()
                .message("Event Deleted SuccessFully")
                .build();
    }

    @Override
    public BasicRes<String> updateEvent(Event event) throws IllegalArgumentException, IllegalAccessException{
        Event isEventPresent = eventRepo.findById(event.getEventId()).orElseThrow();
        isEventPresent = Patcher.patcher(isEventPresent, event);
        

        return BasicRes.<String>builder()
                .message("Event Updated Successfully")
                .build();
    }

    @Override
    public BasicRes<List<Event>> viewAllEvent(){
        return BasicRes.<List<Event>>builder()
                .message("List of Events are Displayed Successfully")
                .data(eventRepo.findAll())
                .build(); 
    }

    @Override
    public BasicRes<Event> viewOneEvent(String eventId){

        return BasicRes.<Event>builder()
                .message("Event Display is Done Successfully")
                .data(eventRepo.findById(eventId).orElse(null))
                .build();
    }


}
