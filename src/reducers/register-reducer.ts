import { User } from "../dtos/user"
import { AnyAction } from "redux"
import { loginActionTypes } from "../actions/login-action"
import { CreateUserActionTypes } from "../actions/register-action"
import { ICreateUserState } from "."

const initialState: ICreateUserState = {
    // @ts-ignore
    authUser: (null as User),
    errorMessage: ''
}

export const CreateUserReducer = (state: ICreateUserState = initialState, action: AnyAction) => {

    switch (action.type) {
        case CreateUserActionTypes.SUCCESSFUL_NEW_USER:
            return {
                ...state,
                authUser: action.payload
            }

        case CreateUserActionTypes.BAD_REQUEST:
        case CreateUserActionTypes.INTERNAL_SERVER_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }

        default:
            return state;

    }

}
