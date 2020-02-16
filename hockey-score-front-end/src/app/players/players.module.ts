import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerComponent } from './player/player.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule, MatButtonModule, MatDividerModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AddPlayerComponent } from './add-player/add-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [PlayerListComponent, PlayerComponent, AddPlayerComponent],
  exports: [PlayerListComponent, PlayerComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    RouterModule,
     FormsModule, 
     ReactiveFormsModule,
      HttpClientModule
  ]
})
export class PlayersModule { }
