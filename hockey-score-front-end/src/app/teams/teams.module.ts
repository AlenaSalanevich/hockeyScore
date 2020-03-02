import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamComponent } from './team/team.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { PlayersModule } from '../players/players.module';
import { AddTeamComponent } from './add-team/add-team.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OderByPipe } from '../shared/pipes/oder-by.pipe';



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
    FormsModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [OderByPipe],
  entryComponents: []
})
export class TeamsModule { }
