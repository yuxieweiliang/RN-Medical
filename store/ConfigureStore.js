import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers/index';

const storeMiddleware = applyMiddleware(
  thunkMiddleware, createLogger
)(createStore);


export default function configureStore(initialState) {
  return storeMiddleware(rootReducer, initialState)
}
