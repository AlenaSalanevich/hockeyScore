import { Injectable } from '@angular/core';
import { TeamService } from '../teams/team.service';
import { Game } from '../shared/model/game/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private readonly teamService: TeamService, ) { }

  getGames(): Game[] {
    return [{
      id: 11,
      homeTeam: this.teamService.getTeam(1),
      hostTeam: this.teamService.getTeam(2),
      date: new Date(Date.now() - 1000),
      result: {
        homeTeamScore: 0,
        hostTeamScore: 0
      }
    },
    {
      id: 11,
      homeTeam: this.teamService.getTeam(1),
      hostTeam: this.teamService.getTeam(2),
      date: new Date(Date.now()),
      result: {
        homeTeamScore: 0,
        hostTeamScore: 0
      }
    },
    {
      id: 22,
      homeTeam: this.teamService.getTeam(2),
      hostTeam: this.teamService.getTeam(1),
      date: new Date(Date.now() - 100000000000),
      result: {
        homeTeamScore: 2,
        hostTeamScore: 1
      }
    },
    {
      id: 33,
      homeTeam: this.teamService.getTeam(2),
      hostTeam: this.teamService.getTeam(1),
      date: new Date(Date.now() - 600000000),
      result: {
        homeTeamScore: 3,
        hostTeamScore: 3
      }
    },
    {
      id: 44,
      homeTeam: this.teamService.getTeam(2),
      hostTeam: this.teamService.getTeam(1),
      date: new Date(Date.now() + 1000000000),
      result: {
        homeTeamScore: 5,
        hostTeamScore: 3
      }
    },
    {
      id: 55,
      homeTeam: this.teamService.getTeam(1),
      hostTeam: this.teamService.getTeam(2),
      date: new Date(Date.now() + 600000000),
      result: {
        homeTeamScore: 0,
        hostTeamScore: 0
      }
    }]
  }
}