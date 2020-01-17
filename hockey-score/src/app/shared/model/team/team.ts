import { User } from '../user/user';
import { Player } from '../player/player';
/**
 * Team entity class without interface with private fields, constructor, getters and setters
 */
export class Team {

    private _id: number;
    private _name: string;
    private _players: Player[];
    private _score: number;
    private _city: string;

    constructor(id: number, name: string, players: Player[], score: number, city: string) {
        this._id = id;
        this._name = name;
        this._players = players;
        this._score = score;
        this._city = city;
    }
}
