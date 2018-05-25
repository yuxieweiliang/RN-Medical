import createApi from './_createApi'
// 系统
import system from './asynchronous/system'

// 用户
import user from './asynchronous/user'
// 预约挂号
import registration from './asynchronous/registration'
// 咨询
import consult from './asynchronous/consult'
// 体征
import userInfo from './asynchronous/userInfo'
// 部位列表
import position from './asynchronous/position'
// 好友
import friend from './asynchronous/friend'

// 医院
import hospital from './asynchronous/hospital'
// 科室
import department from './asynchronous/department'
// 科室
import expert from './asynchronous/expert'


/**
 * sync方法的名字必须和所存数据的key完全相同
 * 方法接受的参数为一整个object，所有参数从object中解构取出
 * 这里可以使用promise。或是使用普通回调函数，但需要调用resolve或reject
 * @type {{user: ((params))}}
 */
export default {
  // 获取token
  system: createApi({
    ...system,
  }),
  // 用户信息
  user: createApi({
    // 用户
    ...user,
    // 好友
    ...friend,
    // 体征
    ...userInfo,
    // 预约挂号
    ...registration,
    // 咨询
    ...consult,
    // 部位列表
    ...position,
  }),
  hospital: createApi({
    // 医院
    ...hospital,
    // 科室
    ...department,
    // 专家
    ...expert,
  }),
}