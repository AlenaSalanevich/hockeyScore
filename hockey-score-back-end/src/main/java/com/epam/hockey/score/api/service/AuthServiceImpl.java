package com.epam.hockey.score.api.service;

import com.epam.hockey.score.api.model.user.User;
import com.epam.hockey.score.api.model.user.UserCredentials;
import com.epam.hockey.score.api.model.user.UserFilter;

/**
 * @author Alena_Salanevich
 */
public class AuthServiceImpl implements AuthService {

    private final UserService service;

    public AuthServiceImpl(UserService service) {
        this.service = service;
    }

    @Override
    public User authenticate(UserCredentials creds) {
        UserFilter filter = new UserFilter();
        filter.setLogin(creds.getLogin());
        filter.setPassword(creds.getPassword());
        return service.get(filter).stream().findFirst().orElseThrow(() -> new RuntimeException("Invalid credentials"));
    }
}
