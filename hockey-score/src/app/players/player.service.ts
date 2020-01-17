import { Injectable } from '@angular/core';
import { Player } from '../shared/model/player/player';
import { Shoots } from '../shared/model/shoots.enum';
import { Country } from '../shared/model/country.enum';
import { Position } from '../shared/model/position.enum';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private _players: Player[];

  constructor() { }


  getPlayers(): Player[] {

    return [
      {
        _id: 1,
        _name: "firstPlayer",
        _position: Position.defender,
        _number: 78,
        _born: new Date(),
        _height: 180,
        _weight: 90,
        _age: 36,
        _shoots: Shoots.left,
        _country: Country.BY,
        _stats: []
      }

    ]

  }
}
