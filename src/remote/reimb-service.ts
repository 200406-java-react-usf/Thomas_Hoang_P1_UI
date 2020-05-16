import { P1Client } from "./P1-client";
import { NewReimb } from "../dtos/new-reimb";
import { Reimbursement } from "../dtos/reimb";

export async function register(newReimb: NewReimb) {
    let response = await P1Client.post('/reimb', newReimb);
    return await response.data;
}

export async function getAll() {
    return await P1Client.get('/reimb');
}

export async function getById(id: number) {
    return await P1Client.get(`/reimb/${id}`);
}

export async function getReimbByUniqueKey(key: string, value: string) {
    return await P1Client.get(`/reimb?${key}=${value}`);
}

export async function update(updatedReimb: Reimbursement) {
    return await P1Client.put('/reimb', updatedReimb);
}

export async function deleteById(id: number) {
    return await P1Client.delete(`/reimb/${id}`);
}
