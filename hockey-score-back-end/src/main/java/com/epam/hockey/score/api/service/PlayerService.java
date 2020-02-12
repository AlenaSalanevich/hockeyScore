package com.epam.hockey.score.api.service;

import com.epam.hockey.score.api.model.player.Player;
import com.epam.hockey.score.api.model.player.PlayerFilter;
import com.epam.hockey.score.api.model.player.PlayerMutableData;

import java.util.Collection;

/**
 * @author Alena Salanevich.
 */
public interface PlayerService {

    Integer create(PlayerMutableData data);

    void update(Integer id, PlayerMutableData data);

    void delete(Integer id);

    Player get(Integer id);

    Collection<Player> get(PlayerFilter filter);

}
