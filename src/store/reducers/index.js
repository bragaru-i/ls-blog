import { combineReducers } from 'redux';
import posts from './posts';
import article from './article';

const rootReducer = combineReducers({ posts, article });

export default rootReducer;
