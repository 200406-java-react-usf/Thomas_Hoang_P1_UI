export class User {

    ers_user_id: number;
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    email: string;
    role: string

    constructor(
        ers_user_id: number, 
        un: string,
        pw: string, 
        first_name: string, 
        last_name: string, 
        email: string,
        role_name: string) 
    {
        this.ers_user_id = ers_user_id;
        this.password = pw;
        this.username = un;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.role = role_name;
    }
}