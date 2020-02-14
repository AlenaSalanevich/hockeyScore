package com.epam.hockey.score.api.rest;

import com.epam.hockey.score.api.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class Validator {
    @Autowired
    private AuthService authService;

    public void validate(String token) {
        Optional.ofNullable(token).map(t ->
        {
            if (!t.equalsIgnoreCase(authService.getCurrentUserToken())) {
                throw new RuntimeException("Unauthorized request");
            }
            return t;
        }).orElseThrow(() -> new RuntimeException("Unauthorized request"));

    }
}
