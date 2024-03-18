package com.example.feast.emailsender;

import jakarta.mail.Message;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.net.ConnectException;

@Slf4j
@Service
@RequiredArgsConstructor
public class EmailService {
    @Value("${feast.base.url}")
    private String baseUrl;


    private final JavaMailSender javaMailSender;

    public void sendEmail(String to, String token) throws MessagingException {
        log.info("Mail setup");
        log.info(to);

        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        mimeMessage.setFrom(new InternetAddress("feast.food.love@gmail.com"));
        mimeMessage.setRecipient(MimeMessage.RecipientType.TO, new InternetAddress(to));
        mimeMessage.setSubject("Email Confirmation from Feast");

        String link = baseUrl + "/api/v1/auth/email/verify?token=" + token;

        String htmlContent = "<p>Please verify your email address by clicking on the link below.</p>" +
                "<p>If unable to click, you can copy and paste the link in your browser.</p>" +
                "<a href=" + link + ">";

        mimeMessage.setContent(htmlContent, "text/html; charset=utf-8");

//        MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, true);
//        messageHelper.setSubject("Email Confirmation from Feast");
//        messageHelper.setTo(to.trim());
//        messageHelper.setText(htmlContent, true);

        javaMailSender.send(mimeMessage);

    }

}
