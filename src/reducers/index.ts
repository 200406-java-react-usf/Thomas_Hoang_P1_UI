import { User } from "../dtos/user";
import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import { CreateUserReducer } from "./register-reducer";

export interface ILoginState {
    authUser: User;
    errorMessage: string;
}

export interface ICreateUserState {
    errorMessage: string;
}

export interface IState {
    login: ILoginState;
    register: ICreateUserState;
}

export const state = combineReducers<IState>({
    login: loginReducer,
    register: CreateUserReducer
});
