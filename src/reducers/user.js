import {
    LOGIN_SUCCESS,
    LOGIN_FATAL
} from './../constants/User'

const initialState = {
    name: '',
    error: ''
}

export default function user(state = initialState, action) {

    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, name: action.payload, error: '' }
        case LOGIN_FATAL:
            return { ...state, error: action.payload.message }
        default:
            return state
    }
}