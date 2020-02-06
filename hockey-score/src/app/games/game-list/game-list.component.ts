import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/shared/model/game/game';
import { TeamService } from 'src/app/teams/team.service';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  public games: Game[];

  constructor(private readonly gameService: GameService) { }

  ngOnInit() {
    this.games = this.gameService.getGames();
  }
  gameDate(game: Game): number {
    return game.date.getTime();
  }
}
