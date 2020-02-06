import { Team } from '../team/team';
import { Result } from './result';
import { BaseEntity } from '../base-entity';

export class Game extends BaseEntity {
    homeTeam: Team;
    hostTeam: Team;
    result: Result;
    date: Date;
}
