import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE,USER_LOGIN_REQUEST, USER_LOGOUT } from '../constants/userConstants'


export const userReducer = ( state = { },action ) => { 
    switch(action.type) { 
        case USER_LOGIN_REQUEST: return {loading: true, userInfo: ''}
        case USER_LOGIN_SUCCESS: return {loading: false, userInfo: action.payload}
        case USER_LOGIN_FAILURE: return {loading: false, error: action.payload}
        case USER_LOGOUT: return{ }
        default: return state
    }
}
