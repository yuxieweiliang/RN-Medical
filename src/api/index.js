import system from './system'

import user from './user'

import userInfo from './userInfo'

import hospital from './hospital'

import department from './department'

import consult from './consult'

import position from './position'

import friend from './friend'


/**
 * sync方法的名字必须和所存数据的key完全相同
 * 方法接受的参数为一整个object，所有参数从object中解构取出
 * 这里可以使用promise。或是使用普通回调函数，但需要调用resolve或reject
 * @type {{user: ((params))}}
 */
const sync = {

  /////////////////////////////////////  用户管理  //////////////////////////////////////
  // 获取token
  token: system.token,
  // 获取用户信息
  user: user.getUser,
  // 修改用户信息
  changeUser: user.changeUser,
  // 删除用户信息
  deleteUser: user.deleteUser,

  // 获取咨询信息
  consult: consult.getConsultList,


  /////////////////////////////////////  用户数据  //////////////////////////////////////
  // 获取用户体征信息
  userInfo: userInfo.getUserInfo,
  changeUserInfo: userInfo.changeUserInfo,

  /////////////////////////////////////  系统  ///////////////////////////////////////////
  // 获取医院列表
  hospital: hospital.getHospital,
  // 获取科室列表
  department: department.getDepartment,
  // 获取科室列表
  departmentList: department.getDepartmentList,
  // 获取部位列表
  position: position.getPositionList,
  // friend
  friend: friend.getFriendList
}


export default sync