import { NewReimb } from "../dtos/new-reimb"
import { Dispatch } from "redux"
import { CreateReimb } from "../remote/reimb-service"
import { loginActionTypes } from "./login-action"

export const CreateUserActionTypes = {
    SUCCESSFUL_NEW_REIMBURSEMENT: 'SUCCESSFUL_NEW_REIMBURSEMENT',
    BAD_REQUEST: 'BAD_REQUEST',
    INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR'
}

export const CreateReimbAction = (newReimb: NewReimb) => async (dispatch: Dispatch) => {

    try {

        let reimbursement = await CreateReimb(newReimb);
        dispatch({
            type: CreateUserActionTypes.SUCCESSFUL_NEW_REIMBURSEMENT,
            payload: reimbursement
        });
        
        dispatch({
            type: loginActionTypes.SUCCESSFUL_LOGIN,
            payload: reimbursement
        });

    } catch (e) {

        let status = e.response.data.statusCode;
        if (status === 400) {
            dispatch({
                type: CreateUserActionTypes.BAD_REQUEST,
                payload: e.response.data.message
            });
        } else {
            dispatch({
                type: CreateUserActionTypes.INTERNAL_SERVER_ERROR,
                payload: e.response.data.message || 'Uh oh! We could not reach the server!'
            });
        }

    }

}
