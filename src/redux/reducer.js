import axios from 'axios';

const initialState = {
    user: {}
}

// Action Names
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const GET_USER = 'GET_USER';

// Action Creator Functions
export function loginUser(user) {
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER,
        payload: initialState
    }
}

export function getUser() {
    const user = axios.get('/api/auth/getuser')
    return {
        type: GET_USER,
        payload: user
    }
}


// Reducer Function
export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER: 
            return { ...state, user: action.payload}
        case LOGOUT_USER: 
            return { ...state, ...action.payload }
        case GET_USER + "_PENDING":
            return state
        case GET_USER + "_FULFILLED":
                return { ...state, user: action.payload.data,}
        case GET_USER + "_REJECTED":
            return initialState
        default: 
            return initialState
    }
} 