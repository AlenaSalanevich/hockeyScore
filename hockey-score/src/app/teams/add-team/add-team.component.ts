import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Router } from '@angular/router';
import { Team } from 'src/app/shared/model/team/team';
import { TeamListComponent } from '../team-list/team-list.component';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css'],
  providers:[TeamService, TeamListComponent]
})
export class AddTeamComponent implements OnInit {

  team: Team;

  constructor(private readonly teamService: TeamService,
    private readonly router: Router, private readonly teamsComponent:TeamListComponent) { }

  ngOnInit() {
    this.team = new Team(null, '', null, null, '', '');
  }

  redirectToTeams() {
    this.router.navigateByUrl("/teams");
  }

  tryCreatTeam() {
    this.teamService.createTeam(this.team);
    console.log('try to create team ' + this.team.name);
    this.router.navigateByUrl("/teams");
  }
}
