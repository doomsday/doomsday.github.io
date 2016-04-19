import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FATAL
} from './../constants/User'

export function handleLogin() {
    return function(dispatch) {
        
        dispatch({
            type: LOGIN_REQUEST
        })
        
        VK.Auth.login((r) => {
            if (r.session) {
                let username = r.session.user.first_name
                
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: username
                })
            } else {
                dispatch({
                    type: LOGIN_FATAL,
                    error: true,
                    payload: new Error('Auth error')
                })
            }
        },4)
    }
}