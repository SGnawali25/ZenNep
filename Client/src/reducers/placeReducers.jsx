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
} from '../constants/productConstant';


export const placesReducer = (state = { products: []}, action ) => {
    switch (action.type) {
        case ALL_PLACES_REQUEST: 
            return {
            loading: true,
            places: []
            }
        
        case ALL_PLACES_SUCCESS:
            return{
                loading: false,
                places: action.payload.places,
            } 
            
        case ALL_PLACES_FAIL:
            return{
                loading: false,
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


export const placeDetailsReducer = (state = { product: {}}, action ) => {
    switch (action.type) {
        case PLACE_DETAILS_REQUEST: 
            return {
                ...state,
            loading: true
            }
        
        case PLACE_DETAILS_SUCCESS:
            return{
                ...state,
                loading: false,
                place: action.payload
            } 
            
        case PLACE_DETAILS_FAIL:
            return{
                ...state,
                loading: true,
                place: null,
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


