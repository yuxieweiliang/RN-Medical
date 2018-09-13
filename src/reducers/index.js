import {createStore, applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from 'redux-logger';
import app from './app/reducer';
import bodyPosition from './bodyPosition/reducer';
import consult from './consult/reducer'
import complication from './complication/reducer';
import department from './department/reducer'
import dailyHealthReport from './dailyHealthReport/reducer';
import diseaseSpecies from './diseaseSpecies/reducer';
import prescription from './prescription/reducer';
import expert from './expert/reducer';
import hospital from './hospital/reducer';
import pathological from './pathological/reducer';
import patient from './patient/reducer';
import registration from './registration/reducer'
import receipt from './receipt/reducer'
import signTrend from './signTrend/reducer';
import symptom from './symptom/reducer';
import system from './system/reducer';


const reducer = combineReducers({
  app,
  bodyPosition,
  consult,
  complication,
  department,
  dailyHealthReport,
  diseaseSpecies,
  prescription,
  expert,
  hospital,
  pathological,
  patient,
  registration,
  receipt,
  signTrend,
  symptom,
  system,
});

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  createLogger
)(createStore);
export default createStoreWithMiddleware(reducer);
