import {createStore, applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from 'redux-logger';
import app from './app/reducer';
import system from './system/reducer';
import user from './user/reducer';
import expert from './expert/reducer';
import sign from './sign/reducer';


const reducer = combineReducers({
  app,
  system,
  user,
  expert,
  sign,
});

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  createLogger
)(createStore);
export default createStoreWithMiddleware(reducer);