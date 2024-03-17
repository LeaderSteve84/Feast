package com.example.feast.auth;

import com.example.feast.config.JwtService;
import com.example.feast.emailsender.EmailService;
import com.example.feast.user.Role;
import com.example.feast.user.User;
import com.example.feast.user.UserRepository;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    private final AuthenticationManager authenticationManager;

    private final EmailService emailService;


    public AuthResponse register(RegistrationRequest request) throws MessagingException {
        var user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmailAddress())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        userRepository.save(user);

        var jwtToken = jwtService.generateToken(user);
        System.out.println("jwtToken is " + jwtToken);
        emailService.sendEmail(request.getEmailAddress(), jwtToken);
        return AuthResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthResponse login(AuthRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmailAddress(),
                        request.getPassword()
                )
        );
        var user = userRepository.findByEmail(
                request.getEmailAddress())
                .orElseThrow(
                        () -> new UsernameNotFoundException("User not found")
                );
        var jwtToken = jwtService.generateToken(user);
        System.out.println(jwtToken);
        return AuthResponse.builder()
                .token(jwtToken)
                .message("Account creation successful. Check your email for OTP verification.")
                .build();
    }

    public AuthResponse confirmEmail(String token) {
        var email = jwtService.extractUsername(token);
        var user = userRepository.findByEmail(email);
        if (user.isPresent()) {
            var confirmedUser = user.get();
           confirmedUser.setIsEnabled(true);
           userRepository.save(confirmedUser);
            return AuthResponse.builder()
                    .message("Email confirmed!")
                    .build();
        } else {
            return AuthResponse.builder()
                    .message("Email address already verified!")
                    .build();
        }

    };
}
