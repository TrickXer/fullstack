package com.sk.wrapit.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class Login {
    private String email;
    private String password;
}
