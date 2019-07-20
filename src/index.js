import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger'


// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


const responseReducer = (state =[], action) => {
    if (action.type === 'ADD_FEELINGS') {
        return [...state, action.payload]
    } else if (action.type === 'ADD_UNDERSTANDING') {
        return [...state, action.payload]
    } else if (action.type === 'ADD_SUPPORTED') {
        return [...state, action.payload]
    } else if (action.type === 'ADD_COMMENTS') {
        return [...state, action.payload]
    }
    return state;
}


const reduxStore = createStore (
    combineReducers({
        responseReducer
    }),
    applyMiddleware(logger)  
)

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
