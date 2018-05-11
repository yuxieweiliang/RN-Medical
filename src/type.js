function createType(root) {
  return child => root + '/' + child
}

//////////////////////////////////////////////////////////////// 平台
const systemRoot = createType('system')
export const SYSTEM = {
  // 登陆
  LOGIN_BEFORE: systemRoot('login'),
  LOGIN_SUCCESS: systemRoot('login/成功'),
  LOGIN_FAIL: systemRoot('login/失败'),
  // 注册
  REGISTER_BEFORE: systemRoot('register'),
  REGISTER_SUCCESS: systemRoot('register/成功'),
  REGISTER_FAIL: systemRoot('register/失败'),
  // 首页
  HOME_LOAD_BEFORE: systemRoot('home'),
  HOME_LOAD_SUCCESS: systemRoot('home/成功'),
  HOME_LOAD_FAIL: systemRoot('home/失败'),
}

//////////////////////////////////////////////////////////////// 用户
const userRoot = createType('user')
export const USER = {
  // 用户信息
  MESSAGE_BEFORE: userRoot('message'),
  MESSAGE_SUCCESS: userRoot('message/成功'),
  MESSAGE_FAIL: userRoot('message/失败'),
  // 电话访谈
  TELEPHONE_BEFORE: userRoot('telephoneInterview'),
  TELEPHONE_SUCCESS: userRoot('telephoneInterview/成功'),
  TELEPHONE_FAIL: userRoot('telephoneInterview/失败'),
}

//////////////////////////////////////////////////////////////// 医院
const hospitalRoot = createType('hospital')
export const HOSPITAL = {
  // 医院信息
  MESSAGE_BEFORE: userRoot('message'),
  MESSAGE_SUCCESS: userRoot('message/成功'),
  MESSAGE_FAIL: userRoot('message/失败'),
  // 电话访谈
  TELEPHONE_BEFORE: userRoot('telephoneInterview'),
  TELEPHONE_SUCCESS: userRoot('telephoneInterview/成功'),
  TELEPHONE_FAIL: userRoot('telephoneInterview/失败'),
}