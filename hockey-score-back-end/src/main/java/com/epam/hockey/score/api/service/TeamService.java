package com.epam.hockey.score.api.service;

import com.epam.hockey.score.api.model.team.Team;
import com.epam.hockey.score.api.model.team.TeamMutableData;

import java.util.Collection;

/**
 * @author Alena Salanevich.
 */
public interface TeamService {

    Integer create(TeamMutableData data);

    void update(Integer id, TeamMutableData data);

    void delete(Integer id);

    Team get(Integer id);

    Collection<Team> get();
}
