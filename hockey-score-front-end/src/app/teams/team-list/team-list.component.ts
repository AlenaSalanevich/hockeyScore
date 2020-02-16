import { Component, OnInit, OnDestroy, ErrorHandler } from '@angular/core';
import { Team } from 'src/app/shared/model/team/team';
import { TeamService } from '../team.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { HttpErrorResponse } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit, OnDestroy {

  public teams: Team[] = [];
  private isLogin: Boolean;
  public isLoginSubscription: Subscription;
  private teamSubscription: Subscription;
  public pageSize: number = 5;
  public pageEvent: PageEvent;

  constructor(readonly teamService: TeamService,
    private readonly authService: AuthService,
    private readonly jsonPipe: JsonPipe, private errorHandler: ErrorHandler) {
  }

  ngOnInit() {
    this.init();
    this.isLoginSubscription = this.authService.isLogin.subscribe(result => this.isLogin = result);
    this.pageEvent = this.getInitialPageEvent();
  }

  private init() {
    this.teamSubscription = this.teamService.getTeams().pipe().subscribe((result: Team[]) => {
      this.teams = result;
    }, (error: HttpErrorResponse | any) => {
      this.errorHandler.handleError(error)
      console.log(error)
    });
  }

  ngOnDestroy(): void {
    this.isLoginSubscription.unsubscribe();
    this.teamSubscription.unsubscribe();
  }

  onDeleteClicked(team) {
    console.log("delete: " + team.id);
    this.teamService.deleteTeam(team.id).subscribe(() => {
      this.init();
    }, (error: HttpErrorResponse) => console.log(console.error()));
  }


  onEditClicked(team) {
    console.log("edit " + team);
    this.teamService.updateTeam(team).subscribe(() => {
      this.init();
    }, (error: HttpErrorResponse) => console.log(console.error()));;
  }

  public isLogged(): Boolean {
    return this.isLogin;
  }

  public teamScore(team: Team): number {
    return team.score;
  }
  isTeamsEmpty(): boolean {
    return this.teams.length === 0;
  }
  onSearchClicked(likeChars: string) {
    this.teamService.getTeams().subscribe((res: Team[]) => {
      const filteredTeams: Team[] = [...res.filter(t => t.name.toLowerCase().includes(likeChars.toLowerCase()))];
      console.log("filteredTeams: " + " " + this.jsonPipe.transform(filteredTeams));
      this.teams = filteredTeams;
    }, (error: HttpErrorResponse) => {
      this.init();
      console.log(console.error())
    });
  }

  getLenght(pageSize: number): number {
    return Math.round(this.teams.length / pageSize) === 0 ? Math.round(this.teams.length / pageSize) + 1 : Math.round(this.teams.length / pageSize);
  }

  getPageSizeOption(): number[] {
    return [this.pageSize, this.pageSize * 2, this.pageSize * 10]
  }

  getInitialPageEvent(): PageEvent {
    let initialPageEvent = new PageEvent();
    initialPageEvent.pageIndex = 1;
    initialPageEvent.pageSize = this.pageSize;
    initialPageEvent.length = this.getLenght(initialPageEvent.pageSize);
    return initialPageEvent;
  }
}
