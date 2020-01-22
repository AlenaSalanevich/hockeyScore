import { Route } from '@angular/router';
import { TeamListComponent } from './teams/team-list/team-list.component';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './shared/login/login.component';


export const ROUTES: Route[] = [

    { path: 'teams', component: TeamListComponent },
    { path: 'players', component: PlayerListComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'logout', redirectTo: 'home', pathMatch: 'full' }
]