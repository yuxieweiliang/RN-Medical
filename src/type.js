//////////////////////////////////////////////////////////////// 平台
const system = 'system/'
export const SYSTEM = {
  // 登陆
  LOGIN_BEFORE: `${system}login`,
  LOGIN_SUCCESS: `${system}login/成功`,
  LOGIN_FAIL: `${system}login/失败`,
  // 注册
  REGISTER_SUCCESS: `${system}register/成功`,
  // 首页
  HOME_LOAD_SUCCESS: `${system}home/成功`,
}

//////////////////////////////////////////////////////////////// 用户
const user = 'user/'
export const USER = {
  // 用户信息
  MESSAGE_SUCCESS:  `${user}message/成功`,
}

//////////////////////////////////////////////////////////////// 医院
const hospital = 'hospital/'
export const HOSPITAL = {
  // 医院列表
  LIST_SUCCESS: `${hospital}list/成功`,
}

//////////////////////////////////////////////////////////////// 科室
const department = 'department/'
export const DEPARTMENT = {
  // 科室列表
  LIST_SUCCESS: `${department}list/成功`,
  // 科室信息
  INFO_SUCCESS: `${department}info/成功`,
}

//////////////////////////////////////////////////////////////// 预约
const appointment = 'appointment/'
export const APPOINTMENT = {
  // 医院列表
  TIME_CHANGE: `${appointment}time/改变`,
}

//////////////////////////////////////////////////////////////// 专家
const expert = 'expert/'
export const EXPERT = {
  // 专家列表
  LIST_SUCCESS: `${expert}list/成功`,
}