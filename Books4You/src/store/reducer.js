
const initialState = {
    ctr: 0,
    name: 'John Doe',
    loggedIn: false
}

const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            ...state,
            ctr: state.ctr + 1
        }
    }
    if (action.type === 'DECRIMENT') {
        return {
            ...state,
            ctr: state.ctr - 1
        }
    }
    if (action.type === 'ADD') {
        console.log(typeof(action.value))
        return {
            ...state,
            ctr: state.ctr + action.value
        }
    }
    if (action.type === "SUB") {
        return {
            ...state,
            ctr: state.ctr - action.value
        }
    }
    if (action.type === 'MATH') {
        if(action.method === '+') {
            return {
                ...state,
                ctr: state.ctr + action.value
        }}
        if(action.method === '-') {
            return {
                ...state,
                ctr: state.ctr - action.value
        }}
        if(action.method === '*') {
            return {
                ...state,
                ctr: state.ctr * action.value
        }}
        if(action.method === '/') {
            return {
                ...state,
                ctr: state.ctr / action.value
        }
        }
    }
    if (action.type === 'LOGIN') {
        return {
            ...state,
            loggedIn: true
        }
    }
    if (action.type === 'LOGOUT') {
        return {
            ...state,
            loggedIn: false
        }
    }
    
    
    return state
}

export default reducer