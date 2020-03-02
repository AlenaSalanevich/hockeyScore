import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerListComponent } from './player-list.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerService } from '../player.service';
import { Player } from 'src/app/shared/model/player/player';
import { Position } from 'src/app/shared/model/position.enum';
import { Shoots } from 'src/app/shared/model/shoots.enum';
import { Country } from 'src/app/shared/model/country.enum';

describe('PlayerListComponent', () => {
  let component: PlayerListComponent;
  let fixture: ComponentFixture<PlayerListComponent>;
  let playerServiceSpy: jasmine.SpyObj<PlayerService>;
  let playerService: PlayerService;
  let stubPlayers: Player[];

  beforeEach(async(() => {
    playerServiceSpy = jasmine.createSpyObj('PlayerService', ['getPlayers']);

    TestBed.configureTestingModule({
      declarations: [PlayerListComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [CommonModule,
        SharedModule,
        MatTableModule,
        BrowserAnimationsModule
      ],
      providers: [{ provide: PlayerService, useValue: playerServiceSpy }]
    })
      .compileComponents();

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

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerListComponent);
    component = fixture.componentInstance;
    playerService = TestBed.get(PlayerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    const getPlayersSpy = playerServiceSpy.getPlayers.and.returnValue(stubPlayers);
    expect(component).toBeTruthy();
    component.ngOnInit();
    expect(getPlayersSpy).toHaveBeenCalled();
  });

  afterEach(() => fixture.destroy());
});
