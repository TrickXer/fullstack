package com.sk.wrapit.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Login {

    @Builder.Default
    private String message = "Something wenr wrong!";

    @Builder.Default
    private String accessToken = "";

    private String userId;
    private String usernmae;
}
