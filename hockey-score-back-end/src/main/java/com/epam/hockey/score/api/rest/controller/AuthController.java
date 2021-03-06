package com.epam.hockey.score.api.rest.controller;

import com.epam.hockey.score.api.model.user.User;
import com.epam.hockey.score.api.model.user.UserCredentials;
import com.epam.hockey.score.api.service.AuthService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@Api(tags = "Authentication controller")
@Controller
@CrossOrigin(origins = "*", maxAge = 3600,
        methods = {RequestMethod.POST, RequestMethod.GET, RequestMethod.OPTIONS})
@RequestMapping(path = "api")
public class AuthController {

    @Autowired
    AuthService service;

    @PostMapping("/login")
    @ApiOperation("Login")
    @ResponseBody
    public User authenticate(@RequestBody UserCredentials data, HttpServletResponse response) {
        return service.authenticate(data);
    }

    @GetMapping("/logout")
    @ApiOperation("Log out")
    @ResponseBody
    public ResponseEntity logout() {
        service.logout();
        return ResponseEntity.ok("User is logout");
    }
}
