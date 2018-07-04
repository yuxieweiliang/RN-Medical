import * as types from './actionTypes';
import fetch from '../../utils/fetch'
import storage from '../../utils/storage'
import api from '../../url'

/**
 * 医护人员列表
 * @returns {{type}}
 */
export function getHospitalDoctor(option) {
  let url = api.getHospitalDoctor(option)

  return (dispatch => {
    fetch.get(url).then(res => {
      console.log('hospital: ', res)
      if(res) {
        dispatch({type: types.EXPERT_MESSAGE, data: res.Data})
      }
    })
  })
}

/**
 * 专家列表
 * @returns {{type}}
 */
export function getExportList(option) {
  let url = api.getDepartmentDoctorList(option)

  return (dispatch => {
    fetch.get(url).then(res => {
      console.log('hospital: ', res)
      if(res) {
        dispatch({type: types.EXPERT_LIST, data: res.Data})
      }
    })
  })
}


/**
 * 更改专家
 * @returns {{type}}
 */
export function changeExport(option) {
  return ({
    type: types.EXPERT_MESSAGE,
    data: option
  })

}
