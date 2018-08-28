import * as types from './actionTypes';
import fetch from '../../utils/fetch'
import storage from '../../utils/storage'
import { changeExpert } from '../appointmentConsultation/actions'
import api from '../../url'

/**
 * 医护人员列表
 * @returns {{type}}
 */
export function getExpert(option) {
  let url = api.getExpert(option)

  return (dispatch => {
    fetch.get(url).then(res => {
      // console.log('hospital: ', res)
      if(res) {
        dispatch(changeExpert(res.Data))
       // dispatch({type: types.CHANGE_EXPERT_MESSAGE, data: res.Data})
      }
    })
  })
}

/**
 * 专家列表
 * @returns {{type}}
 */
export function getExportList(option) {
  let url = api.getDoctorList(option)

  return (dispatch => {
    fetch.get(url).then(res => {
      // console.log('hospital: ', res)
      if(res) {
        dispatch({type: types.GET_EXPERT_LIST, data: res.Data})
      }
    })
  })
}
