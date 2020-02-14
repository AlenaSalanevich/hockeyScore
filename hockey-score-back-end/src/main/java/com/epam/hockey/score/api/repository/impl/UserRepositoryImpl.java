package com.epam.hockey.score.api.repository.impl;

import com.epam.hockey.score.api.model.user.User;
import com.epam.hockey.score.api.model.user.UserFilter;
import com.epam.hockey.score.api.model.user.UserMutableData;
import com.epam.hockey.score.api.model.user.UserRole;
import com.epam.hockey.score.api.repository.UserRepository;

import java.util.Collection;

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
        stubUser.setName("Alenka Salanevich");
        stubUser.setPassword("111");
        stubUser.setRoles(singletonList(UserRole.admin));
        return stubUser;
    }

    public User getStubUser() {
        return stubUser;
    }

    public void setStubUser(User stubUser) {
        this.stubUser = stubUser;
    }
}
