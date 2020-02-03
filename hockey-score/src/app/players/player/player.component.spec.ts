import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerComponent } from './player.component';
import { MatCardModule } from '@angular/material';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlayerService } from '../player.service';
import { Position } from 'src/app/shared/model/position.enum';
import { Player } from 'src/app/shared/model/player/player';
import { Shoots } from 'src/app/shared/model/shoots.enum';
import { Country } from 'src/app/shared/model/country.enum';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;
  let playerServiceSpy: jasmine.SpyObj<PlayerService>;
  let stubPlayers: Player[];
  let getPlayersSpy: any;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('PlayerService', ['getPlayers']);
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
    getPlayersSpy = playerServiceSpy.getPlayers.and.returnValue(stubPlayers);

    TestBed.configureTestingModule({
      declarations: [PlayerComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [CommonModule,
        SharedModule,
        MatCardModule, BrowserAnimationsModule
      ],
      providers: [{ provide: PlayerService, useValue: spy }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

    fixture.detectChanges();
    expect(component).toBeTruthy();

  });
});
