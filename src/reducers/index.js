import { combineReducers } from 'redux';
import books from './books';

const appReducer = combineReducers({ books });

export default appReducer;
