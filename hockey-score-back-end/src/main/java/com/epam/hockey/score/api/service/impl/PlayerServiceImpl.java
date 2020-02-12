package com.epam.hockey.score.api.service.impl;

import com.epam.hockey.score.api.model.player.Player;
import com.epam.hockey.score.api.model.player.PlayerFilter;
import com.epam.hockey.score.api.model.player.PlayerMutableData;
import com.epam.hockey.score.api.repository.PlayerRepository;
import com.epam.hockey.score.api.service.PlayerService;

import java.util.Collection;

public class PlayerServiceImpl implements PlayerService {

    private final PlayerRepository repository;

    public PlayerServiceImpl(PlayerRepository repository) {
        this.repository = repository;
    }

    @Override
    public Integer create(PlayerMutableData data) {
        return repository.insert(data);
    }

    @Override
    public void update(Integer id, PlayerMutableData data) {
        repository.update(id, data);
    }

    @Override
    public void delete(Integer id) {
        repository.remove(id);
    }

    @Override
    public Player get(Integer id) {
        return repository.select(id);
    }

    @Override
    public Collection<Player> get(PlayerFilter filter) {
        return filter != null ? repository.selectByFilter(filter) : repository.select();
    }
}
