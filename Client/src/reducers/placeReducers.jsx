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


export const productsReducer = (state = { products: []}, action ) => {
    switch (action.type) {
        case ALL_PRODUCTS_REQUEST: 
            return {
            loading: true,
            products: []
            }
        
        case ALL_PRODUCTS_SUCCESS:
            return{
                loading: false,
                products: action.payload.products,
                productsCount : action.payload.productsCount,
                resPerPage: action.payload.resPerPage,
                filteredProductsCount: action.payload.filteredProductsCount
            } 
            
        case ALL_PRODUCTS_FAIL:
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


export const productDetailsReducer = (state = { product: {}}, action ) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST: 
            return {
                ...state,
            loading: true
            }
        
        case PRODUCT_DETAILS_SUCCESS:
            return{
                ...state,
                loading: false,
                product: action.payload
            } 
            
        case PRODUCT_DETAILS_FAIL:
            return{
                ...state,
                loading: true,
                product: null,
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


