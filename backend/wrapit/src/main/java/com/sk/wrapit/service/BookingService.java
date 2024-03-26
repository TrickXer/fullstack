package com.sk.wrapit.service;

import java.util.List;

import com.sk.wrapit.model.Booking;
import com.sk.wrapit.dto.response.BasicRes;
import com.sk.wrapit.dto.request.BookingReq;

public interface BookingService {

    BasicRes<String> addbooking(BookingReq bookingReq);

    BasicRes<String> updateBooking (Booking booking)throws IllegalArgumentException, IllegalAccessException;

    BasicRes<String> deleteBooking(String bookingId);

    BasicRes<List<Booking>> viewAllBooking();

    BasicRes<Booking> ViewOneBooking(String bookingId);
    
}
