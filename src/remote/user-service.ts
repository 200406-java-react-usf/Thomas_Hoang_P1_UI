import { User } from "../dtos/user";
import { P1Client } from "./P1-client";
import { NewUser } from "../dtos/new-user";

export async function register(newUser: NewUser) {
    let response = await P1Client.post('/users', newUser);
    return await response.data;
}

export async function getUsers() {
    return await P1Client.get('/users');
}

export async function getUserById(id: number) {
    return await P1Client.get(`/users/${id}`);
}

export async function getUserByUniqueKey(key: string, value: string) {
    return await P1Client.get(`/users?${key}=${value}`);
}

export async function updateUser(updatedUser: User) {
    return await P1Client.put('/users', updatedUser);
}

export async function deleteUserById(id: number) {
    return await P1Client.delete(`/users/${id}`);
}
