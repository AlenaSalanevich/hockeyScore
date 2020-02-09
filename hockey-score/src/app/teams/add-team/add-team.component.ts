import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TeamService } from '../team.service';
import { Router } from '@angular/router';
import { Team } from 'src/app/shared/model/team/team';
import { TeamListComponent } from '../team-list/team-list.component';
import { PlayerService } from 'src/app/players/player.service';
import { Player } from 'src/app/shared/model/player/player';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css'],
  providers: [TeamService, TeamListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTeamComponent implements OnInit {

  team: Team;

  public playerNames: String[] = [];

  public selectedPlayerNames: String[];

  constructor(private readonly teamService: TeamService, private readonly playerService: PlayerService,
    private readonly router: Router, private readonly teamsComponent: TeamListComponent, private readonly jsPipe: JsonPipe) { }

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
    this.teamService.createTeam(this.team);
    this.router.navigateByUrl("/teams");
  }

  resolveSelectedPlayers(): Player[] {
    let teamPlayers: Player[] = [];
    this.selectedPlayerNames.forEach(selectedName => teamPlayers.push(this.playerService.getPlayers().find(pl => pl.name === selectedName)));
    console.log("from resolveSelectedPlayers method: " + this.jsPipe.transform(teamPlayers));
    return teamPlayers;
  }
}
