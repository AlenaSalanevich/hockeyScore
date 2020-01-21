import { Injectable } from '@angular/core';
import { Player } from '../shared/model/player/player';
import { Team } from '../shared/model/team/team';
import { PlayerService } from '../players/player.service';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  public playerService: PlayerService;

  constructor(playerService: PlayerService) {
    this.playerService = playerService;
  }

  getTeams(): Team[] {
    return [
      {
        id: 1,
        name: "1stTeam",
        players: this.playerService.getPlayers(),
        score: 12,
        city: "Hrodna",
        description: "The oldest team"
      },
      {
        id: 2,
        name: "2ndTeam",
        players: this.playerService.getPlayers(),
        score: 1,
        city: "Hrodna",
        description: "Yang team"
      }
    ]
  }
}
