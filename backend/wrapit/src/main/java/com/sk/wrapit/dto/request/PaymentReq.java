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
public class PaymentReq {
    private String status;
    private Double totalAmount;
    private Date paymentDate;
    private String modeOfPayment;
}
