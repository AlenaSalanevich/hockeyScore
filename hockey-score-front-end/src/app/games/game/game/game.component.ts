import { Component,  Input } from '@angular/core';
import { Game } from 'src/app/shared/model/game/game';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  @Input() public game: Game;

  constructor() { }

  getDate(game): any {
    return new FormControl(game.date);
  }

}
