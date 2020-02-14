package com.epam.hockey.score.api.model.user;

import java.util.Map;

public class User extends UserMutableData {

    private Integer id;

    private Map<String, Object> token;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Map<String, Object> getToken() {
        return token;
    }

    public void setToken(Map<String, Object> token) {
        this.token = token;
    }
}
