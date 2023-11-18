import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {composeWithDevTools} from'redux-devtools-extension';

import { authReducer, registerUserReducer, changePasswordReducer} from './reducers/userReducers';
import { getStoriesReducer, createStoryReducer, updateStoryReducer } from './reducers/storyReducers';

const reducer = combineReducers({
    auth: authReducer,
    registerUser: registerUserReducer,
    changePassword: changePasswordReducer,
    stories: getStoriesReducer,
    createStory: createStoryReducer,
    updateStory: updateStoryReducer
})

let initialState = {};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;