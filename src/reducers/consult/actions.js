import * as types from './actionTypes';
import storage from '../../utils/storage'
import fetch from '../../utils/fetch'
import api from '../../url'
import moment from 'moment'



/**
 * 获取 视频预约 列表  {hospital}/{patientId}
 * @returns {{type}}
 */
export function getConsultVideoList(hospital, patientId) {
  let url = api.getConsultVideoList({ hospital, patientId })

  return async function(dispatch) {
    return fetch.get( url )
      .then(function (res) {
        if(res) {

          dispatch({
            type: types.CONSULT_VIDE0_LIST,
            data: res.Data
          })
          console.log('视频预约', res)
          return res.Data
        }
      })
  }
}

export function changeConsult(option) {
  return ({
    type: types.CONSULT_VIDE0_MESSAGE,
    data: option
  })

}

