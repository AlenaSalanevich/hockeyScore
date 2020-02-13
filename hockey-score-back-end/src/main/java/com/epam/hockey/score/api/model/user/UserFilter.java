package com.epam.hockey.score.api.model.user;

/**
 * @author Alena_Salanevich
 */
public class UserFilter {
    private UserRole role;
    private String secret;
    private String login;

    public String getSecret() {
        return secret;
    }

    public void setSecret(String secret) {
        this.secret = secret;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }
}
