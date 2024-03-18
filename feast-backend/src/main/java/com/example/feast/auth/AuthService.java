package com.example.feast.auth;

import com.example.feast.config.JwtService;
import com.example.feast.emailsender.EmailService;
import com.example.feast.user.Role;
import com.example.feast.user.User;
import com.example.feast.user.UserRepository;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    private final AuthenticationManager authenticationManager;

    private final EmailService emailService;


    public AuthResponse register(RegistrationRequest request) throws MessagingException {
        User user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .emailAddress(request.getEmailAddress())
                .password(passwordEncoder.encode(request.getPassword()))
                .isEnabled(false)
                .role(Role.USER)
                .build();
        userRepository.save(user);

        var jwtToken = jwtService.generateToken(user);
        log.info(jwtToken);
        emailService.sendEmail(request.getEmailAddress(), jwtToken);
        return AuthResponse.builder()
                .build();
    }

    public AuthResponse login(AuthRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmailAddress(),
                        request.getPassword()
                )
        );
        var user = userRepository.findByEmailAddress(
                request.getEmailAddress())
                .orElseThrow(
                        () -> new UsernameNotFoundException("User not found")
                );
        var jwtToken = jwtService.generateToken(user);
        log.info(jwtToken);
        return AuthResponse.builder()
                .message("Logged in successfully")
                .build();
    }

    public AuthResponse confirmEmail(String token) {
        String email = jwtService.extractUsername(token);
        var user = userRepository.findByEmailAddress(email);
        if (email != null) {
            if (user.isPresent()) {
                var signedUpUser = user.get();
                if (signedUpUser.isEnabled()) {
                    return AuthResponse.builder()
                            .message("Email address already verified!")
                            .build();
                } else {
                    signedUpUser.setIsEnabled(true);
                    userRepository.save(signedUpUser);
                    return AuthResponse.builder()
                            .message("Email confirmed!")
                            .build();

                }

            } else {
                return AuthResponse.builder()
                        .message("User not found")
                        .build();
            }
        }else {
            return AuthResponse.builder()
                    .message("Link not properly formatted")
                    .build();
        }
    };
}
