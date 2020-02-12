package com.epam.hockey.score.api.repository.impl;

import com.epam.hockey.score.api.model.player.PlayerFilter;
import com.epam.hockey.score.api.model.team.Team;
import com.epam.hockey.score.api.model.team.TeamMutableData;
import com.epam.hockey.score.api.repository.TeamRepository;
import com.epam.hockey.score.api.service.PlayerService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.util.CollectionUtils;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;
import java.nio.channels.FileLock;
import java.nio.channels.OverlappingFileLockException;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.Collection;
import java.util.Comparator;

/**
 * @author Alena Salanevich.
 */
public class TeamRepositoryImpl implements TeamRepository {

    private ObjectMapper mapper;
    private final String path;
    private final PlayerService playerService;

    public TeamRepositoryImpl(ObjectMapper mapper, String path, PlayerService playerService) {
        this.mapper = mapper;
        this.path = path;
        this.playerService = playerService;
    }

    public Integer insert(TeamMutableData data) {
        Collection<Team> teams = select();
        Team team = teams.stream().max(Comparator.comparingInt(Team::getId)).map(t ->
                createTeam(data, t.getId() + 1)).orElseGet(() -> createTeam(data, 1));
        teams.add(team);
        String stringTeams = getStringTeams(teams);
        writeFile(stringTeams);
        return team.getId();
    }

    private Team createTeam(TeamMutableData data, Integer id) {
        Team team = new Team();
        BeanUtils.copyProperties(data, team);
        team.setId(id);
        return team;
    }

    public void update(Integer id, TeamMutableData data) {
        Team storedTeam = select(id);
        BeanUtils.copyProperties(data, storedTeam);
        Collection<Team> teams = select();
        teams.removeIf(t -> id.equals(t.getId()));
        teams.add(storedTeam);
        String stringTeams = getStringTeams(teams);
        writeFile(stringTeams);
    }

    public void remove(Integer id) {
        Collection<Team> teams = select();
        teams.removeIf(t -> id.equals(t.getId()));
        String stringTeams = getStringTeams(teams);
        writeFile(stringTeams);
    }

    private String getStringTeams(Collection<Team> teams) {
        String stringTeams = "";
        if (!CollectionUtils.isEmpty(teams)) {
            try {
                stringTeams = mapper.writeValueAsString(teams);
            } catch (JsonProcessingException e) {
                throw new RuntimeException("Exception occurred while trying convert teams" + e.getMessage());
            }
        }
        return stringTeams;
    }

    private void writeFile(String teams) {
        ByteBuffer buffer;
        String filePath = path + "\\teams.json";
        cleanUpFile(filePath);
        try (RandomAccessFile randomAccessFile = new RandomAccessFile(Paths.get(filePath).toFile(), "rw"); FileChannel fc = randomAccessFile.getChannel(); FileLock fileLock = fc.tryLock()) {
            if (null != fileLock) {
                write(teams, fc);
            }
        } catch (OverlappingFileLockException | IOException ex) {
            throw new RuntimeException("Exception occurred while trying to get a lock on File... " + ex.getMessage());
        }
    }

    private void cleanUpFile(String filePath) {
        try {
            FileChannel.open(Paths.get(filePath), StandardOpenOption.WRITE).truncate(0).close();
        } catch (IOException e) {
            throw new RuntimeException("Exception occurred while retrieving teams" + e.getMessage());
        }
    }

    private void write(String teams, FileChannel fc) throws IOException {
        ByteBuffer buffer;
        buffer = ByteBuffer.wrap(teams.getBytes());
        buffer.put(teams.getBytes());
        buffer.flip();
        while (buffer.hasRemaining())
            fc.write(buffer);
    }

    public Team select(Integer id) {
        return select().stream().filter(t -> id.equals(t.getId())).findFirst().orElseThrow(() -> new RuntimeException("Team does not exist"));
    }

    public Collection<Team> select() {
        Collection<Team> teams;
        String filePath = path + "\\teams.json";
        try (RandomAccessFile randomAccessFile = new RandomAccessFile(Paths.get(filePath).toFile(), "rw"); FileChannel fc = randomAccessFile.getChannel(); FileLock fileLock = fc.tryLock(); ByteArrayOutputStream out = new ByteArrayOutputStream()) {

            int bufferSize = 1024;
            if (bufferSize > fc.size()) {
                bufferSize = (int) fc.size();
            }
            ByteBuffer buff = ByteBuffer.allocate(bufferSize);

            while (fc.read(buff) > 0) {
                out.write(buff.array(), 0, buff.position());
                buff.clear();
            }
            teams = mapper.readValue(out.toByteArray(), new TypeReference<Collection<Team>>() {
            });
        } catch (OverlappingFileLockException | IOException ex) {
            throw new RuntimeException("Unable to retrieve teams from repository " + ex.getMessage());
        }
        teams.forEach(t -> {
            PlayerFilter filter = new PlayerFilter();
            filter.setCurrentTeamId(t.getId());
            t.setPlayers(playerService.get(filter));
        });

        return teams;
    }
}
