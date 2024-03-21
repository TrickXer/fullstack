package com.sk.wrapit.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class Register {
    private String username;
    private String email;
    private String password;
}
