import { NewUser } from "../dtos/new-user"
import { Dispatch } from "redux"
import { getUsers } from "../remote/user-service"
import { loginActionTypes } from "./login-action"

export const MainUserActionTypes = {
    SUCCESSFUL: 'SUCCESSFULLY_GRABBED_DATA',
    BAD_REQUEST: 'BAD_REQUEST',
    INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR'
}

export const MainUserAction = (newUser: NewUser) => async (dispatch: Dispatch) => {

    try {

        let registeredUser = await getUsers();
        dispatch({
            type: MainUserActionTypes.SUCCESSFUL,
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
                type: MainUserActionTypes.BAD_REQUEST,
                payload: e.response.data.message
            });
        } else {
            dispatch({
                type: MainUserActionTypes.INTERNAL_SERVER_ERROR,
                payload: e.response.data.message || 'Uh oh! We could not reach the server!'
            });
        }

    }

}
