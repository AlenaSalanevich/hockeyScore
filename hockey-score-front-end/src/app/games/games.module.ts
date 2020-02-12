import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game/game.component';
import { GameListComponent } from './game-list/game-list.component';
import { SharedModule } from '../shared/shared.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [GameComponent, GameListComponent],
  imports: [
    CommonModule, SharedModule, MatDatepickerModule, MatNativeDateModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GamesModule { }
