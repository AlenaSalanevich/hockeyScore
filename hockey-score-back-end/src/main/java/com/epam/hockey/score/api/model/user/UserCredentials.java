package com.epam.hockey.score.api.model.user;

public class UserCredentials {

    private String login;
    private String secret;

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getSecret() {
        return secret;
    }

    public void setSecret(String secret) {
        this.secret = secret;
    }
}
