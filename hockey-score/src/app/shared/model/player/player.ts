import { Iplayer } from './iplayer';
import { Position } from '../position.enum';
import { Shoots } from '../shoots.enum';
import { Country } from '../country.enum';

export class Player implements Iplayer {
    id: number;
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
