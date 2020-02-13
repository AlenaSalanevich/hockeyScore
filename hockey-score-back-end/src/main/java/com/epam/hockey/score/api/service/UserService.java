package com.epam.hockey.score.api.service;

import com.epam.hockey.score.api.model.user.User;
import com.epam.hockey.score.api.model.user.UserFilter;
import com.epam.hockey.score.api.model.user.UserMutableData;

import java.util.Collection;

/**
 * @author Alena Salanevich.
 */
public interface UserService {

    Integer create(UserMutableData data);

    void update(Integer id, UserMutableData data);

    void delete(Integer id);

    User get(Integer id);

    Collection<User> get(UserFilter filter);

}
