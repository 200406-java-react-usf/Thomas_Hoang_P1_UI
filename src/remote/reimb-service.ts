import { Reimb } from "../dtos/reimb";
import { P1Client } from "./P1-client";
import { NewReimb } from "../dtos/new-reimb";

export async function CreateReimb(newReimb: NewReimb) {
    let response = await P1Client.post('/reimbs', newReimb);
    return await response.data;
}

export async function getAllReimbs() {
    let response = await P1Client.get('/reimbs')
    return await response.data;
}

export async function getAllByUserID(id: number) {
    let response = await P1Client.get(`/reimbs/${id}`);
    return await response.data;
}

export async function updateReimb(updatedReimb: Reimb) {
    let response = await P1Client.put('/reimbs', updatedReimb);
    return await response.data;
}

export async function deleteReimbById(id: number) {
    let response = await P1Client.delete(`/reimbs/${id}`);
    return await response.data;
}
