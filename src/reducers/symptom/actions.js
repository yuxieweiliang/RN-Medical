import * as types from './actionTypes';
import fetch from '../../utils/fetch'
import storage from '../../utils/storage'
import { createParams } from '../../utils'
import api from '../../url'

/**
 * 症状 { 列表 }
 * @returns {{type}}
 */
export function getSymptomList(option) {
  let url = api.getSymptomList(option)

  return (dispatch => {
    fetch.get(url)
      .then(function (res) {

        // console.log(res)

        if(res) {
          dispatch({
            type: types.SYMPTOM_LIST,
            data: res.Data
          })
        }
      })
  })
}

/**
 * 症状 { 列表 }
 * @returns {{type}}
 */
export const symptomChange =  (data)  => {
  storage.setItem('symptom', data)
  return ({
    type: types.SYMPTOM,
    data,
  })
}


