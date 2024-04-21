package com.sk.wrapit.service.impls;

import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.sk.wrapit.dto.request.PaymentReq;
import com.sk.wrapit.dto.response.BasicRes;
import com.sk.wrapit.model.Payment;
import com.sk.wrapit.repository.PaymentRepo;
import com.sk.wrapit.service.PaymentService;
import com.sk.wrapit.util.Patcher;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {


    private final PaymentRepo paymentRepo;


    @Override
    public BasicRes<String> addPayment(PaymentReq paymentReq){

        var payment = Payment.builder()
                        .status(paymentReq.getStatus())
                        .totalAmount(paymentReq.getTotalAmount()) 
                        .paymentDate(paymentReq.getPaymentDate())
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

    @Override
    public BasicRes<String> updatePayment(Payment payment) throws IllegalArgumentException, IllegalAccessException {
        Payment oldPayment = paymentRepo.findById(payment.getPaymentId()).orElseThrow();
        oldPayment = Patcher.patcher(oldPayment, payment);

        oldPayment.setPaymentDate(new Date());
        oldPayment.setStatus("paid");

        paymentRepo.save(oldPayment);
        return BasicRes.<String>builder()
                .message("Payment Updated Successfully")
                .build();
    }
}
