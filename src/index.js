import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger'


// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Array for payload objects to be pushed into
let responses = [];

// Feelings reducer returns feelings response into responses array 
// if action.type is for new feedback, return an empty array to start fresh for new feedback
const feelingsResponseReducer = (state = responses, action) => {
    if (action.type === 'ADD_FEELINGS') {
        return action.payload
    } else if (action.type === 'NEW_FEEDBACK') {
        return []
    }
    return state;
}

// Feelings reducer returns feelings response into responses array 
// if action.type is for new feedback, return an empty array to start fresh for new feedback\
const understandingResponseReducer = (state = responses, action) => {
    if (action.type === 'ADD_UNDERSTANDING') {
    return action.payload
    } else if (action.type === 'NEW_FEEDBACK') {
    return []
    }
    return state;
}

// Supported reducer returns Supported response into responses array 
// if action.type is for new feedback, return an empty array to start fresh for new feedback
const supportedResponseReducer = (state = responses, action) => {
    if (action.type === 'ADD_SUPPORTED') {
    return action.payload
    } else if (action.type === 'NEW_FEEDBACK') {
    return []
    }
    return state;
}

// Comments reducer returns Comments response into responses array 
// if action.type is for new feedback, return an empty array to start fresh for new feedback
const commentsResponseReducer = (state = responses, action) => {
    if (action.type === 'ADD_COMMENTS') {
    return action.payload
    } else if (action.type === 'NEW_FEEDBACK') {
    return []
    }
    return state;
}

// Declare redux store using combineReducers (to be accesses in each component)
const reduxStore = createStore (
    combineReducers({
        feelingsResponseReducer,
        understandingResponseReducer,
        supportedResponseReducer,
        commentsResponseReducer,
    }),
    applyMiddleware(logger)  
)

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
