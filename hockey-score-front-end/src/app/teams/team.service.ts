import { Injectable } from '@angular/core';
import { Team } from '../shared/model/team/team';
import { PlayerService } from '../players/player.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { JsonPipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  public playerService: PlayerService;


  private readonly _actualTeams: BehaviorSubject<Team[]>;

  private teams: Team[] = [{
    id: 1,
    name: "HC Kronon",
    players: [],
    score: 12,
    city: "Hrodna",
    description: "Yang team "
  },
  {
    id: 2,
    name: "HC Avangard",
    players: [],
    score: 9,
    city: "Hrodna",
    description: "The oldest team"
  },
  {
    id: 3,
    name: "HC Neman",
    players: [],
    score: 7,
    city: "Homel",
    description: "The oldest team"
  },
  {
    id: 4,
    name: "HC Metalurg",
    players: [],
    score: 3,
    city: "Minsk",
    description: "The oldest team"
  },
  {
    id: 5,
    name: "HC Dinamo",
    players: [],
    score: 1,
    city: "Brest",
    description: "The oldest team"
  },
  {
    id: 6,
    name: "HC Lida",
    players: [],
    score: 15,
    city: "Lida",
    description: "The oldest team"
  }
  ];

  constructor(playerService: PlayerService, private readonly jsPipe: JsonPipe) {
    this.playerService = playerService;
    this._actualTeams = new BehaviorSubject(this.teams);
  }

  getTeams(): Team[] {
    let clone: Team[] = [...this.teams];
    clone.forEach(t => t.players = this.playerService.getPlayers());
    this._actualTeams.next(clone);

    /* const fs = require('fs');
    // write to a new file named 2pac.txt
    fs.writeFile('teams.txt', clone, (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;
      // success case, the file was saved
      console.log('teams saved!');
    }); */

    return clone;
  }

  getTeam(id: number): Team {
    return this.teams.find(t => t.id === id);
  }

  createTeam(team: Team) {
    let clone: Team[] = [...this.teams];
    clone.forEach(t => t.players = this.playerService.getPlayers());
    console.log("add team: " + this.jsPipe.transform(team))
    if (clone.find(t => t.id === team.id) != null) {
      this.updateTeam(team);
    }
    else {
      clone.push(team);
      console.log("From teamservice create new team. Teams: " + this.jsPipe.transform(clone));
      this._actualTeams.next(clone);
    }
  }

  updateTeam(team: Team) {
    console.log("from teamservice update new team:" + this.jsPipe.transform(team))
    let clone: Team[] = [...this.teams];
    clone.forEach(t => t.players = this.playerService.getPlayers());
    let updated = clone.find(t => t.id === team.id);
    const index: number = clone.indexOf(updated);
    clone.splice(index, 1);
    updated.name = team.name;
    updated.score = team.score;
    updated.description = team.description;
    updated.city = team.city;
    clone.push(updated);
    this._actualTeams.next(clone);
    console.log("From teamservice update team. Teams: " + this.jsPipe.transform(clone));
  }

  deleteTeam(id: number) {
    let clone: Team[] = [...this.teams];
    clone.forEach(t => t.players = this.playerService.getPlayers());
    const index: number = clone.indexOf(clone.find(t => t.id === id));
    clone.splice(index, 1);
    this._actualTeams.next(clone);
  }

  public get actualTeams(): BehaviorSubject<Team[]> {
    return this._actualTeams;
  }
}
