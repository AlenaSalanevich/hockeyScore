import { Component, OnInit, Input } from '@angular/core';
import { TeamService } from '../team.service';
import { Team } from 'src/app/shared/model/team/team';
import { Player } from 'src/app/shared/model/player/player';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  @Input() public team: Team
  players: Player[];
  constructor() { }
  columnsToDisplay = ['number', 'name', 'position', 'country', 'age', 'shoots', 'height', 'weight'];
  ngOnInit() {
    this.players = this.team.players;
  }

  onDeleteSelect(team) {
    console.log("delete " + team.name);
  }

  onEditSelect(team) {
    console.log("edit " + team.name);
  }

}
