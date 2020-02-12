import { Injectable } from '@angular/core';
import { Player } from '../shared/model/player/player';
import { Shoots } from '../shared/model/shoots.enum';
import { Country } from '../shared/model/country.enum';
import { Position } from '../shared/model/position.enum';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  getPlayers(): Player[] {

    return [
      {
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
      },
      {
        id: 2,
        name: "2ndPlayer",
        position: Position.goalkeeper,
        number: 30,
        born: new Date(),
        height: 180,
        weight: 90,
        age: 36,
        shoots: Shoots.left,
        country: Country.by,
        stats: []
      },
      {
        id: 3,
        name: "3dPlayer",
        position: Position.forward,
        number: 10,
        born: new Date(),
        height: 180,
        weight: 90,
        age: 36,
        shoots: Shoots.right,
        country: Country.by,
        stats: []
      },
      {
        id: 4,
        name: "4thPlayer",
        position: Position.defender,
        number: 44,
        born: new Date(),
        height: 180,
        weight: 90,
        age: 36,
        shoots: Shoots.left,
        country: Country.ru,
        stats: []
      }
    ]
  }
}
