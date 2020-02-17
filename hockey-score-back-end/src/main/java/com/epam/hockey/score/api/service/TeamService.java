package com.epam.hockey.score.api.service;

import com.epam.hockey.score.api.model.team.PageableTeam;
import com.epam.hockey.score.api.model.team.Team;
import com.epam.hockey.score.api.model.team.TeamMutableData;

/**
 * @author Alena Salanevich.
 */
public interface TeamService {

    Integer create(TeamMutableData data);

    void update(Integer id, TeamMutableData data);

    void delete(Integer id);

    Team get(Integer id);

    PageableTeam get(Integer limit, Integer offset);
}
