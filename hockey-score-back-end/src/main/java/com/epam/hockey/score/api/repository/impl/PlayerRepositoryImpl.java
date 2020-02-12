package com.epam.hockey.score.api.repository.impl;

import com.epam.hockey.score.api.model.player.Player;
import com.epam.hockey.score.api.model.player.PlayerFilter;
import com.epam.hockey.score.api.model.player.PlayerMutableData;
import com.epam.hockey.score.api.repository.PlayerRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.io.ClassPathResource;

import java.io.IOException;
import java.util.Collection;
import java.util.stream.Collectors;

public class PlayerRepositoryImpl implements PlayerRepository {

    private ObjectMapper mapper;
    private final String path;

    public PlayerRepositoryImpl(ObjectMapper mapper, String path) {
        this.mapper = mapper;
        this.path = path;
    }

    @Override
    public Integer insert(PlayerMutableData data) {
        return null;
    }

    @Override
    public void update(Integer id, PlayerMutableData data) {

    }

    @Override
    public void remove(Integer id) {

    }

    @Override
    public Player select(Integer id) {
        return select().stream().filter(t -> id.equals(t.getId())).findFirst().orElseThrow(() -> new RuntimeException("Player does not exist"));
    }

    @Override
    public Collection<Player> select() {
        Collection<Player> players;
        try {
            players = mapper.readValue(new ClassPathResource("players.json").getInputStream(), new TypeReference<Collection<Player>>() {
            });
        } catch (IOException e) {
            throw new RuntimeException("Unable to retrieve players from repository " + e.getMessage());
        }
        return players;
    }

    @Override
    public Collection<Player> selectByFilter(PlayerFilter filter) {
        return filter.getCurrentTeamId() != null ? select().stream()
                .filter(t -> filter.getCurrentTeamId().equals(t.getCurrentTeamId())).collect(Collectors.toList()) : select();
    }
}
