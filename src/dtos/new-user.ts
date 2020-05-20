export class NewUser {

    first_name: string;
    last_name: string;
    email: string;
    username: string;
    password: string;
    role_name: string;
    
    constructor(
        first_name: string, 
        last_name: string, 
        email: string,
        un: string,
        pw: string,
        role_name: string) 
    {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.username = un;
        this.password = pw;
        this.role_name = role_name;
    }
}
