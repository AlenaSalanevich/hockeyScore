package com.epam.hockey.score.api.model.team;

import java.util.Collection;

public class PageableTeam {
    private Integer totalCount;

    private Collection<Team> teams;

    public Integer getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(Integer totalCount) {
        this.totalCount = totalCount;
    }

    public Collection<Team> getTeams() {
        return teams;
    }

    public void setTeams(Collection<Team> teams) {
        this.teams = teams;
    }
}
