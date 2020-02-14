package com.epam.hockey.score.api.service;

import com.epam.hockey.score.api.model.user.User;
import com.epam.hockey.score.api.model.user.UserCredentials;

/**
 * @author Alena Salanevich.
 */
public interface AuthService {

    User authenticate(UserCredentials creds);

    void logout();

    String getCurrentUserToken();

}
