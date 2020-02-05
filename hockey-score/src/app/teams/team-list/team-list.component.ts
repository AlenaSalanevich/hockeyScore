import { Component, OnInit, Output } from '@angular/core';
import { Team } from 'src/app/shared/model/team/team';
import { TeamService } from '../team.service';
import { AuthService } from 'src/app/shared/auth.service';


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  public teams: Team[];

  private isLogin: boolean;

  constructor(readonly teamService: TeamService, private readonly authService: AuthService) {
    this.authService.isLogin.subscribe(result => this.isLogin = result);
    this.teamService.actualTeams.subscribe(result => this.teams = result);
  }

  ngOnInit() {
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
