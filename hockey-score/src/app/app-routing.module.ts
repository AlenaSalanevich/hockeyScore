import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamListComponent } from './teams/team-list/team-list.component';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { AddTeamComponent } from './teams/add-team/add-team.component';
import { SettingsComponent } from './shared/settings/settings.component';
import { GameListComponent } from './games/game-list/game-list.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { AuthGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'teams',
    children: [
      {
        path: '',
        component: TeamListComponent
      },
      {
        path: 'add',
        component: AddTeamComponent, canActivate: [AuthGuard]
      },
    ]
  },
  { path: 'games', component: GameListComponent },
  { path: 'players', component: PlayerListComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'logout', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
