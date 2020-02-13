import { Injectable } from '@angular/core';
import { Game } from '../shared/model/game/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getGames(): Game[] {
    return [{
      id: 11,
      homeTeam: {
        id: 1,
        name: "HC Kronon",
        players: [],
        score: 12,
        city: "Hrodna",
        description: "Yang team "
      },
      hostTeam: {
        id: 2,
        name: "HC Avangard",
        players: [],
        score: 9,
        city: "Hrodna",
        description: "The oldest team"
      },
      date: new Date(Date.now() - 1000),
      result: {
        homeTeamScore: 0,
        hostTeamScore: 0
      },
      duration: 0,
    },
    {
      id: 11,
      homeTeam: {
        id: 3,
        name: "HC Neman",
        players: [],
        score: 7,
        city: "Homel",
        description: "The oldest team"
      },
      hostTeam: {
        id: 4,
        name: "HC Metalurg",
        players: [],
        score: 3,
        city: "Minsk",
        description: "The oldest team"
      },
      date: new Date(Date.now()),
      result: {
        homeTeamScore: 0,
        hostTeamScore: 0
      },
      duration: 0,
    },
    {
      id: 22,
      homeTeam: {
        id: 5,
        name: "HC Dinamo",
        players: [],
        score: 1,
        city: "Brest",
        description: "The oldest team"
      },
      hostTeam: {
        id: 6,
        name: "HC Lida",
        players: [],
        score: 15,
        city: "Lida",
        description: "The oldest team"
      },
      date: new Date(Date.now() - 100000000000),
      result: {
        homeTeamScore: 2,
        hostTeamScore: 1
      }, duration: 690,
    },
    {
      id: 33,
      homeTeam: {
        id: 6,
        name: "HC Lida",
        players: [],
        score: 15,
        city: "Lida",
        description: "The oldest team"
      },
      hostTeam: {
        id: 4,
        name: "HC Metalurg",
        players: [],
        score: 3,
        city: "Minsk",
        description: "The oldest team"
      },
      date: new Date(Date.now() - 600000000),
      result: {
        homeTeamScore: 3,
        hostTeamScore: 3
      }, duration: 500,
    },
    {
      id: 44,
      homeTeam: {
        id: 4,
        name: "HC Metalurg",
        players: [],
        score: 3,
        city: "Minsk",
        description: "The oldest team"
      },
      hostTeam: {
        id: 4,
        name: "HC Metalurg",
        players: [],
        score: 3,
        city: "Minsk",
        description: "The oldest team"
      },
      date: new Date(Date.now() + 1000000000),
      result: {
        homeTeamScore: 5,
        hostTeamScore: 3
      }, duration: 370,
    },
    {
      id: 55,
      homeTeam: {
        id: 4,
        name: "HC Metalurg",
        players: [],
        score: 3,
        city: "Minsk",
        description: "The oldest team"
      },
      hostTeam: {
        id: 4,
        name: "HC Metalurg",
        players: [],
        score: 3,
        city: "Minsk",
        description: "The oldest team"
      },
      date: new Date(Date.now() + 600000000),
      result: {
        homeTeamScore: 0,
        hostTeamScore: 0
      }, duration: 0,
    }]
  }
}
