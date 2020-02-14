package com.epam.hockey.score.api.repository.impl;

import com.epam.hockey.score.api.model.user.User;
import com.epam.hockey.score.api.model.user.UserFilter;
import com.epam.hockey.score.api.model.user.UserMutableData;
import com.epam.hockey.score.api.model.user.UserRole;
import com.epam.hockey.score.api.repository.UserRepository;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static java.util.Collections.EMPTY_LIST;
import static java.util.Collections.singletonList;

public class UserRepositoryImpl implements UserRepository {

    private User stubUser = createStubUser();

    @Override
    public Integer insert(UserMutableData data) {
        return null;
    }

    @Override
    public void update(Integer id, UserMutableData data) {
    }

    @Override
    public void remove(Integer id) {
    }

    @Override
    public User select(Integer id) {
        return getStubUser();
    }

    @Override
    public Collection<User> select() {
        return null;
    }

    @Override
    public Collection<User> selectByFilter(UserFilter filter) {
        return stubUser.getLogin().equalsIgnoreCase(filter.getLogin())
                && stubUser.getPassword().equalsIgnoreCase(filter.getPassword()) ? singletonList(stubUser) : EMPTY_LIST;
    }

    public User createStubUser() {
        User stubUser = new User();
        stubUser.setId(1);
        stubUser.setLogin("Alena");
        stubUser.setName("Alena Salanevich");
        stubUser.setPassword("111");
        stubUser.setRoles(singletonList(UserRole.admin));
        stubUser.setEmail("alena.salanevich@epam.com");
        stubUser.setAuth(true);
        stubUser.setToken(generateStubToken(stubUser));
        return stubUser;
    }

    public Map<String, Object> generateStubToken(User stubUser) {
        HashMap<String, Object> stubToken = new HashMap<>();
        stubToken.put("login", stubUser.getLogin());
        stubToken.put("createDate", new Date());
        stubToken.put("expirationDate", Date.from(((Date) stubToken.get("createDate")).toInstant().plusSeconds(600)));
        JwtBuilder jwtBuilder = Jwts.builder();
        jwtBuilder.setExpiration(((Date) stubToken.get("expirationDate")));
        jwtBuilder.setClaims(stubToken);
        String key = "stub";
        String token = jwtBuilder.signWith(SignatureAlgorithm.HS512, key).compact();
        stubToken.put("token", token);
        return stubToken;
    }

    public User getStubUser() {
        return stubUser;
    }

    public void setStubUser(User stubUser) {
        this.stubUser = stubUser;
    }
}
