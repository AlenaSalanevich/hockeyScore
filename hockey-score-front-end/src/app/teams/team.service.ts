import { Injectable, ErrorHandler } from '@angular/core';
import { Team } from '../shared/model/team/team';
import { JsonPipe } from '@angular/common';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { OderByPipe } from '../shared/pipes/oder-by.pipe';

import { map, catchError } from 'rxjs/operators';
import { PageableTeam } from '../shared/model/team/pageable-team';
import { AppErrorHandler } from '../shared/app-error-handler';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private static readonly TEAMS_URL: string = 'http://localhost:8090/api/teams';

  constructor(private readonly jsPipe: JsonPipe, private readonly http: HttpClient, private readonly orderPipe: OderByPipe, private readonly errorHandler: AppErrorHandler) {
  }

  getTeams(limit: number, offset: number): Observable<PageableTeam> {

    return this.http.get<PageableTeam>(TeamService.TEAMS_URL, { params: new HttpParams().set('limit', limit.toString()).set('offset', offset.toString()) })
      .pipe(map(data => { return data }),
        catchError(err => {
          this.errorHandler.handleError(err);
          return throwError(err);
        }))
  };

  getTeam(id: number): Observable<Team> {
    console.log("from TeamService get team by id");
    return this.http.get<Team>(TeamService.TEAMS_URL + '/' + id).pipe(map(data => { return data }),
      catchError(err => {
        this.errorHandler.handleError(err);
        return throwError(err);
      }));
  }

  createTeam(team: Team) {
    console.log("from TeamService create team");
    return this.http.post<Team>(TeamService.TEAMS_URL, team).pipe(map(data => { return data }),
      catchError(err => {
        this.errorHandler.handleError(err);
        return throwError(err);
      }));

  }

  updateTeam(team: Team) {
    console.log(this.jsPipe.transform(team))
    console.log("from TeamService update team by id " + team.id);
    return this.http.put<Team>(TeamService.TEAMS_URL + '/' + team.id, team).pipe(map(data => { return data }),
      catchError(err => {
        this.errorHandler.handleError(err);
        return throwError(err);
      }));

  }

  deleteTeam(id: number) {
    console.log("from TeamService delete team by id");
    return this.http.delete<Team>(TeamService.TEAMS_URL + '/' + id).pipe(map(data => { return data }),
      catchError(err => {
        this.errorHandler.handleError(err);
        return throwError(err);
      }));
  }
}
