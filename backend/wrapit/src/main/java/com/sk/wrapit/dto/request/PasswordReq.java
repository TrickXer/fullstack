package com.sk.wrapit.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PasswordReq {
    private String currentPassword;
    private String newPassword;
    private String confirmPassword;
}
