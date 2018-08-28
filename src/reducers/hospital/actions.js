import * as types from './actionTypes';
import fetch from '../../utils/fetch'
import storage from '../../utils/storage'
import api from '../../url'
import { changeHospital } from '../appointmentConsultation/actions'

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









