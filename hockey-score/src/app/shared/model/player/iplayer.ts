import { Shoots } from '../shoots.enum';
import { Country } from '../country.enum';
import { Position } from '../position.enum';

export interface Iplayer {
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
