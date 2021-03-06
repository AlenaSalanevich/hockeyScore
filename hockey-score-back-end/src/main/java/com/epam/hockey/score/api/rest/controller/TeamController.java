package com.epam.hockey.score.api.rest.controller;

import com.epam.hockey.score.api.model.team.PageableTeam;
import com.epam.hockey.score.api.model.team.Team;
import com.epam.hockey.score.api.model.team.TeamMutableData;
import com.epam.hockey.score.api.rest.Validator;
import com.epam.hockey.score.api.service.TeamService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ResponseHeader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.Optional;

@Api(tags = "Team controller")
@Controller
@CrossOrigin(origins = "*", maxAge = 3600, methods = {RequestMethod.DELETE, RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT})
@RequestMapping(path = "api/teams")
public class TeamController {

    public static final int DEFAULT_LIMIT = 100;
    public static final int DEFAULT_OFFSET = 0;
    @Autowired
    private TeamService teamService;
    @Autowired
    private Validator validator;

    @PostMapping()
    @ApiOperation("Create new team")
    @ResponseBody
    public Integer create(@RequestBody TeamMutableData data, @RequestHeader(value = "Authorization") String token) {
        validator.validate(token);
        return teamService.create(data);
    }

    @PutMapping(value = "/{id}")
    @ApiOperation("Update team by id")
    @ResponseBody
    public ResponseEntity update(@PathVariable final Integer id, @RequestBody TeamMutableData data) {
        teamService.update(id, data);
        return ResponseEntity.ok().body(null);
    }

    @DeleteMapping("/{id}")
    @ApiOperation("Delete team by id")
    @ResponseBody
    public ResponseEntity delete(@PathVariable final Integer id) {
        teamService.delete(id);
        return ResponseEntity.ok().body(null);
    }

    @GetMapping("/{id}")
    @ApiOperation("Load team by id")
    @ResponseBody
    public Team load(@PathVariable final Integer id) {
        return teamService.get(id);
    }

    @GetMapping()
    @ApiOperation("Load all teams")
    @ResponseBody
    @ResponseHeader(name = "Access-Control-Allow-Origin", description = "*")
    public PageableTeam get(@RequestParam(value = "limit", required = false) Integer limit, @RequestParam(value = "offset", required = false) Integer offset, HttpServletResponse response) {
        return teamService.get(Optional.ofNullable(limit).orElse(DEFAULT_LIMIT), Optional.ofNullable(offset).orElse(DEFAULT_OFFSET));
    }
}
