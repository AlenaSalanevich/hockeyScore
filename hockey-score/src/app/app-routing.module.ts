import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamListComponent } from './teams/team-list/team-list.component';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { AddTeamComponent } from './teams/add-team/add-team.component';
import { SettingsComponent } from './shared/settings/settings.component';

export const routes: Routes = [
  { path: 'teams', component: TeamListComponent },
  { path: 'players', component: PlayerListComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', redirectTo: 'home', pathMatch: 'full' },
  { path: 'addteam', component: AddTeamComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
