import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerComponent } from './player/player.component';



@NgModule({
  declarations: [PlayerListComponent, PlayerComponent],
  exports: [PlayerListComponent, PlayerComponent],
  imports: [
    CommonModule, SharedModule
  ]
})
export class PlayersModule { }
