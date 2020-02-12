package com.epam.hockey.score.api.model.team;

/**
 * @author Alena Salanevich.
 */
public class Team extends TeamMutableData {
    private Integer id;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
