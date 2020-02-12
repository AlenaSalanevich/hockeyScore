import { Component, OnInit, OnDestroy } from '@angular/core';
import { Team } from 'src/app/shared/model/team/team';
import { TeamService } from '../team.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit, OnDestroy {

  public teams$: BehaviorSubject<Team[]>;
  public teams: Team[];
  public isLogin$: BehaviorSubject<boolean>;
  private isLogin: boolean;
  public authSubscription: Subscription = new Subscription();
  public teamsSubscription: Subscription = new Subscription();

  constructor(readonly teamService: TeamService, private readonly authService: AuthService) {
  }

  ngOnInit() {
    this.teams$ = this.teamService.actualTeams;
    this.teamsSubscription = this.teams$.subscribe(teams => {
    this.teams = teams; teams.forEach(t => {
      console.log("from on init teamName: " + t.name  + ", "+ "teamId: "+ t.id + ", "+ Date.now());
    });
    });;
    this.teamService.getTeams();
    this.isLogin$ = this.authService.isLogin;
    this.authSubscription = this.isLogin$.subscribe(result => this.isLogin = result);
  }

  ngOnDestroy(): void {
    this.teamsSubscription.unsubscribe();
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
}
