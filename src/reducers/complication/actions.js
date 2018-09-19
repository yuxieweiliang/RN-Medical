import * as types from './actionTypes';
import fetch from '../../utils/fetch'
import storage from '../../utils/storage'
import { createParams } from '../../utils'
import api from '../../url'




/**
 * 并发症 { 列表 }
 * @returns {{type}}
 */
export function getComplicationList(hospitalId, positionCode, symptomCode, complicationCode) {
  let url = api.getComplicationList({
    hospitalId,
    clayCode: 'man',
    positionCode,
    symptomCode,
    complicationCode
  })

  return (dispatch => {
    fetch.get(url)
      .then(function (res) {

        // console.log(res)

        if(res) {
          dispatch({
            type: types.COMPLICATION_LIST,
            data: res.Data
          })
        }
      })
  })
}

export const complicationChange = (data) => {
  storage.setItem('complication', data)
  return ({
    type: types.COMPLICATION,
    data,
  })
}
