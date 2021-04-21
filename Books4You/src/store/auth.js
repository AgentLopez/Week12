import * as actionTypes from '../action/actionTypes'

const initialState = {
    loggedIn: false
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                loggedIn: true
            }
            case actionTypes.LOGOUT:
                return {
                    ...state,
                    loggedIn: false
                }
                default:
                    return state
    }
    

}

export default reducer