import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamComponent } from './team.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';
import { Team } from 'src/app/shared/model/team/team';
import { Position } from 'src/app/shared/model/position.enum';
import { Shoots } from 'src/app/shared/model/shoots.enum';
import { Country } from 'src/app/shared/model/country.enum';
import { Player } from 'src/app/shared/model/player/player';
import { By } from '@angular/platform-browser';

describe('TeamHostComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamComponent, TestHostComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [CommonModule,
        SharedModule,
        MatCardModule, MatButtonModule, MatIconModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and should bind team item to component', () => {
    expect(component).toBeTruthy();
    const expectedTeam = component.team;
    const titleElement = fixture.nativeElement.querySelector('.mat-card-title');
    const subtitleElement = fixture.nativeElement.querySelector('.mat-card-subtitle');
    expect(titleElement.textContent).toEqual(expectedTeam.name);
    expect(subtitleElement.textContent).toEqual(expectedTeam.city);
  });

});

describe('TeamComponent', () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [CommonModule,
        SharedModule,
        MatCardModule, MatButtonModule, MatIconModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    component.team = {
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
    fixture.detectChanges();
  });

  it('should bind team component deleted name event', () => {
    spyOn(component.onDelete, 'emit');
    const deleteButton = fixture.debugElement.query(By.css('#deleteBtn'));
    console.warn(deleteButton)
    deleteButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.onDelete.emit).toHaveBeenCalledWith(component.team);
  });
});

@Component({
  template:
    `<div>
  <mat-card class="team-card">
    <mat-card-header>
      <div mat-card-avatar class="team-header-image"></div>
      <mat-card-title>{{team.name}}</mat-card-title>
      <mat-card-subtitle>{{team.city}}</mat-card-subtitle>
    </mat-card-header>
    </mat-card>
  <app-player *ngFor="let player of team.players" [player]="player">
    </app-player>
</div>`
})
class TestHostComponent {
  public team: Team = {
    id: 1,
    name: "1stTeam",
    players: this.players(),
    score: 12,
    city: "Hrodna",
    description: "The oldest team"
  };
  public players(): Player[] {
    return [{
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
    }]
  };
}