import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerComponent } from './player.component';
import { MatCardModule } from '@angular/material';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { Position } from 'src/app/shared/model/position.enum';
import { Shoots } from 'src/app/shared/model/shoots.enum';
import { Country } from 'src/app/shared/model/country.enum';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Player } from 'src/app/shared/model/player/player';

describe('PlayerComponent test host', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [PlayerComponent, TestHostComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [CommonModule,
        SharedModule,
        MatCardModule, BrowserAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => fixture.destroy());

  it('should create and bind player to component', () => {
    expect(component).toBeTruthy();
    const expectedPlayer = component.player;
    const titleElement = fixture.nativeElement.querySelector('.mat-card-title');
    expect(titleElement.textContent).toEqual(expectedPlayer.number + ' ' + expectedPlayer.name);
  });

  @Component({
    template: `<mat-card class="player-card">
    <mat-card-header>
      <div mat-card-avatar class="player-header-image"></div>
      <mat-card-title>{{player.number}} {{player.name}}</mat-card-title>
    </mat-card-header>
    <mat-card-content>
    </mat-card-content>
  </mat-card>`
  })
  class TestHostComponent {
    public player: Player = {
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
    };
  }
});
