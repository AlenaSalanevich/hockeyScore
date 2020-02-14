import { Component, OnInit, OnDestroy } from '@angular/core';
import { Team } from 'src/app/shared/model/team/team';
import { TeamService } from '../team.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { HttpErrorResponse } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit, OnDestroy {

  public teams: Team[] = [];
  private isLogin: Boolean;
  public isLoginSubscription: Subscription;
  private teamSubscription: Subscription;

  constructor(readonly teamService: TeamService,
    private readonly authService: AuthService,
    private readonly jsonPipe: JsonPipe) {
  }

  ngOnInit() {
    this.init();
    this.isLoginSubscription = this.authService.isLogin.subscribe(result => this.isLogin = result);
  }

  private init() {
    this.teamSubscription = this.teamService.getTeams().subscribe((result: Team[]) => {
      this.teams = result;
    }, (error: HttpErrorResponse) => console.log(error));
  }

  ngOnDestroy(): void {
    this.isLoginSubscription.unsubscribe();
    this.teamSubscription.unsubscribe();
  }

  onDeleteClicked(team) {
    console.log("delete: " + team.id);
    this.teamService.deleteTeam(team.id).subscribe(() => {
      this.init();
    }, (error: HttpErrorResponse) => console.log(console.error()));
  }


  onEditClicked(team) {
    console.log("edit " + team);
    this.teamService.updateTeam(team).subscribe(() => {
      this.init();
    }, (error: HttpErrorResponse) => console.log(console.error()));;
  }

  public isLogged(): Boolean {
    return this.isLogin;
  }

  public teamScore(team: Team): number {
    return team.score;
  }
  isTeamsEmpty(): boolean {
    return this.teams.length === 0;
  }
  onSearchClicked(likeChars: string) {
    this.teamService.getTeams().subscribe((res: Team[]) => {
      const filteredTeams: Team[] = [...res.filter(t => t.name.toLowerCase().includes(likeChars.toLowerCase()))];
      console.log("filteredTeams: " + " " + this.jsonPipe.transform(filteredTeams));
      this.teams = filteredTeams;
    }, (error: HttpErrorResponse) => {
      this.init();
      console.log(console.error())
    });
  }
}
