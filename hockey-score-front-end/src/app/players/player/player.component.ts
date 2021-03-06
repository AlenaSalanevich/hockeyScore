import { Component, Input } from '@angular/core';
import { Player } from 'src/app/shared/model/player/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  @Input() public player: Player;

  constructor() { }

}
