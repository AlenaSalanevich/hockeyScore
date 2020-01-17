import { User } from '../user/user';
/**
 * Team entity class without interface with private fields, constructor, getters and setters
 */
export class Team {

    private _name: string;
    private _users: User[];
    private _score: number;


constructor(public name:string, public users: User[], public score:number){
    this._name=name;
    this._users=users;
    this._score=score;
}

}
