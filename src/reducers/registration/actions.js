import * as types from './actionTypes';
import storage from '../../utils/storage'
import fetch from '../../utils/fetch'
import api from '../../url'
import buffer from 'buffer'
import { randomString } from '../../utils'
import moment from 'moment'

const Buffer = buffer.Buffer
/**
 * 获取本地缓存中的数据
 * @returns {{type}}
 */
export function initState() {
  return (async dispatch => {
    const diseaseSpecies = await storage.getItem('diseaseSpecies')
    const bodyPosition = await storage.getItem('bodyPosition')
    const symptom = await storage.getItem('symptom')
    const pathologicalCourse = await storage.getItem('pathologicalCourse')
    const complication = await storage.getItem('complication')
    const department = await storage.getItem('department')
    const expert = await storage.getItem('expert')
    const hospital = await storage.getItem('hospital')

    dispatch({
      type: types.GET_LOCAL_CACHING,
      data: {
        diseaseSpecies,
        bodyPosition,
        symptom,
        pathologicalCourse,
        complication,
        department,
        expert,
        hospital,
      }
    })
  })
}

/**
 * 极光推送
 * @returns {{type}}
 */
export function JPushAlert(userId, expertId) {
  const url = 'https://api.jpush.cn/v3/push'
  const author = new Buffer.from("cb421288cf278b1a3ced70b8:c241a3ef3f786b736b65845c")
  const Authorization = `Basic ${author.toString('base64')}`
  console.log(userId, expertId)

  return (async dispatch => {
    let headers = {
      'Connection': 'Keep-Alive',
      'Charset': 'UTF-8',
      'Content-Type': 'application/json',
      Authorization
    }

    let body = JSON.stringify({
      "platform": ["android"],
      // "audience": "all",
      "audience": {
        alias: [userId]
      },
      "notification": {
        "alert": userId,
      },
    })

    // console.log({ headers, body })

    return fetch.post(url, { headers, body })
      .then(res => {
      // console.log(res)
      return (res.ok !== false)
    })
  })
}

/**
 * 预约挂号 { 新建 }
 * @returns {{type}}
 */
export function postRegistration(option) {
  let { appointTime, user, hospital, department, expert } = option
  let url = api.postRegistration()
  let PKStr = randomString(10)
  let Expense = parseInt(Math.random(10) * 1000 * 1000)
  let visitBanCi = moment().add(5).format('YYYY-MM-DD HH:mm:ss')

  let data = {
    MerchantID: 1001, // 人所在的医院，暂时没用，提交 0
    UserID: user.UserID,
    Reg_PKStr: PKStr, // 识别不重复挂号的关键串
    UserName: user.UserName, // 挂号人姓名
    Sex: user.Sex, // 挂号人性别
    IDCard: user.IDCard, // 挂号人身份证
    PhoneNo: "18691850237", // 挂号人电话
    Reg_MerchantID: hospital.MerchantUID, // 挂号医院ID
    Reg_MerchantName: hospital.MerchantName, // 挂号医院名
    Reg_DeptCode: department.Dept_Code, // 挂号科室Code
    Reg_Dept_Name: department.Dept_Name, // 挂号科室名
    Reg_Doc_UserID: expert.UserID, // 挂号医生ID
    Reg_Doc_UserName: expert.UserName, // 挂号医生名
    Reg_Doc_Title: "心内科医生", // 挂号医生职称
    Reg_VisitTime: appointTime, // 挂号时间
    Reg_Expense: Expense, // 挂号费用
    Reg_VisitBanCi: visitBanCi ,// 挂号预约时段
    Reg_Status: "0",
  }

  return async function(dispatch) {
    fetch.post(url, { body: JSON.stringify(data) })
      .then(function (res) {
        if(res) {
          alert('预约成功！')
          return true
        }
      })
  }
}


/**
 * 预约挂号 { 列表 }
 * @returns {{type}}
 */
export function getRegistration(option) {
  let url = api.getRegistration(option)

  return (dispatch => {
    fetch.get(url)
      .then(function (res) {

        // console.log(res)

        if(res) {
          dispatch({
            type: types.REGISTRATION_LIST,
            data: res.Data
          })
        }
      })
  })
}

/**
 * 修改预约挂号时间
 * @returns {{type}}
 */
export function changeRegistrationTime(data) {
  storage.setItem('registration.time', data)
  return({type: types.CHANGE_REGISTRATION_TIME, data})
}
/**
 * 更改病种
 * @param data
 * @returns {{type, data: *}}
 */
export function diseaseSpeciesChange(data) {
  storage.setItem('diseaseSpecies', data)
  return({type: types.CHANGE_DISEASE_SPECIES, data})
}

/**
 * 更改部位
 * @param data
 * @returns {{type, data: *}}
 */
export function bodyPositionChange(data) {
  storage.setItem('bodyPosition', data)
  return({type: types.CHANGE_BODY_POSITION, data})
}
/**
 * 更改症状
 * @param data
 * @returns {{type, data: *}}
 */
export function symptomChange(data) {
  storage.setItem('symptom', data)
  return({type: types.CHANGE_SYMPTOM, data})
}
/**
 * 病理病程
 * @param data
 * @returns {{type, data: *}}
 */
export function pathologicalCourseChange(data) {
  storage.setItem('pathologicalCourse', data)
  return({type: types.CHANGE_PATHOLOGICAL_COURSE, data})
}
/**
 * 并发症
 * @param data
 * @returns {{type, data: *}}
 */
export function complicationChange(data) {
  storage.setItem('complication', data)
  return({type: types.CHANGE_COMPLICATION, data})
}

