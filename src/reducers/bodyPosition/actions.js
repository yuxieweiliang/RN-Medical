import * as types from './actionTypes';
import fetch from '../../utils/fetch'
import storage from '../../utils/storage'
import { createParams } from '../../utils'
import api from '../../url'


/**
 * 部位 { 列表 }
 * @returns {{type}}
 */
export function getPositionList(option) {
  let url = api.getCommonDicList(option)

  return (dispatch => fetch.get(url)
    .then(function (res) {
      if(res) {
        // console.log(res)
        return dispatch({
          type: types.BODY_POSITION_LIST,
          data: res.Data
        })
      }
    }))
}

/**
 * 修改部位，添加 active 状态， 在列表页显示选中状态 { 列表 }
 * @returns {{type}}
 */
export const changeBodyPositionOfList = (data) => ({
  type: types.CHANGE_BODY_POSITION_OF_LIST,
  data,
})

/**
 * 修改身体部位数据
 * @param data
 */
export const bodyPositionChange = (data) => {
  storage.setItem('bodyPosition', data)
  return ({
    type: types.BODY_POSITION_CHANGE,
    data,
  })
}

