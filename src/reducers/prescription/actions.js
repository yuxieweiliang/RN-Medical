import * as types from './actionTypes';
import fetch from '../../utils/fetch'
import storage from '../../utils/storage'
import { createParams } from '../../utils'
import api from '../../url'

/**
 * 处方 { 列表 }
 * @returns {{type}}
 */
export function getPrescriptionList(option) {
  let url = api.getPrescriptionList(option)

  return (dispatch => fetch.get(url)
    .then(function (res) {

      console.log('PRESCRIPTION_LIST', res)
      if(res) {
        return dispatch({
          type: types.PRESCRIPTION_LIST,
          data: res.Data
        })
      }
    }))
}

/**
 * 处方 { 列表 }
 * @returns {{type}}
 */
export function getPrescriptionOrder(option) {
  let url = api.getPrescriptionList(option)

  return (dispatch => fetch.get(url)
    .then(function (res) {

      console.log('PRESCRIPTION_LIST', res)
      if(res) {
        return dispatch({
          type: types.PRESCRIPTION_LIST,
          data: res.Data
        })
      }
    }))
}

export const prescriptionChange = (data) => ({
  type: types.PRESCRIPTION,
  data,
})
