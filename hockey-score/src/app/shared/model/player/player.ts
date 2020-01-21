import { Iplayer } from './iplayer';

export class Player implements Iplayer {
    _id: number; _name: string;
    _position: import("../position.enum").Position;
    _number: number;
    _born: Date;
    _height: number;
    _weight: number;
    _age: number;
    _shoots: import("../shoots.enum").Shoots;
    _country: import("../country.enum").Country;
    _stats: any;
}
