import { Shoots } from '../shoots.enum';

export interface Iplayer {

    _id: number;
    _name: string;
    _position: Position;
    _number: number;
    _born: Date;
    _height: number;
    _weight: number;
    _age: number;
    _shoots: Shoots;
    _country: Country;
    _stats: any;
}
