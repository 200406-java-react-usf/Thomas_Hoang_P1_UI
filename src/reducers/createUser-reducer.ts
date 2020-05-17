import { User } from "../dtos/user"
import { AnyAction } from "redux"
import { loginActionTypes } from "../actions/login-action"
import { createUserActionTypes } from "../actions/createUser-action"
import { IRegisterState } from "."

const initialState: IRegisterState = {
    // @ts-ignore
    authUser: (null as User),
    errorMessage: ''
}

export const registerReducer = (state: IRegisterState = initialState, action: AnyAction) => {

    switch (action.type) {
        case createUserActionTypes.SUCCESSFUL_NEW_USER:
            return {
                ...state,
                authUser: action.payload
            }

        case createUserActionTypes.BAD_REQUEST:
        case createUserActionTypes.INTERNAL_SERVER_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }

        default:
            return state;

    }

}
