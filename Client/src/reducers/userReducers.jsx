import{
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    CLEAR_ERRORS,

    REGISTER_USER_REQUEST,
    REGISTER_USER_FAIL,
    REGISTER_USER_SUCCESS,

    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,

    CHANGE_PASSWORD_REQUEST,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAIL,

    UPDATE_USER_PROFILE_REQUEST,
    UPDATE_USER_PROFILE_SUCCESS,
    UPDATE_USER_PROFILE_FAIL,

    GET_ALL_USERS_REQUEST,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAIL,

    GET_USER_DETAILS_REQUEST,
    GET_USER_DETAILS_SUCCESS,
    GET_USER_DETAILS_FAIL,

    UPDATE_USER_DETAILS_REQUEST,
    UPDATE_USER_DETAILS_SUCCESS,
    UPDATE_USER_DETAILS_FAIL,

    DELETE_USER_REQUEST,
    DELETE_USER_FAIL,
    DELETE_USER_SUCCESS,
} from '../constants/userConstants';

export const authReducer = (state = {user: {} }, action) => {
    switch (action.type) {
        case LOAD_USER_REQUEST:
        case LOGIN_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            }

        case LOAD_USER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            }

        case LOAD_USER_FAIL:
        case LOGIN_FAIL:
            return {
                ...state,
                loading : false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }

        case LOGOUT_SUCCESS:
            return {
                loading: false,
                isAuthenticated: false,
                user: null
            }

        case LOGOUT_FAIL:
            return {
                ...state,
                loading : false,
                error: action.payload
            }
        

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}


export const registerUserReducer = (state = {user: {} }, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            }

        case REGISTER_USER_SUCCESS:
            return {
               ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            }
        

        
        case REGISTER_USER_FAIL:
            return {
                loading:false,
                isAuthenticated:false,
                user:null,
                error: action.payload
            }

        case LOGOUT_SUCCESS:
            return{
                loading:false,
                isAuthenticated:false,
                user: null
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}


export const changePasswordReducer = (state = { }, action) => {
    switch (action.type) {
        case CHANGE_PASSWORD_REQUEST:
            return {
                loading: true
            }

        case CHANGE_PASSWORD_SUCCESS:
            return {
               ...state,
                loading: false,
                message: action.payload
            }
        case CHANGE_PASSWORD_FAIL:
            return {
               ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return{
               ...state,
               message: null,
                error: null
            }

        default:
            return state;
    }
}