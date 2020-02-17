package com.epam.hockey.score.api.service.impl;

import com.epam.hockey.score.api.model.team.PageableTeam;
import com.epam.hockey.score.api.model.team.Team;
import com.epam.hockey.score.api.model.team.TeamMutableData;
import com.epam.hockey.score.api.repository.TeamRepository;
import com.epam.hockey.score.api.service.TeamService;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;
import java.util.stream.Collectors;

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

    public PageableTeam get(Integer limit, Integer offset) {
        PageableTeam team = new PageableTeam();
        Collection<Team> repoTeams = Optional.ofNullable(teamRepository.select()).orElse(new ArrayList<>());
        team.setTotalCount(repoTeams.size());
        team.setTeams(repoTeams.stream().skip(offset).limit(limit).collect(Collectors.toList()));
        return team;
    }
}
