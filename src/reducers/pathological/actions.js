import * as types from './actionTypes';
import fetch from '../../utils/fetch'
import storage from '../../utils/storage'
import { createParams } from '../../utils'
import api from '../../url'

/**
 * 病理病程 { 列表 }
 * @returns {{type}}
 */
export function getPathologicalList(option) {
  let url = api.getPathologicalList(option)

  return (dispatch => fetch.get(url)
    .then(function (res) {

      // console.log(res)
      if(res) {
        return dispatch({
          type: types.PATHOLOGICAL_LIST,
          data: res.Data
        })
      }
    }))
}

export const pathologicalChange = (data) => ({
  type: types.PATHOLOGICAL,
  data,
})
