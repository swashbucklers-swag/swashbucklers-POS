export class Login {
    
    username:string;
    password:string;

    public constructor(init?: Partial<Login>) {
        Object.assign(this, init);
    }
}