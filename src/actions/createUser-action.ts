import { NewUser } from "../dtos/new-user"
import { Dispatch } from "redux"
import { createUser } from "../remote/user-service"
import { loginActionTypes } from "./login-action"

export const createUserActionTypes = {
    SUCCESSFUL_NEW_USER: 'SUCCESSFUL_NEW_USER',
    BAD_REQUEST: 'BAD_REQUEST',
    INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR'
}

export const createUserAction = (newUser: NewUser) => async (dispatch: Dispatch) => {

    try {

        let registeredUser = await createUser(newUser);
        dispatch({
            type: createUserActionTypes.SUCCESSFUL_NEW_USER,
            payload: registeredUser
        });
        
        dispatch({
            type: loginActionTypes.SUCCESSFUL_LOGIN,
            payload: registeredUser
        });

    } catch (e) {

        let status = e.response.data.statusCode;
        if (status === 400) {
            dispatch({
                type: createUserActionTypes.BAD_REQUEST,
                payload: e.response.data.message
            });
        } else {
            dispatch({
                type: createUserActionTypes.INTERNAL_SERVER_ERROR,
                payload: e.response.data.message || 'Uh oh! We could not reach the server!'
            });
        }

    }

}
