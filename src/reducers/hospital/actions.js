import * as types from './actionTypes';
import fetch from '../../utils/fetch'
import storage from '../../utils/storage'
import api from '../../url'

/**
 * 获取医院列表
 * @returns {{type}}
 */
export function getHospitalList() {
  let url = api.getHospitalList()

  return (dispatch => {
    fetch.get(url).then(res => {
      // console.log('hospital: ', res)
      if(res) {
        dispatch({type: types.GET_HOSPITAL_LIST, data: res.Data})
      }
    })
  })
}

/**
 * 医院信息 { 获取 }
 * @returns {{type}}
 */
export function getHospital(option) {
  let url = api.getHospital(option)

  return (dispatch => {
    fetch.get(url).then(res => {
      // console.log('hospital: ', res)
      if(res) {
        // dispatch({type: types.CHANGE_HOSPITAL_MESSAGE, data: res.Data})
        dispatch(changeHospital(res.Data))
      }
    })
  })
}

/**
 * 更换医院信息
 * @param data
 * @returns {{type, data: *}}
 */
export function changeHospital(data) {
  storage.setItem('hospital', data)
  return({ type: types.CHANGE_HOSPITAL_MESSAGE, data })
}

/**
 * 根据医生 id 查询我的患者列表
 * @param hospitalId
 * @param id
 * @returns {function(*)}
 */
export function getPatientListByDoctorId(hospitalId, id) {
  let url = api.getPatientOrDoctorListById({ hospitalId, id })

  return (dispatch => {
    return fetch.get(url)
      .then(res => {
        if(res) {

          console.log('获取患者列表: ', res)

          dispatch({type: types.GET_PATIENT_LIST, data: res.Data})
          return true
        } else {
          return false
        }
      })
  })
}
// 网易 会话列表
export function conversationList(data) {
  return({
    type: types.CONVERSATION_LIST,
    data
  })
}
// 网易 会话列表
export function friendsList(data) {
  return({
    type: types.FRIENDS_LIST,
    data
  })
}
/**
 * 医护人员列表
 * @returns {{type}}
 export function getHospitalDoctor() {
  let url = api.getHospitalDoctor()

  fetch.get(url)

  return {type: types.LOGIN};
}

 * 专家详细信息
 * @returns {{type}}

 export function getDepartmentDoctorList() {
  let url = api.getDepartmentDoctorList()

  fetch.post(url)

  return {type: types.LOGIN};
}
 */









