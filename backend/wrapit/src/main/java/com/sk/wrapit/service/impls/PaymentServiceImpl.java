package com.sk.wrapit.service.impls;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sk.wrapit.dto.request.PaymentReq;
import com.sk.wrapit.dto.response.BasicRes;
import com.sk.wrapit.model.Payment;
import com.sk.wrapit.repository.PaymentRepo;
import com.sk.wrapit.service.PaymentService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class PaymentServiceImpl implements PaymentService {


    private final PaymentRepo paymentRepo;


    @Override
    public BasicRes<String> addPayment(PaymentReq paymentReq){

        var payment = Payment.builder()
                        .status(paymentReq.getStatus())
                        .totalAmount(paymentReq.getTotalAmount()) 
                        .paymentDate(paymentReq.getPaymentDate())
                        .modeOfPayment(paymentReq.getModeOfPayment())
                        .build();

        paymentRepo.save(payment);

        return BasicRes.<String>builder()
                .message("Payment Done SuccessFully")
                .build();
    }

    @Override
    public BasicRes<List<Payment>> viewAllPayment(){

        return BasicRes.<List<Payment>>builder()
                .data(paymentRepo.findAll())
                .message("All Payment are Viewed Successfully")
                .build();
    }

    @Override
    public BasicRes<Payment> viewOnePayment(String paymentId){

        return BasicRes.<Payment>builder()
                .data(paymentRepo.findById(paymentId).orElse(null))
                .message("Single Payment is viewed successfully")
                .build();
    }
}
