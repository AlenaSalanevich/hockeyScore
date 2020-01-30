import { Component, OnInit, Output } from '@angular/core';
import { Team } from 'src/app/shared/model/team/team';
import { TeamService } from '../team.service';


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  public teams: Team[] = [];

  constructor(readonly teamService: TeamService) { }

  ngOnInit() {
    this.teams =
      this.teamService.getTeams();
  }



  onDeleteClicked(teamName) {
    console.log("delete " + teamName);
    this.teams = this.teams.filter(team => team.name !== teamName)
  }
}
