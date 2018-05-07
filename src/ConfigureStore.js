import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';

// 导入登录
import loginIn from '../src/page/login/reducer';
// 导入首页
import homeTabCardData from '../src/page/home/reducer';
// 导入预约挂号
import appointmentTabCardData from '../src/page/appointment/reducer';
// 导入电话访谈
import telephoneInterviewData from '../src/page/telephoneInterview/reducer';

// 所有页面的数据分发
const rootReducer = combineReducers({ // 将所有的redux处理逻辑包装在一起

  loginIn: loginIn,
  home: homeTabCardData,
  appointment: appointmentTabCardData,
  interview: telephoneInterviewData,

});

// 添加中间件
const storeMiddleware = applyMiddleware(
  thunkMiddleware, // 拆分数据
  createLogger // 打印日志
)(createStore);


export default function configureStore(initialState) {
  return storeMiddleware(rootReducer, initialState)
}
