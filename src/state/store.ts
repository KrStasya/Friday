import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {authReducer} from "../login/auth-reduser";
import {recoverPasswordReducer} from "../Password/passwordRecovery/passwordRecovery-reduser";
import {newUserReducer} from "../registration/addNewUrer-reduser";
import {changePasswordReducer} from "../Password/newPassword/newPassword-reduser";



const rootReducer=combineReducers({
    auth:authReducer,
    recoverPass:recoverPasswordReducer,
    newUser:newUserReducer,
    newPassword:changePasswordReducer,
})

export type AppRootType = ReturnType<typeof rootReducer>

export const store=createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store=store