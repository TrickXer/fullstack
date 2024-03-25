package com.sk.wrapit.service.impls;

import org.springframework.stereotype.Service;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.beans.factory.annotation.Value;

import com.sk.wrapit.util.MailBody;
import com.sk.wrapit.service.MailService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MailServiceImpl implements MailService {

    private final JavaMailSender javaMailSender;

    @Value("${spring.mail.username}")
    private String sender;

    @Override
    public void sendSimpleMail(MailBody body) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();

        mailMessage.setFrom(sender);
        mailMessage.setTo(body.getRecipient());
        mailMessage.setSubject(body.getSubject());
        mailMessage.setText(body.getMsgBody());

        javaMailSender.send(mailMessage);
    }

}
