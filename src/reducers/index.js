import {createStore, applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from 'redux-logger';
import app from './app/reducer';
import system from './system/reducer';
import user from './user/reducer';
import expert from './expert/reducer';
import sign from './sign/reducer';
import hospital from './hospital/reducer';
import consult from './consult/reducer'
import registration from './registration/reducer'
import department from './department/reducer'


const reducer = combineReducers({
  app,
  system,
  user,
  expert,
  hospital,
  sign,
  consult,
  registration,
  department,
});

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  createLogger
)(createStore);
export default createStoreWithMiddleware(reducer);
