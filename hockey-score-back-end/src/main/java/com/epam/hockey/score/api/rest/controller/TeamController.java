package com.epam.hockey.score.api.rest.controller;

import com.epam.hockey.score.api.model.team.Team;
import com.epam.hockey.score.api.model.team.TeamMutableData;
import com.epam.hockey.score.api.service.TeamService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ResponseHeader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.Collection;

@Api(tags = "Team controller")
@Controller
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(path = "api/teams")
public class TeamController {

    @Autowired
    TeamService teamService;

    @PostMapping()
    @ApiOperation("Create new team")
    @ResponseBody
    public Integer create(@RequestBody TeamMutableData data, HttpServletResponse response) {
        return teamService.create(data);
    }

    @PutMapping(value = "/{id}")
    @ApiOperation("Update team by id")
    @ResponseBody
    public ResponseEntity update(@PathVariable final Integer id, @RequestBody TeamMutableData data, HttpServletResponse response) {
        teamService.update(id, data);
        return ResponseEntity.ok("Team is updated!");
    }

    @DeleteMapping("/{id}")
    @ApiOperation("Delete team by id")
    @ResponseBody
    public ResponseEntity delete(@PathVariable final Integer id, HttpServletResponse response) {
        teamService.delete(id);
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT");
        response.setHeader("Access-Control-Allow-Origin", "*");
        return ResponseEntity.ok("Team is deleted!");
    }

    @GetMapping("/{id}")
    @ApiOperation("Load team by id")
    @ResponseBody
    public Team load(@PathVariable final Integer id, HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT");
        response.setHeader("Access-Control-Allow-Origin", "*");
        return teamService.get(id);
    }

    @GetMapping()
    @ApiOperation("Load all teams")
    @ResponseBody
    @ResponseHeader(name = "Access-Control-Allow-Origin", description = "*")
    public Collection<Team> get(HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT");
        response.setHeader("Access-Control-Allow-Origin", "*");
        return teamService.get();
    }
}
