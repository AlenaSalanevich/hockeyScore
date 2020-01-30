import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/shared/model/player/player';
import { PlayerService } from '../player.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class PlayerListComponent implements OnInit {

  columnsToDisplay = ['number', 'name', 'position', 'country', 'age', 'shoots', 'height', 'weight'];
  expandedPlayer: Player | null;
  players: Player[] = [];
  constructor(readonly playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }
}
