
import * as actionTypes from './actionTypes'

export const incrementCounter = () => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const decrimentCounter = () => {
    return {
        type: actionTypes.DECRIMENT
    }
}