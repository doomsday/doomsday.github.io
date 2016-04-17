import {
    GET_PHOTOS_REQUEST,
    GET_PHOTOS_SUCCESS
} from './../constants/Page'

const initialState = {
    year: 2016,
    photos: [],
    fetching: false
}

/**
 * It’s called a reducer because it’s the type of function you would pass to
 * Array.prototype.reduce(reducer, ?initialValue)
 * The reducer is a pure function that takes the previous state and an action,
 * and returns the next state
 */
export default function page(state = initialState, action) {
    switch (action.type) {
        case GET_PHOTOS_REQUEST:
            return { ...state, year: action.payload, fetching: true }
        case GET_PHOTOS_SUCCESS:
            return { ...state, photos: action.payload, fetching: false }
        default:
            return state
    }
}