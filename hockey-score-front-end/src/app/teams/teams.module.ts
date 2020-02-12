import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamComponent } from './team/team.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatExpansionModule, MatFormFieldModule, MatTableModule, MatInputModule } from '@angular/material';
import { PlayersModule } from '../players/players.module';
import { AddTeamComponent } from './add-team/add-team.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TeamListComponent, TeamComponent, AddTeamComponent],
  exports: [TeamListComponent, TeamComponent, AddTeamComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    PlayersModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    RouterModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TeamsModule { }
