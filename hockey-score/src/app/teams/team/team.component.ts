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
  @Output() public onEdit = new EventEmitter<Team>();

  onDeleteSelect(team) {
    console.log('delete ' + team.name);
    this.onDelete.emit(team);
  }

  constructor() { }
  columnsToDisplay = ['number', 'name', 'position', 'country', 'age', 'shoots', 'height', 'weight'];
  ngOnInit() {

  }

  onEditSelect(team) {
    this.onEdit.emit(team);
    console.log('edit ' + team.name);
  }
}
