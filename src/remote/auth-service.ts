import { User } from "../dtos/user";
import { P1Client } from "./P1-client";

export async function authenticate(username: string, password: string): Promise<User> {
    let response = await P1Client.post('/auth', {username, password});
    return await response.data;
}

export async function invalidateSession() {
    return await P1Client.get('/auth');
}