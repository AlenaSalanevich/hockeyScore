import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamComponent } from './team/team.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [TeamListComponent, TeamComponent],
  imports: [
    CommonModule, SharedModule
  ]
})
export class TeamsModule { }
