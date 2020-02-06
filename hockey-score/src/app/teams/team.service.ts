import { Injectable } from '@angular/core';
import { Team } from '../shared/model/team/team';
import { PlayerService } from '../players/player.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

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

  constructor(playerService: PlayerService) {
    this.playerService = playerService;
    this._actualTeams = new BehaviorSubject(this.teams);
  }

  getTeams(): Team[] {
    this.teams.forEach(t => t.players = this.playerService.getPlayers());
    this._actualTeams.next(this.teams);
    return this.teams;
  }

  getTeam(id: number): Team {
    return this.teams.find(t => t.id === id);
  }

  createTeam(team: Team) {
    console.log("add team" + team.name)
    if (this.teams.find(t => t.id === team.id) != null) {
      this.updateTeam(team);
    }
    else {
      this.teams.push(team);
      this.teams.forEach(t => console.log(t.name));
    }
    this._actualTeams.next(this.teams);
  }

  updateTeam(team: Team) {
    let updated = this.teams.find(t => t.id === team.id);
    const index: number = this.teams.indexOf(this.teams.find(t => t.id === team.id));
    this.teams.splice(index, 1);
    updated.name = team.name;
    updated.score = team.score;
    updated.description = team.description;
    updated.city = team.city;
    this.teams.push(updated);
  }

  deleteTeam(id: number) {
    const index: number = this.teams.indexOf(this.teams.find(t => t.id === id));
    this.teams.splice(index, 1);
  }

  public get actualTeams() {
    return this._actualTeams;
  }
}
