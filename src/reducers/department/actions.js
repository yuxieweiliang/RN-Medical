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

        // console.log(res)

        if(res) {
          dispatch(changeDepartment(res.Data))
        }
      })
  })
}

/**
 * 部门列表 { 获取 }
 * @returns {{type}}
 */
export function getDepartmentList(hospitalId) {
  let url = api.getDepartmentList({ hospitalId })

  return (dispatch => {
    fetch.get(url)
      .then(function (res) {

        // console.log(res)

        if(res) {
          dispatch({
            type: types.GET_DEPARTMENT_LIST,
            data: res.Data
          })
        }
      })
  })
}
/**
 * 更换科室信息
 * @param data
 * @returns {{type: *, data: *}}
 */
export function changeDepartment(data) {
  storage.setItem('department', data)
  return ({type: types.CHANGE_DEPARTMENT_MESSAGE, data})
}
