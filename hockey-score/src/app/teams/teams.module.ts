import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamComponent } from './team/team.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule, MatCardModule, MatIconModule, MatListModule } from '@angular/material';



@NgModule({
  declarations: [TeamListComponent, TeamComponent],
  exports: [TeamListComponent, TeamComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule
  ]
})
export class TeamsModule { }
