import { SET_YEAR } from './../constants/Page'

const initialState = {
    year: 2016,
    photos: []
}

/**
 * It’s called a reducer because it’s the type of function you would pass to
 * Array.prototype.reduce(reducer, ?initialValue)
 * The reducer is a pure function that takes the previous state and an action,
 * and returns the next state
 */
export default function page (state = initialState, action) {
    switch (action.type) {
        case SET_YEAR:
            return { ...state, year: action.payload }
        default:
            return state
    }
}