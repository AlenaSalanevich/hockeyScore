package com.epam.hockey.score.api.repository;

import com.epam.hockey.score.api.model.team.Team;
import com.epam.hockey.score.api.model.team.TeamMutableData;

import java.util.Collection;

/**
 * @author Alena Salanevich.
 */
public interface TeamRepository {

    Integer insert(TeamMutableData data);

    void update(Integer id, TeamMutableData data);

    void remove(Integer id);

    Team select(Integer id);

    Collection<Team> select();

}
