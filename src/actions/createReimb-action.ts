import { NewReimb } from "../dtos/new-reimb"
import { Dispatch } from "redux"
import { createReimb } from "../remote/reimb-service"
import { loginActionTypes } from "./login-action"

export const createReimbActionTypes = {
    SUCCESSFUL_REGISTRATION: 'SUCCESFUL_NEW_REIMBURSEMENT',
    BAD_REQUEST: 'BAD_REQUEST',
    INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR'
}

export const createReimbAction = (newReimb: NewReimb) => async (dispatch: Dispatch) => {

    try {

        let createdReimbursement = await createReimb(newReimb);
        dispatch({
            type: createReimbActionTypes.SUCCESSFUL_REGISTRATION,
            payload: createdReimbursement
        });
        
        dispatch({
            type: loginActionTypes.SUCCESSFUL_LOGIN,
            payload: createdReimbursement
        });

    } catch (e) {

        let status = e.response.data.statusCode;
        if (status === 400) {
            dispatch({
                type: createReimbActionTypes.BAD_REQUEST,
                payload: e.response.data.message
            });
        } else {
            dispatch({
                type: createReimbActionTypes.INTERNAL_SERVER_ERROR,
                payload: e.response.data.message || 'Uh oh! We could not reach the server!'
            });
        }

    }

}
