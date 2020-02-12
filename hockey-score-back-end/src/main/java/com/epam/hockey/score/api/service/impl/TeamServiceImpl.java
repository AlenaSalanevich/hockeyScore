package com.epam.hockey.score.api.service.impl;

import com.epam.hockey.score.api.model.team.Team;
import com.epam.hockey.score.api.model.team.TeamMutableData;
import com.epam.hockey.score.api.repository.TeamRepository;
import com.epam.hockey.score.api.service.TeamService;

import java.util.Collection;

/**
 * @author Alena Salanevich.
 */
public class TeamServiceImpl implements TeamService {

    private final TeamRepository teamRepository;

    public TeamServiceImpl(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    public Integer create(TeamMutableData data) {
        return teamRepository.insert(data);
    }

    public void update(Integer id, TeamMutableData data) {
        teamRepository.update(id, data);
    }

    public void delete(Integer id) {
        teamRepository.remove(id);
    }

    public Team get(Integer id) {
        return teamRepository.select(id);
    }

    public Collection<Team> get() {
        return teamRepository.select();
    }
}
