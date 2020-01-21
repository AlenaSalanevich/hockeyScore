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
        _id: 1,
        _name: "1stPlayer",
        _position: Position.defender,
        _number: 78,
        _born: new Date(),
        _height: 180,
        _weight: 90,
        _age: 36,
        _shoots: Shoots.left,
        _country: Country.BY,
        _stats: []
      },
      {
        _id: 2,
        _name: "2ndPlayer",
        _position: Position.goalkeeper,
        _number: 30,
        _born: new Date(),
        _height: 180,
        _weight: 90,
        _age: 36,
        _shoots: Shoots.left,
        _country: Country.BY,
        _stats: []
      },
      {
        _id: 3,
        _name: "3dPlayer",
        _position: Position.forward,
        _number: 10,
        _born: new Date(),
        _height: 180,
        _weight: 90,
        _age: 36,
        _shoots: Shoots.right,
        _country: Country.BY,
        _stats: []
      },
      {
        _id: 4,
        _name: "4thPlayer",
        _position: Position.defender,
        _number: 44,
        _born: new Date(),
        _height: 180,
        _weight: 90,
        _age: 36,
        _shoots: Shoots.left,
        _country: Country.RU,
        _stats: []
      }
    ]
  }
}
