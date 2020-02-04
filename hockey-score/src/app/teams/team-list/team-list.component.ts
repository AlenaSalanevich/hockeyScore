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



  onDeleteClicked(team) {
    console.log("delete " + team.name);
    this.teams = this.teams.filter(t => t.name !== team.name)
  }


  onEditClicked(team) {
    console.log("edit " + team);
    let editedTeam: Team = this.teams.find(t => t.name == team.name);
    editedTeam.name = team.name + 'Update';
    this.teams.push(editedTeam);
  }

  addTeam() {
    const size: number = this.teams.push({
      id: 1111,
      name: "addedTeam",
      players: [],
      score:1000,
      city: "Hrodna",
      description: "New team"
    });
    console.log(size);
  }
}
