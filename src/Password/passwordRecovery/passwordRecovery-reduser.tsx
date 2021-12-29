import { Dispatch } from 'redux'



const initialState = {

}
type InitialStateType = typeof initialState

export const recoverPasswordReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
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
export const recoverPasswordTC = () => (dispatch: Dispatch<ActionsType>) => {

}

// types

type ActionsType = {

}