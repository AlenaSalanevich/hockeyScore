import { User } from '../user/user';
import { Player } from '../player/player';
/**
 * Team entity class without interface with private fields, constructor, getters and setters
 */
export class Team {

    id: number;
    name: string;
    players: Player[];
    score: number;
    city: string;
    description: string;

    constructor(id: number, name: string, players: Player[], score: number, city: string, description: string) {
        this.id = id;
        this.name = name;
        this.players = players;
        this.score = score;
        this.city = city;
        this.description = description;
    }

}
