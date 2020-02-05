import { Team } from '../team/team';
import { Result } from './result';

export class Game {
    homeTeam: Team;
    hostTeam: Team;
    result: Result;
    date: Date;
}
