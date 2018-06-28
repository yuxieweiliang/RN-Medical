import * as types from './actionTypes';
import fetch from '../../utils/fetch'
import storage from '../../utils/storage'
import api from '../../url'

/**
 * 获取角色信息
 * @returns {{type}}
 */
export function getUser(id) {
  let url = api.getUser({id})
  return (async dispatch => {

    fetch.get(url).then(res => {
      dispatch({type: types.GET_USER_MESSAGE, data: res.Data})
    })
  })
  // storage.save('user.info', option)
}

/**
 * 修改角色信息
 * @returns {{type}}
 */
export function postUser() {
  let url = api.postUser({id: '877554311095878178'})

  fetch.post(url)

  return {type: types.LOGIN};
}

/**
 * 删除角色信息
 * @returns {{type}}
 */
export function deleteUser() {
  let url = api.deleteUser()

  fetch.post(url)

  return {type: types.LOGIN};
}