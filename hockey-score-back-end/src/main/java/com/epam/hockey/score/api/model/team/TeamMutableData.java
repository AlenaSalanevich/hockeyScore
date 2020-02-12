package com.epam.hockey.score.api.model.team;

import com.epam.hockey.score.api.model.player.Player;
import com.epam.hockey.score.api.model.stats.TeamStatistic;

import java.util.Collection;

/**
 * @author Alena Salanevich.
 */
public class TeamMutableData {

    private String name;
    private Collection<Player> players;
    private Integer score;
    private String city;
    private String description;
    Collection<TeamStatistic> stats;

    public Collection<TeamStatistic> getStats() {
        return stats;
    }

    public void setStats(Collection<TeamStatistic> stats) {
        this.stats = stats;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Collection<Player> getPlayers() {
        return players;
    }

    public void setPlayers(Collection<Player> players) {
        this.players = players;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
