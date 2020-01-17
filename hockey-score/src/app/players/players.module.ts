import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerComponent } from './player/player.component';



@NgModule({
  declarations: [PlayerListComponent, PlayerComponent],
  imports: [
    CommonModule
  ]
})
export class PlayersModule { }
