import { TestBed } from '@angular/core/testing';

import { TeamService } from './team.service';
import { PlayerService } from '../players/player.service';
import { Player } from '../shared/model/player/player';
import { Position } from '../shared/model/position.enum';
import { Shoots } from '../shared/model/shoots.enum';
import { Country } from '../shared/model/country.enum';
import { Team } from '../shared/model/team/team';

describe('TeamService', () => {

  let teamService: TeamService;

  let playerServiceSpy: jasmine.SpyObj<PlayerService>;

  let stubPlayers: Player[];
  let excpectedteam: Team;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('PlayerService', ['getPlayers']);
    TestBed.configureTestingModule({
      providers: [
        TeamService,
        { provide: PlayerService, useValue: spy }
      ]
    });

    teamService = TestBed.get(TeamService);

    playerServiceSpy = TestBed.get(PlayerService);

    stubPlayers = [{
      id: 1,
      name: "1stPlayer",
      position: Position.defender,
      number: 78,
      born: new Date(),
      height: 180,
      weight: 90,
      age: 36,
      shoots: Shoots.left,
      country: Country.by,
      stats: []
    }];

    excpectedteam = {
      id: 1,
      name: "1stTeam",
      players: stubPlayers,
      score: 12,
      city: "Hrodna",
      description: "The oldest team"
    }
  });


  it('should be created', () => {
    const service: TeamService = TestBed.get(TeamService);
    expect(service).toBeTruthy();
  });

  it('#getPlayers should return stubbed value from a spy', () => {

    playerServiceSpy.getPlayers.and.returnValue(stubPlayers);

    const teams = teamService.getTeams();
    expect(teams.find(team => team.id === excpectedteam.id))
      .toEqual(excpectedteam);
    expect(teams.find(team => team.id === excpectedteam.id).players)
      .toBe(stubPlayers);
    expect(playerServiceSpy.getPlayers.calls.count())
      .toBe(teams.length, 'spy method called once for each team');

  });

});


