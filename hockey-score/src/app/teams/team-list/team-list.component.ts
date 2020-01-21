import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/shared/model/team/team';
import { TeamService } from '../team.service';
import { Position } from 'src/app/shared/model/position.enum';
import { Shoots } from 'src/app/shared/model/shoots.enum';
import { Country } from 'src/app/shared/model/country.enum';

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
}
