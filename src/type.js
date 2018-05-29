//////////////////////////////////////////////////////////////// 平台
const system = 'system/'
export const SYSTEM = {
  TOKEN: `${system}token`,
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
  MESSAGE:  `${user}message/成功`,
  MESSAGE_CHANGE:  `${user}message/修改`,
  // 预约挂号列表
  REGISTRATION:  `${user}registration/成功`,
  REGISTRATION_NEW:  `${user}预约挂号/新建`,
  REGISTRATION_LIST:  `${user}预约挂号/列表`,
}

//////////////////////////////////////////////////////////////// 医院
const hospital = '医院/'
export const HOSPITAL = {
  MESSAGE: `${hospital}信息`,
  // 医院列表
  LIST_SUCCESS: `${hospital}列表`,
  // 科室 ExpertList
  DEPARTMENT: `${hospital}科室`,
  DEPARTMENT_LIST: `${hospital}科室/列表`,

  EXPERT: `${hospital}专家`,
  EXPERT_LIST: `${hospital}专家/列表`,
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