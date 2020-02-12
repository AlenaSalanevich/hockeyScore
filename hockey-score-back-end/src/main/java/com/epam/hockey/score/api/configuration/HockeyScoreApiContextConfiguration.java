package com.epam.hockey.score.api.configuration;

import com.epam.hockey.score.api.repository.PlayerRepository;
import com.epam.hockey.score.api.repository.TeamRepository;
import com.epam.hockey.score.api.repository.impl.PlayerRepositoryImpl;
import com.epam.hockey.score.api.repository.impl.TeamRepositoryImpl;
import com.epam.hockey.score.api.service.PlayerService;
import com.epam.hockey.score.api.service.TeamService;
import com.epam.hockey.score.api.service.impl.PlayerServiceImpl;
import com.epam.hockey.score.api.service.impl.TeamServiceImpl;
import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class HockeyScoreApiContextConfiguration {

    private final String PATH = "C:\\Users\\Alena_Salanevich\\IdeaProjects\\hockeyScore\\hockey-score-back-end\\src\\main\\resources";

    @Bean
    public ObjectMapper mapper() {
        final ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        objectMapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);
        objectMapper.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.NONE);
        objectMapper.setVisibility(PropertyAccessor.FIELD, JsonAutoDetect.Visibility.ANY);
        objectMapper.registerModule(new JavaTimeModule());
        return objectMapper;
    }

    @Bean
    public TeamRepository teamRepository(ObjectMapper mapper, PlayerService playerService) {
        return new TeamRepositoryImpl(mapper, PATH, playerService);
    }

    @Bean
    public PlayerRepository playerRepository(ObjectMapper mapper) {
        return new PlayerRepositoryImpl(mapper, PATH);
    }

    @Bean
    public TeamService teamService(TeamRepository teamRepository) {
        return new TeamServiceImpl(teamRepository);
    }

    @Bean
    public PlayerService playerService(PlayerRepository playerRepository) {
        return new PlayerServiceImpl(playerRepository);
    }
}
