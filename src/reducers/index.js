import { combineReducers } from 'redux';
import books from './books';
import filter from './filter';

const appReducer = combineReducers({ books, filter });

export default appReducer;
