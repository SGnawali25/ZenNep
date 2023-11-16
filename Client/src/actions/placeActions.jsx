import axios from 'axios';

import {
    ALL_PLACES_REQUEST,
    ALL_PLACES_SUCCESS,
    ALL_PLACES_FAIL,

    CLEAR_ERRORS,

    PLACE_DETAILS_REQUEST,
    PLACE_DETAILS_SUCCESS,
    PLACE_DETAILS_FAIL,

    CREATE_PLACE_REQUEST,
    CREATE_PLACE_SUCCESS,
    CREATE_PLACE_FAIL,

    UPDATE_PLACE_REQUEST,
    UPDATE_PLACE_SUCCESS,
    UPDATE_PLACE_FAIL,

    DELETE_PLACE_REQUEST,
    DELETE_PLACE_SUCCESS,
    DELETE_PLACE_FAIL,

    CREATE_PLACE_REVIEW_REQUEST,
    CREATE_PLACE_REVIEW_SUCCESS,
    CREATE_PLACE_REVIEW_FAIL,

    GET_PLACE_REVIEW_REQUEST,
    GET_PLACE_REVIEW_SUCCESS,
    GET_PLACE_REVIEW_FAIL,

    UPDATE_PLACE_REVIEW_REQUEST,
    UPDATE_PLACE_REVIEW_SUCCESS,
    UPDATE_PLACE_REVIEW_FAIL,

    DELETE_PLACE_REVIEW_REQUEST,
    DELETE_PLACE_REVIEW_SUCCESS,
    DELETE_PLACE_REVIEW_FAIL
} from '../constants/placeConstant';

const BACKEND_PREFIX = "http://localhost:4000/api/v1";

//create a place - admin
export const createPlace = (placeData) => async (dispatch) => {
    try {

        dispatch({ type: CREATE_PLACE_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`${BACKEND_PREFIX}/admin/place/new`, placeData, config)

        dispatch({
            type: CREATE_PLACE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CREATE_PLACE_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getPlaces = (keyword = "", currentPage = 1, price) => async (dispatch) => {
    try{

        dispatch({
            type: ALL_PLACES_REQUEST
        })

        let link = `${BACKEND_PREFIX}/places`; 

        const { data } = await axios.get(link);

        dispatch({
            type: ALL_PLACES_SUCCESS,
            payload: data.places
        })

    }catch(error){
        dispatch({
            type: ALL_PLACES_FAIL,
            payload: error.response.data.message
        })
    }
}


export const getPlaceDetails = (id) => async (dispatch) => {
    try{

        dispatch({
            type: PLACE_DETAILS_REQUEST
        })

        const config = {withCredentials: true}

        const { data } = await axios.get(`${BACKEND_PREFIX}/place/${id}`, config);

        dispatch({
            type: PLACE_DETAILS_SUCCESS,
            payload: data.place
        })

    }catch(error){
        dispatch({
            type: PLACE_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

//clear error
export const clearErrors = () => async (dispatch) => {

    dispatch({
            type: CLEAR_ERRORS
        })
}