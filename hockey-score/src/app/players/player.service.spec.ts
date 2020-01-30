import { TestBed } from '@angular/core/testing';

import { PlayerService } from './player.service';
import { Player } from '../shared/model/player/player';
import { Position } from '../shared/model/position.enum';
import { Shoots } from '../shared/model/shoots.enum';
import { Country } from '../shared/model/country.enum';

describe('PlayerService', () => {
  let service: PlayerService;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    service = TestBed.get(PlayerService);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should use PlayerService', () => {
    expect(service.getPlayers().length).toEqual(4);
  });
});

describe('PlayerService', () => {
  let service: PlayerService;
  let expectedPlayer: Player;

  beforeEach(() => TestBed.configureTestingModule({ providers: [PlayerService] }));

  beforeEach(() => {
    service = TestBed.get(PlayerService);
  })

  beforeEach(() => expectedPlayer = {
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
  })


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should use PlayerService', () => {
    expect(service.getPlayers().find(player => player.id === expectedPlayer.id)).toEqual(expectedPlayer);
  });
  expect(service.getPlayers()).toContain(expectedPlayer);
});
