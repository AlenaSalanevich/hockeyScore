import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/shared/model/game/game';
import { TeamService } from 'src/app/teams/team.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  public games: Game[];

  constructor(private readonly teamService: TeamService) { }

  ngOnInit() {

    this.games = [{
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
      date: new Date(Date.now()-100000000),
      result: {
        homeTeamScore: 2,
        hostTeamScore: 1
      }
    },
    {
      id: 33,
      homeTeam: this.teamService.getTeam(2),
      hostTeam: this.teamService.getTeam(1),
      date: new Date(Date.now()-600000000),
      result: {
        homeTeamScore: 3,
        hostTeamScore: 3
      }
    },
    {
      id: 44,
      homeTeam: this.teamService.getTeam(2),
      hostTeam: this.teamService.getTeam(1),
      date: new Date(Date.now()-1000000000),
      result: {
        homeTeamScore: 5,
        hostTeamScore: 3
      }
    },
    {
      id: 55,
      homeTeam: this.teamService.getTeam(1),
      hostTeam: this.teamService.getTeam(2),
      date: new Date(Date.now()+600000000),
      result: {
        homeTeamScore: 0,
        hostTeamScore: 0
      }
    }]
  }
  gameDate(game: Game): number {
    return game.date.getTime();
  }
}
