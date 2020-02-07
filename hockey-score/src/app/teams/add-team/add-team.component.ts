import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Router } from '@angular/router';
import { Team } from 'src/app/shared/model/team/team';
import { TeamListComponent } from '../team-list/team-list.component';
import { PlayerService } from 'src/app/players/player.service';
import { Player } from 'src/app/shared/model/player/player';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css'],
  providers: [TeamService, TeamListComponent]
})
export class AddTeamComponent implements OnInit {

  team: Team;

  public playerNames: String[] = [];

  public selectedPlayerNames: String[];

  constructor(private readonly teamService: TeamService, private readonly playerService: PlayerService,
    private readonly router: Router, private readonly teamsComponent: TeamListComponent) { }

  ngOnInit() {
    this.team = new Team(null, '', null, null, '', '');
    this.selectedPlayerNames = [];
    this.playerNames = this.playerService.getPlayers().map(p => p.name);
    this.playerNames.forEach(pl => {
      console.log("from AddTeamComponent. Players: " + pl);
    });
  }

  redirectToTeams() {
    this.router.navigateByUrl("/teams");
  }

  tryCreatTeam() {
    this.selectedPlayerNames.forEach(name => {
      console.log("From tryCreatTeam method: " + name);
    });
    console.log('try to create team ' + this.team.name);
    this.team.players = this.resolveSelectedPlayers()
    this.teamService.createTeam(this.team);
    this.router.navigateByUrl("/teams");
  }

  resolveSelectedPlayers(): Player[] {
    let teamPlayers: Player[] = [];
    this.selectedPlayerNames.forEach(selectedName => {
      console.log("from resolveSelectedPlayers method: " + selectedName);
      teamPlayers.push(this.playerService.getPlayers().find(pl => pl.name === selectedName));
    });
    return teamPlayers;
  }
}
