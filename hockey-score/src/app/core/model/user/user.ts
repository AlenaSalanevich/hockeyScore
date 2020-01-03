export class User {
    private _id: number;
    private _last_name: string;
    private _first_name: string;


    constructor(id: number, first_name: string, last_name:string){
        this._id=id;
        this._first_name=first_name;
        this._last_name=last_name;
    }

    get first_name():string{
        return this._first_name
    }

    get last_name():string{
        return this._last_name;
    }

    get id(): number{
        return this._id;
    }
}
