import { SET_YEAR } from './../constants/Page'

/** 
 * This is ActionCreator. In Redux action creators simply return an action. */
export function setYear(year) {
    return {
        type: SET_YEAR,
        payload: year
    }
}