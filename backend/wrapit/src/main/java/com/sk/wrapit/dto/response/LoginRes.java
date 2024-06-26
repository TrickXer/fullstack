package com.sk.wrapit.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sk.wrapit.model.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoginRes {

    private String message;

    @JsonProperty("access_token")
    private String accessToken;

    private User user;
}
