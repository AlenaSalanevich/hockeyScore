import { User } from '../user/user';

export class Team {

    private _name: string;
    private _users: User[];
    private _place: number;


constructor(name:string, users: User[], place:number){
    this._name=name;
    this._users=users;
    this._place=place;
}

}
