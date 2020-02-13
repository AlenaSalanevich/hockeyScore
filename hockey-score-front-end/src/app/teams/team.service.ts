import { Injectable } from '@angular/core';
import { Team } from '../shared/model/team/team';
import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OderByPipe } from '../shared/pipes/oder-by.pipe';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private static readonly TEAMS_URL: string = 'http://localhost:8090/api/teams';

  constructor(private readonly jsPipe: JsonPipe, private readonly http: HttpClient, private readonly orderPipe: OderByPipe) {
  }

  getTeams(): Observable<Team[]> {
    console.log("from TeamService get teams");
    return this.http.get<Team[]>(TeamService.TEAMS_URL);
  }

  getTeam(id: number): Observable<Team> {
    console.log("from TeamService get team by id");
    return this.http.get<Team>(TeamService.TEAMS_URL + '/' + id);
  }

  createTeam(team: Team) {
    console.log("from TeamService create team");
    return this.http.post<Team>(TeamService.TEAMS_URL, team);

  }

  updateTeam(team: Team) {
    console.log(this.jsPipe.transform(team))
    console.log("from TeamService update team by id " + team.id);
    return this.http.put<Team>(TeamService.TEAMS_URL + '/' + team.id, team);

  }

  deleteTeam(id: number) {
    console.log("from TeamService delete team by id");
    return this.http.delete<Team>(TeamService.TEAMS_URL, {
      params: new HttpParams().set('id', id.toString())
    }); 
  }


 /*  deleteTeam(id: number) {
    console.log("from TeamService delete team by id");
    return this.http.delete<Team>(TeamService.TEAMS_URL + '/' + id);
  } */
}
