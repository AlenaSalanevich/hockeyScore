import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/shared/model/game/game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  public games: Game[];
  constructor() { }

  ngOnInit() {
  }

}
