package com.sk.wrapit.service.impls;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import com.sk.wrapit.util.Patcher;
import com.sk.wrapit.model.Booking;
import com.sk.wrapit.model.Customer;
import com.sk.wrapit.model.Payment;
import com.sk.wrapit.repository.UserRepo;
import com.sk.wrapit.repository.EventRepo;
import com.sk.wrapit.repository.VenueRepo;
import com.sk.wrapit.dto.response.BasicRes;
import com.sk.wrapit.dto.request.BookingReq;
import com.sk.wrapit.repository.BookingRepo;
import com.sk.wrapit.service.BookingService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class BookingServiceImpl implements BookingService {

    private final UserRepo userRepo;
    private final EventRepo eventRepo;
    private final VenueRepo venueRepo;
    private final BookingRepo bookingRepo;

    @Override
    public BasicRes<String> addbooking(BookingReq bookingReq) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        var user = userRepo.findByEmail(authentication.getName()).orElseThrow();

        Customer customer = Customer.builder()
                .customerName(user.getName())
                .user(user)
                .build();

        var event = eventRepo.findById(bookingReq.getEventId()).orElseThrow();
        var venue = venueRepo.findById(bookingReq.getVenueId()).orElseThrow();
                
        Payment payment = Payment.builder()
                .status("pending")
                .totalAmount(event.getCharges() + venue.getCharges())
                .build();
        
        Booking booking = Booking.builder()
                .bookingStatus("pending")
                .headCount(bookingReq.getHeadCount())
                .eventDate(bookingReq.getEventDate())
                .submissionDate(LocalDateTime.now())
                .customer(customer)
                .event(event)
                .venue(venue)
                .payment(payment)
                .build();

        bookingRepo.save(booking);

        return BasicRes.<String>builder()
                .message("Booking Created Successfully")
                .build();

    }

    @Override
    public BasicRes<String> updateBooking(Booking booking) throws IllegalArgumentException, IllegalAccessException {

        Booking book = bookingRepo.findById(booking.getBookingId()).orElse(null);

        book = Patcher.patcher(book, booking);

        bookingRepo.save(book);

        return BasicRes.<String>builder()
                .message("Booking Updated Successfully")
                .build();
    }

    @Override
    public BasicRes<String> deleteBooking(String bookingId) {

        bookingRepo.deleteById(bookingId);

        return BasicRes.<String>builder()
                .message("Booking Deleted Successfully")
                .build();
    }

    @Override
    public BasicRes<List<Booking>> viewAllBooking() {
        List<Booking> bookings = bookingRepo.findAll();

        return BasicRes.<List<Booking>>builder()
                .message("All Data Are Viewed SuccessFully")
                .data(bookings)
                .build();
    }

    @Override
    public BasicRes<Booking> ViewOneBooking(String bookingId) {
        var booking = bookingRepo.findById(bookingId).orElseThrow();

        return BasicRes.<Booking>builder()
                .message("Required booking details are retireved successFully")
                .data(booking)
                .build();
    }
}
