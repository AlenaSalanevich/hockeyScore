import { Component, OnInit, Input, Output } from '@angular/core';
import { Team } from 'src/app/shared/model/team/team';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input() public team: Team;

  @Output() public onDelete = new EventEmitter<Team>();

  onDeleteSelect(team) {
    this.onDelete.emit(team.name);
  }

  constructor() { }
  columnsToDisplay = ['number', 'name', 'position', 'country', 'age', 'shoots', 'height', 'weight'];
  ngOnInit() {

  }

  onEditSelect(team) {
    console.log('edit ' + team.name);
  }
}
