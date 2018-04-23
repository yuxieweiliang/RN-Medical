import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';

import loginIn from '../src/page/login/reducer'; // 导入登录的redux处理过程
import homeTabCardData from '../src/page/home/reducer'; // 导入登录的redux处理过程

const rootReducer = combineReducers({ // 将所有的redux处理逻辑包装在一起

  loginIn: loginIn,
  home: homeTabCardData,

});


const storeMiddleware = applyMiddleware(
  thunkMiddleware, createLogger
)(createStore);


export default function configureStore(initialState) {
  return storeMiddleware(rootReducer, initialState)
}
