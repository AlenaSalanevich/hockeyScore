package com.epam.hockey.score.api.repository;

import com.epam.hockey.score.api.model.user.User;
import com.epam.hockey.score.api.model.user.UserFilter;
import com.epam.hockey.score.api.model.user.UserMutableData;

import java.util.Collection;

/**
 * @author Alena Salanevich.
 */
public interface UserRepository {

    Integer insert(UserMutableData data);

    void update(Integer id, UserMutableData data);

    void remove(Integer id);

    User select(Integer id);

    Collection<User> select();

    Collection<User> selectByFilter(UserFilter filter);

}
