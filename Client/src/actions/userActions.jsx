import axios from 'axios';

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

const BACKEND_PREFIX = "http://localhost:4000/api/v1";

//Login
export const login = (email, password) => async (dispatch) => {
    try{

        dispatch({type: LOGIN_REQUEST})

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        }

        const {data} = await axios.post(`${BACKEND_PREFIX}/login`, {email, password} ,  config)
       

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user,

        })


    } catch (error){
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

//register user
export const register = (name, email, password, picture) => async(dispatch) => {
    try{
        dispatch({type: REGISTER_USER_REQUEST})

        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
        }
        const {data} = await axios.post(`${BACKEND_PREFIX}/register`,{name, email, password, picture}, config);

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.user
        })


    }catch(error){
        
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message
        })

    }

}

//load user
export const loadUser = () => async(dispatch) => {
    try{
        dispatch({type: LOAD_USER_REQUEST})

        const config = {withCredentials: true}

        const {data} = await axios.get(`${BACKEND_PREFIX}/me`, config);

        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data.user
        })


    }catch(error){
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message
        })

    }

}



//logout user
export const logout = () => async(dispatch) => {
    try{

        const config = {withCredentials: true}

        await axios.get(`${BACKEND_PREFIX}/logout`, config);

        dispatch({
            type: LOGOUT_SUCCESS,
        })


    }catch(error){
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message
        })

    }

}

//user change password
export const changePassword = (currentPassword, newPassword, confirmNewPassword) => async (dispatch) => {
    try{
        dispatch({type: CHANGE_PASSWORD_REQUEST})

        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
        }

        const {data} = await axios.put(`${BACKEND_PREFIX}/password/change`, {currentPassword, newPassword, confirmNewPassword}, config);

        
        dispatch({
            type: CHANGE_PASSWORD_SUCCESS,
            payload: data.message
        })
    } catch (error){
        dispatch({
            type: CHANGE_PASSWORD_FAIL,
            payload: error.response.data.message
        })
    }
}

//update profile of user
export const updateProfile = (userData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_USER_PROFILE_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        const { data } = await axios.put(`${BACKEND_PREFIX}/me/update`, userData, config)

        dispatch({
            type: UPDATE_USER_PROFILE_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_USER_PROFILE_FAIL,
            payload: error.response.data.message
        })
    }
}

//admin gets all users
export const getAllUsers= () => async (dispatch) => {
    try{
        dispatch({type: GET_ALL_USERS_REQUEST})

        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
        }

        const {data} = await axios.get(`${BACKEND_PREFIX}/admin/users`, config);

        
        dispatch({
            type: GET_ALL_USERS_SUCCESS,
            payload: data.message
        })
    } catch (error){
        dispatch({
            type: GET_ALL_USERS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Get user details - ADMIN
export const getUserDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: GET_USER_DETAILS_REQUEST})

        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
        }

        const { data } = await axios.get(`${BACKEND_PREFIX}/admin/user/${id}`, config)

        dispatch({
            type: GET_USER_DETAILS_SUCCESS,
            payload: data.user
        })

    } catch (error) {
        dispatch({
            type: GET_USER_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update user - ADMIN
export const updateUser = (id, userData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_USER_DETAILS_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
        }

        const { data } = await axios.put(`${BACKEND_PREFIX}/admin/user/${id}`, userData, config)

        dispatch({
            type: UPDATE_USER_DETAILS_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_USER_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Delete user - ADMIN
export const deleteUser = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_USER_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
        }

        const { data } = await axios.delete(`${BACKEND_PREFIX}/admin/user/${id}`,config)

        dispatch({
            type: DELETE_USER_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_USER_FAIL,
            payload: error.response.data.message
        })
    }
}



//clear errors
export const clearErrors = () => async (dispatch) => {

    dispatch({
            type: CLEAR_ERRORS
        })
}