package com.sk.wrapit.service;

import java.util.List;

import com.sk.wrapit.dto.request.PaymentReq;
import com.sk.wrapit.dto.response.BasicRes;
import com.sk.wrapit.model.Payment;

public interface PaymentService {

    BasicRes<Payment> viewOnePayment(String paymentId);

    BasicRes<List<Payment>> viewAllPayment();

    BasicRes<String> addPayment(PaymentReq paymentReq);
}
