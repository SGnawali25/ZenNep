import axios from 'axios';

import {
    CREATE_STORY_REQUEST,
    CREATE_STORY_SUCCESS,
    CREATE_STORY_FAIL,

    GET_STORIES_REQUEST,
    GET_STORIES_SUCCESS,
    GET_STORIES_FAIL,

    LIKE_STORY_REQUEST,
    LIKE_STORY_FAIL,
    LIKE_STORY_SUCCESS,

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

    CLEAR_ERRORS

} from '../constants/storyConstant'

const BACKEND_PREFIX = "http://localhost:4000/api/v1";

export const getStories = () => async(dispatch) => {
    try{

        dispatch({
            type: GET_STORIES_REQUEST
        })

        const config = {withCredentials: true}

        let link = `${BACKEND_PREFIX}/stories` 

        const { data } = await axios.get(link, config);

        dispatch({
            type: GET_STORIES_SUCCESS,
            payload: data.stories
        })

    }catch(error){
        dispatch({
            type: GET_STORIES_FAIL,
            payload: error.response.data.message
        })
    }
}


//creates a new story
export const createStory = (caption, picture) => async(dispatch) => {
    try{

        dispatch({
            type: CREATE_STORY_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true,
        }

        let link = `${BACKEND_PREFIX}/create/story` 

        const { data } = await axios.post(link, {caption, picture},config);

        dispatch({
            type: CREATE_STORY_SUCCESS,
            payload: data.story
        })

    }catch(error){
        dispatch({
            type: CREATE_STORY_FAIL,
            payload: error.response.data.message
        })
    }
}

export const likeStory = (id) => async(dispatch) => {
    try{
        dispatch({
            type: LIKE_STORY_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true,
        }

        const {data} = await axios.get(`${BACKEND_PREFIX}/story/${id}/like`, config)

        dispatch({
            type: LIKE_STORY_SUCCESS,
            payload: data.story
        })
    } catch(error){
        dispatch({
            type: LIKE_STORY_FAIL,
            payload: error.response.data.message
        })
    }
}


export const deleteStory = (id) => async(dispatch) => {
    try{
        dispatch({
            type: DELETE_STORY_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true,
        }

        const {data} = await axios.delete(`${BACKEND_PREFIX}/story/${id}`, config)

        dispatch({
            type: DELETE_STORY_SUCCESS,
            payload: data.story
        })
    } catch(error){
        dispatch({
            type: DELETE_STORY_FAIL,
            payload: error.response.data.message
        })
    }
}


export const clearErrors = () => async (dispatch) => {

    dispatch({
            type: CLEAR_ERRORS
        })
}