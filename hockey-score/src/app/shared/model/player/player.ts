import { Iplayer } from './iplayer';
import { Position } from '../position.enum';
import { Shoots } from '../shoots.enum';
import { Country } from '../country.enum';
import { BaseEntity } from '../base-entity';

export class Player extends BaseEntity implements Iplayer {
    name: string;
    position: Position;
    number: number;
    born: Date;
    height: number;
    weight: number;
    age: number;
    shoots: Shoots;
    country: Country;
    stats: any;
}
