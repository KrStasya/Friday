import { Dispatch } from 'redux'



const initialState = {

}
type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    // @ts-ignore
    switch (action.type) {
        case '':
            return {state}
        default:
            return state
    }
}

// actions


// thunks
// @ts-ignore
export const loginTC = () => (dispatch: Dispatch<ActionsType>) => {

}
// @ts-ignore
export const logoutTC = () => (dispatch: Dispatch<ActionsType>) => {

}


// types

type ActionsType = {

}