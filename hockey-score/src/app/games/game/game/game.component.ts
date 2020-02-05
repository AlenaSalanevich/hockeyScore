import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/shared/model/game/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() public game: Game;

  constructor() { }

  ngOnInit() {
  }

  getDate(game: Game): number{
     
    return game.date.getTime();
  }

}
