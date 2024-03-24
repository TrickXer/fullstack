package com.sk.wrapit.util;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MailBody {
    private String recipient;
    private String msgBody;
    private String subject;
}
