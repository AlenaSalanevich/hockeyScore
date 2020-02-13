import { Component, OnInit, OnDestroy } from '@angular/core';
import { Team } from 'src/app/shared/model/team/team';
import { TeamService } from '../team.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit, OnDestroy {

  public teams$: Observable<Team[]>;
  public team: Team[] = [];
  public isLogin$: BehaviorSubject<boolean>;
  private isLogin: boolean;
  public authSubscription: Subscription = new Subscription();

  constructor(readonly teamService: TeamService, private readonly authService: AuthService) {
  }

  ngOnInit() {
    this.teams$ = this.teamService.getTeams();
    this.isLogin$ = this.authService.isLogin;
    this.authSubscription = this.isLogin$.subscribe(result => this.isLogin = result);
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  onDeleteClicked(team) {
    console.log("delete: " + team.id);
    this.teamService.deleteTeam(team.id);
  }


  onEditClicked(team) {
    console.log("edit " + team);
    this.teamService.updateTeam(team);
  }

  public isLogged(): boolean {
    return this.isLogin;
  }

  public teamScore(team: Team): number {
    return team.score;
  }
  isTeamsEmpty(): boolean {
    return true;

  }

}
