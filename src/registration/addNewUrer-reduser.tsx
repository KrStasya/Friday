import { Dispatch } from 'redux'



const initialState = {

}
type InitialStateType = typeof initialState

export const newUserReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
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
export const registrationNewUserTC = () => (dispatch: Dispatch<ActionsType>) => {

}
// @ts-ignore
export const removeUserTC = () => (dispatch: Dispatch<ActionsType>) => {

}


// types

type ActionsType = {

}