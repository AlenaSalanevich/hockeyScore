import { Component, OnInit, Input } from '@angular/core';
import { TeamService } from '../team.service';
import { Team } from 'src/app/shared/model/team/team';
import { Player } from 'src/app/shared/model/player/player';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input() public team: Team
  @Input() public players: Player[];

  constructor() { }

  ngOnInit() {
  }

}
