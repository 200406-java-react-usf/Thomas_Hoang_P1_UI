import { User } from "../dtos/user";
import { P1Client } from "./P1-client";
import { NewUser } from "../dtos/new-user";

export async function register(newUser: NewUser) {
    let response = await P1Client.post('/users', newUser);
    return await response.data;
}

export async function getUsers() {
    let response = await P1Client.get('/users')
    return await response.data;
}

export async function updateUser(updatedUser: User) {
    let response = await P1Client.put('/users', updatedUser);
    return await response.data;
}

export async function deleteUserById(id: number) {
    let response = await P1Client.delete(`users/${id}`);
    return await response.data;
}
