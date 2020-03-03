import { Component, OnInit, OnDestroy, ErrorHandler, Output, ChangeDetectorRef } from '@angular/core';
import { Team } from 'src/app/shared/model/team/team';
import { TeamService } from '../team.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { JsonPipe } from '@angular/common';
import { PageEvent } from '@angular/material/paginator';
import { PageableTeam } from 'src/app/shared/model/team/pageable-team';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/authstore/app.states';
import { selectAuthState } from 'src/app/shared/authstore/reducers/auth.reducer';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit, OnDestroy {

  public teams: Team[] = [];
  private isLogin: Boolean;
  private teamSubscription: Subscription;
  public pageSize: number = 5;
  public pageEvent: PageEvent;
  private totalCount: number = 0;

  constructor(readonly teamService: TeamService,
    private store: Store<AppState>,
    private readonly jsonPipe: JsonPipe, private readonly view: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.init();
    this.store.select(selectAuthState).subscribe(res => this.isLogin = res.authenticated);
    this.pageEvent = this.getInitialPageEvent();
  }

  private init() {
    this.teamSubscription = this.teamService.getTeams(this.pageSize, 0).subscribe((result: PageableTeam) => {
      this.teams = result.teams;
      this.totalCount = result.totalCount;
    }, (error => {
      this.teams = [];
      this.totalCount = 0;
    }));
  }

  ngOnDestroy(): void {
    this.teamSubscription.unsubscribe();
  }

  onDeleteClicked(team) {
    console.log("delete: " + team.id);
    this.teamService.deleteTeam(team.id).subscribe(() => {
      this.init();
    });

  }

  onEditClicked(team) {
    console.log("edit " + team);
    this.teamService.updateTeam(team).subscribe(() => {
      this.init();
    });

  }

  public isLogged(): Boolean {
    return this.isLogin;
  }

  public teamScore(team: Team): number {
    return team.score;
  }
  isTeamsEmpty(): boolean {
    return this.totalCount === 0;
  }
  onSearchClicked(likeChars: string) {
    this.teamService.getTeams(this.pageEvent.pageSize, 0).subscribe((res: PageableTeam) => {
      const filteredTeams: Team[] = [...res.teams.filter(t => t.name.toLowerCase().includes(likeChars.toLowerCase()))];
      this.teams = filteredTeams;
    });
  }

  onCancelSearchClicked() {
    this.init();
  }

  getLenght(): number {
    return this.totalCount;
  }

  getPageSizeOption(): number[] {
    return [this.pageSize, this.pageSize * 2, this.pageSize * 4]
  }

  getInitialPageEvent(): PageEvent {
    let initialPageEvent = new PageEvent();
    initialPageEvent.pageSize = this.pageSize;
    initialPageEvent.length = this.getLenght();
    return initialPageEvent;
  }

  onPageEvent(pageEvent: PageEvent) {
    console.log(this.jsonPipe.transform(pageEvent));
    this.teamService.getTeams(pageEvent.pageSize, (pageEvent.pageIndex) * pageEvent.pageSize).subscribe((result: PageableTeam) => {
      this.teams = result.teams;
      this.totalCount = result.totalCount;
    }
    );;
  }
}
