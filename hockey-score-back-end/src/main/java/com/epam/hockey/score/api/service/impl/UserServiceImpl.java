package com.epam.hockey.score.api.service.impl;

import com.epam.hockey.score.api.model.user.User;
import com.epam.hockey.score.api.model.user.UserFilter;
import com.epam.hockey.score.api.model.user.UserMutableData;
import com.epam.hockey.score.api.repository.UserRepository;
import com.epam.hockey.score.api.service.UserService;

import java.util.Collection;

/**
 * @author Alena_Salanevich.
 */
public class UserServiceImpl implements UserService {

    private final UserRepository repository;

    public UserServiceImpl(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public Integer create(UserMutableData data) {
        return repository.insert(data);
    }

    @Override
    public void update(Integer id, UserMutableData data) {
        repository.update(id, data);
    }

    @Override
    public void delete(Integer id) {
        repository.remove(id);
    }

    @Override
    public User get(Integer id) {
        return repository.select(id);
    }

    @Override
    public Collection<User> get(UserFilter filter) {
        return repository.selectByFilter(filter);
    }
}
