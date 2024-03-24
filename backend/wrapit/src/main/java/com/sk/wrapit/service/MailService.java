package com.sk.wrapit.service;

import com.sk.wrapit.dto.response.BasicRes;
import com.sk.wrapit.util.MailBody;

public interface MailService {
    BasicRes<String> sendSimpleMail(MailBody details);
}
