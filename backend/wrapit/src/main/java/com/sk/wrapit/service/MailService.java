package com.sk.wrapit.service;

import com.sk.wrapit.util.MailBody;

public interface MailService {
    void sendSimpleMail(MailBody details);
}
