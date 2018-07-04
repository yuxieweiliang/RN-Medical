import * as types from './actionTypes';
import fetch from '../../utils/fetch'
import storage from '../../utils/storage'
import { createParams } from '../../utils'
import api from '../../url'


/**
 * 部门信息 { 获取 }
 * @returns {{type}}
 */
export function getDepartment(option) {
  let url = api.getDepartment(option)

  return (dispatch => {
    fetch.get(url)
      .then(function (res) {

        console.log(res)

        if(res) {
          dispatch({
            type: types.DEPARTMENT_MESSAGE,
            data: res.Data
          })
        }
      })
  })
}

/**
 * 部门列表 { 获取 }
 * @returns {{type}}
 */
export function getDepartmentList(option) {
  let url = api.getDepartmentList(option)

  return (dispatch => {
    fetch.get(url)
      .then(function (res) {

        console.log(res)

        if(res) {
          dispatch({
            type: types.DEPARTMENT_LIST,
            data: res.Data
          })
        }
      })
  })
}


