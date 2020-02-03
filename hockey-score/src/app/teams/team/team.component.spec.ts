import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamComponent } from './team.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material';
import { Team } from 'src/app/shared/model/team/team';
import { Position } from 'src/app/shared/model/position.enum';
import { Shoots } from 'src/app/shared/model/shoots.enum';
import { Country } from 'src/app/shared/model/country.enum';

describe('TeamComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamComponent, TestHostComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [CommonModule,
        SharedModule,
        MatCardModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  @Component({
    template: `<app-team></app-team>`
  })
  class TestHostComponent {
    public team: Team = {
      id: 1,
      name: "1stTeam",
      players: [{
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
      }],
      score: 12,
      city: "Hrodna",
      description: "The oldest team"
    };
  }
});
