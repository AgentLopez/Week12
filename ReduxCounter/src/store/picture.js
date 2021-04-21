
const initialState = {
    url: []
}

const reducer = (state = initialState, action) => {

    if (action.type === 'NEW_IMG') {
        return {
            ...state,
            url: state.url.concat(action.payload)
        }
    }


    return state
}

export default reducer