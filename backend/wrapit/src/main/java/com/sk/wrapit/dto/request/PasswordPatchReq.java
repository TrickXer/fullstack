package com.sk.wrapit.dto.request;

import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PasswordPatchReq {
    private String newPassword;
    private String confirmPassword;

    public boolean isValid() {
        return newPassword.equals(confirmPassword);
    }
}
