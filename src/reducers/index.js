import { combineReducers } from 'redux';
import bookReducer from './books';

const appReducer = combineReducers({ bookReducer });

export default appReducer;
