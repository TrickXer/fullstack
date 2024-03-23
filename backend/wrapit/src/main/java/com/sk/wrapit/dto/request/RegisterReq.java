package com.sk.wrapit.dto.request;

import io.micrometer.common.lang.NonNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterReq {
    @NonNull
    private String username;

    @NonNull
    private String email;

    @NonNull
    private String password;
}
