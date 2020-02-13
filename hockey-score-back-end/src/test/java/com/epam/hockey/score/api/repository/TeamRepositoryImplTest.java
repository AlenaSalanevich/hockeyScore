package com.epam.hockey.score.api.repository;

import com.epam.hockey.score.api.model.team.Team;
import com.epam.hockey.score.api.model.team.TeamMutableData;
import com.epam.hockey.score.api.repository.impl.PlayerRepositoryImpl;
import com.epam.hockey.score.api.repository.impl.TeamRepositoryImpl;
import com.epam.hockey.score.api.service.PlayerService;
import com.epam.hockey.score.api.service.impl.PlayerServiceImpl;
import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.util.Collection;
import java.util.Comparator;

public class TeamRepositoryImplTest {

    TeamRepository teamRepository;
    ObjectMapper mapper;
    PlayerService playerService;

    public ObjectMapper mapper() {
        final ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        objectMapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);
        objectMapper.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.NONE);
        objectMapper.setVisibility(PropertyAccessor.FIELD, JsonAutoDetect.Visibility.ANY);
        objectMapper.registerModule(new JavaTimeModule());
        return objectMapper;
    }

    @BeforeMethod
    public void setUp() {
        mapper = mapper();
        playerService = new PlayerServiceImpl(new PlayerRepositoryImpl(mapper, "src/test/resources"));
        teamRepository = new TeamRepositoryImpl(mapper, "src/test/resources", playerService);
    }

    @AfterMethod
    public void tearDown() {
    }

    @Test
    public void testInsert() {
        TeamMutableData data = getTeamMutableData();
        Integer teamId = teamRepository.insert(data);
        Collection<Team> teams = teamRepository.select();
        Integer lastId = teams.stream().max(Comparator.comparingInt(Team::getId)).get().getId();
        Assert.assertNotNull(teamId);
        Assert.assertEquals(teamId, Integer.valueOf(lastId));
    }

    @Test(dependsOnMethods = "testInsert")
    public void testUpdate() {
        TeamMutableData data = getTeamMutableData();
        data.setDescription(data.getDescription() + "UP");
        teamRepository.update(6, data);
        Team updated = teamRepository.select(6);
        Assert.assertNotNull(updated);
        Assert.assertEquals(updated.getDescription(), data.getDescription());
    }

    private TeamMutableData getTeamMutableData() {
        TeamMutableData data = new TeamMutableData();
        data.setName("Torpedo");
        data.setCity("Moscow");
        data.setDescription("Moscow team");
        data.setScore(100);
        return data;
    }

    @Test
    public void testSelect() {
        Team team = teamRepository.select(1);
        Assert.assertNotNull(team);
        Assert.assertEquals(team.getId(), Integer.valueOf(1));
    }

    @Test
    public void testSelectAll() {
        Collection<Team> teams = teamRepository.select();
        Assert.assertNotNull(teams);
    }
}