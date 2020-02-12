package com.epam.hockey.score.api.repository;

import com.epam.hockey.score.api.model.player.Player;
import com.epam.hockey.score.api.model.player.PlayerFilter;
import com.epam.hockey.score.api.model.player.PlayerMutableData;

import java.util.Collection;

/**
 * @author Alena Salanevich.
 */
public interface PlayerRepository {

    Integer insert(PlayerMutableData data);

    void update(Integer id, PlayerMutableData data);

    void remove(Integer id);

    Player select(Integer id);

    Collection<Player> select();

    Collection<Player> selectByFilter(PlayerFilter filter);

}
