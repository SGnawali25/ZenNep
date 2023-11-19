import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {composeWithDevTools} from'redux-devtools-extension';

import { authReducer, registerUserReducer, changePasswordReducer} from './reducers/userReducers';
import { getStoriesReducer, createStoryReducer, updateStoryReducer, deleteStoryReducer } from './reducers/storyReducers';
import { createPlaceReducer, placeDetailsReducer, placesReducer } from './reducers/placeReducers';

const reducer = combineReducers({
    auth: authReducer,
    registerUser: registerUserReducer,
    changePassword: changePasswordReducer,
    stories: getStoriesReducer,
    createStory: createStoryReducer,
    deletedStory: deleteStoryReducer,
    updateStory: updateStoryReducer,
    places: placesReducer,
    place: placeDetailsReducer,
    createPlace: createPlaceReducer,
})

let initialState = {};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;