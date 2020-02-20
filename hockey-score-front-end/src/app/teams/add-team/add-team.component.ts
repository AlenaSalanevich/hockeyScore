import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Router } from '@angular/router';
import { Team } from 'src/app/shared/model/team/team';
import { PlayerService } from 'src/app/players/player.service';
import { Player } from 'src/app/shared/model/player/player';
import { JsonPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {FormControl,  Validators} from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css'],
  providers: [TeamService]
})
export class AddTeamComponent implements OnInit {

  fplayerNames = new FormControl('', [
    Validators.required
  ]);

  team: Team;

  public playerNames: String[] = [];

  public selectedPlayerNames: String[];

  constructor(private readonly teamService: TeamService, private readonly playerService: PlayerService,
    private readonly router: Router, private readonly jsPipe: JsonPipe) { }

  ngOnInit() {
    this.team = new Team(null, '', null, null, '', '');
    this.selectedPlayerNames = [];
    this.playerNames = this.playerService.getPlayers().map(p => p.name);
    this.playerNames.forEach(pl => {
      console.log("from AddTeamComponent. Players: " + this.jsPipe.transform(pl));
    });
  }

  redirectToTeams() {
    this.router.navigateByUrl("/teams");
  }

  tryCreatTeam() {
    console.log("From tryCreatTeam method: " + this.jsPipe.transform(this.selectedPlayerNames));
    console.log('try to create team ' + this.team.name);
    this.team.players = this.resolveSelectedPlayers()
    this.teamService.createTeam(this.team).subscribe((res: Team) => {
      this.redirectToTeams();
    }, (error: HttpErrorResponse) => {
      console.log(console.log(error))
    });
  }

  resolveSelectedPlayers(): Player[] {
    let teamPlayers: Player[] = [];
    this.selectedPlayerNames.forEach(selectedName => teamPlayers.push(this.playerService.getPlayers().find(pl => pl.name === selectedName)));
    console.log("from resolveSelectedPlayers method: " + this.jsPipe.transform(teamPlayers));
    return teamPlayers;
  }
}
