import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Team } from 'src/app/shared/model/team/team';
import { EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamComponent implements OnInit, OnDestroy {

  @Input() public team: Team;
  public isAuth: Boolean;
  private isAuthSubscription: Subscription;
  public static minRateLevel: number = 10;

  @Output() public onDelete = new EventEmitter<Team>();
  @Output() public onEdit = new EventEmitter<Team>();

  ngOnDestroy(): void {
    this.isAuthSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.isAuthSubscription = this.authService.isLogin.subscribe(res => this.isAuth = res);
  }


  public deleteSelectedTeam: Team;

  public editSelectedTeam: Team;

  constructor(private readonly authService: AuthService) { }
  columnsToDisplay = ['number', 'name', 'position', 'country', 'age', 'shoots', 'height', 'weight'];

  onEditSelect(team) {
    this.onEdit.emit(team);
    console.log('edit ' + team.name);
  }

  onDeleteSelect(team) {
    console.log('delete ' + team.name);
    this.onDelete.emit(team);
  }

  public onEditClick(team: Team): void {
    this.editSelectedTeam = team;
  }

  public onDeleteClick(team: Team): void {
    this.deleteSelectedTeam = team;
  }
}
