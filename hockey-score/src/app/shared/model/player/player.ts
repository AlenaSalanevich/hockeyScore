import { Iplayer } from './iplayer';

export class Player implements Iplayer {
    id: number;
    name: string;
    position: import("../position.enum").Position;
    number: number;
    born: Date;
    height: number;
    weight: number;
    age: number;
    shoots: import("../shoots.enum").Shoots;
    country: import("../country.enum").Country;
    stats: any;
}
