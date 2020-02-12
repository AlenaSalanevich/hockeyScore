package com.epam.hockey.score.api.model.player;

import com.epam.hockey.score.api.model.stats.PlayerStatistic;

import java.util.Collection;
import java.util.Date;

/**
 * @author Alena Salanevich.
 */
public class PlayerMutableData {
    private String name;
    private PlayerPosition position;
    private Integer number;
    private Date born;
    private Integer height;
    private Integer weight;
    private Integer age;
    private Shoots shoots;
    private Country country;
    private Collection<PlayerStatistic> stats;
    private Integer currentTeamId;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public PlayerPosition getPosition() {
        return position;
    }

    public void setPosition(PlayerPosition position) {
        this.position = position;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public Date getBorn() {
        return born;
    }

    public void setBorn(Date born) {
        this.born = born;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Shoots getShoots() {
        return shoots;
    }

    public void setShoots(Shoots shoots) {
        this.shoots = shoots;
    }

    public Country getCountry() {
        return country;
    }

    public void setCountry(Country country) {
        this.country = country;
    }

    public Collection<PlayerStatistic> getStats() {
        return stats;
    }

    public void setStats(Collection<PlayerStatistic> stats) {
        this.stats = stats;
    }

    public Integer getCurrentTeamId() {
        return currentTeamId;
    }

    public void setCurrentTeamId(Integer currentTeamId) {
        this.currentTeamId = currentTeamId;
    }
}
