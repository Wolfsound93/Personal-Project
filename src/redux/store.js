import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import authReducer from './reducers/authReducer';
import tripReducer from './reducers/tripReducer';

const root = combineReducers({
  authReducer,
  tripReducer
});

export default createStore(root, applyMiddleware(promise));
