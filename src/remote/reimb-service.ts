import { Reimb } from "../dtos/reimb";
import { P1Client } from "./P1-client";
import { NewReimb } from "../dtos/new-reimb";

export async function CreateReimb(newReimb: NewReimb) {
    let response = await P1Client.post('/reimb', newReimb);
    return await response.data;
}

export async function getAllReimbs() {
    return await P1Client.get('/reimb');
}

export async function getReimbById(id: number) {
    return await P1Client.get(`/users/${id}`);
}

export async function getReimbByUniqueKey(key: string, value: string) {
    return await P1Client.get(`/reimb?${key}=${value}`);
}

export async function updateReimb(updatedReimb: Reimb) {
    return await P1Client.put('/reimb', updatedReimb);
}

export async function deleteReimbById(id: number) {
    return await P1Client.delete(`/reimb/${id}`);
}
