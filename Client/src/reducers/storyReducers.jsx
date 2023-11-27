import {
    CREATE_STORY_REQUEST,
    CREATE_STORY_SUCCESS,
    CREATE_STORY_FAIL,

    GET_STORIES_REQUEST,
    GET_STORIES_SUCCESS,
    GET_STORIES_FAIL,

    GET_STORY_DETAILS_REQUEST,
    GET_STORY_DETAILS_SUCCESS,
    GET_STORY_DETAILS_FAIL,

    UPDATE_STORY_REQUEST,
    UPDATE_STORY_SUCCESS,
    UPDATE_STORY_FAIL,

    DELETE_STORY_REQUEST,
    DELETE_STORY_SUCCESS,
    DELETE_STORY_FAIL,

    COMMENT_STORY_REQUEST,
    COMMENT_STORY_SUCCESS,
    COMMENT_STORY_FAIL,

    UPDATE_COMMENT_STORY_REQUEST,
    UPDATE_COMMENT_STORY_SUCCESS,
    UPDATE_COMMENT_STORY_FAIL,

    DELETE_COMMENT_STORY_REQUEST,
    DELETE_COMMENT_STORY_SUCCESS,
    DELETE_COMMENT_STORY_FAIL,

    CLEAR_ERRORS,
    LIKE_STORY_REQUEST,
    LIKE_STORY_SUCCESS,
    LIKE_STORY_FAIL

} from '../constants/storyConstant'

export const getStoriesReducer = (state = {stories: [] }, action) => {
    switch (action.type) {
        case GET_STORIES_REQUEST:
            return {
                loading: true,
            }

        case GET_STORIES_SUCCESS:
            return {
               ...state,
                loading: false,
                stories: action.payload
            }
        

        case GET_STORIES_FAIL:
            return {
                loading:false,
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

export const createStoryReducer = (state = {story: {} }, action) => {
    switch (action.type) {
        case CREATE_STORY_REQUEST:
            return {
                loading: true,
            }

        case CREATE_STORY_SUCCESS:
            return {
               ...state,
                loading: false,
                story: action.payload
            }
        

        
        case CREATE_STORY_FAIL:
            return {
                loading:false,
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

export const updateStoryReducer = (state = {story: {} }, action) => {
    switch (action.type) {
        case COMMENT_STORY_REQUEST:
        case LIKE_STORY_REQUEST:
            return {
                loading: true,
            }

        case COMMENT_STORY_SUCCESS:
        case LIKE_STORY_SUCCESS:
            return {
               ...state,
                loading: false,
                story: action.payload
            }
        

        case COMMENT_STORY_FAIL:
        case LIKE_STORY_FAIL:
            return {
                loading:false,
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

export const deleteStoryReducer = (state = {story: {} }, action) => {
    switch (action.type) {
        case DELETE_STORY_REQUEST:
            return {
                loading: true,
            }

        case DELETE_STORY_SUCCESS:
            return {
               ...state,
                loading: false,
                story: action.payload
            }
        

        
        case DELETE_STORY_FAIL:
            return {
                loading:false,
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

