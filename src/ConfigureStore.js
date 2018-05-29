import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';

// 导入登录
import loginData from './reducers/login'
// 个人中心
import userMessage from './reducers/user'
// 设置
import userSettingData from './reducers/userSetting'
// 设置
import system from './reducers/system'


// 导入首页
import homeTabCardData from './reducers/home'
// 导入预约挂号
import registration from './reducers/registration'
// 导入电话访谈
import telephoneInterData from './reducers/telephoneInter'
// 咨询
import consultData from './reducers/consult'
// 科室数据
import department from './reducers/department'
// 医院数据
import hospitalMessage from './reducers/hospital'
// 健康指标
import healthIndicatorsData from './reducers/healthIndicators'
// 健康指标
import expert from './reducers/expert'


const user = combineReducers({
  user: userMessage,
  registration,
})


const hospital = combineReducers({
  hospital: hospitalMessage,
  department,
  expert,
})


// 所有页面的数据分发
const rootReducer = combineReducers({ // 将所有的redux处理逻辑包装在一起
  login: loginData,
  user,
  hospital,
  home: homeTabCardData,
  system,
  interview: telephoneInterData,
  userSetting: userSettingData,
  consult: consultData,
  healthIndicators: healthIndicatorsData,

});

// 添加中间件
const storeMiddleware = applyMiddleware(
  thunkMiddleware, // 拆分数据
  createLogger // 打印日志
)(createStore);


export default function configureStore(initialState) {
  return storeMiddleware(rootReducer, initialState)
}
