package com.sk.wrapit.service;

import com.sk.wrapit.dto.response.BasicRes;
import com.sk.wrapit.model.Customer;

public interface CustomerService {
    BasicRes<String> add(Customer customer);
}
