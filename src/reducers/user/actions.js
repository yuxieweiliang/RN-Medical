import Toast from 'react-native-simple-toast'
import * as types from './actionTypes';
import fetch from '../../utils/fetch'
import { b64Decode } from '../../utils'
import storage from '../../utils/storage'
import api from '../../url'

/**
 * 获取角色信息
 * @returns {{type}}
 */
export function getUser() {
  let token = global.token.access_token
  let start = token.indexOf('.') + 1, end = token.lastIndexOf('.')
  let tokenData = JSON.parse(b64Decode(token.substring(start, end)))
  let url = api.getUser({ id: tokenData.UserID })

  return async dispatch => {
    let user = await storage.getItem(`user.${tokenData.UserID}`)

      if(!user) {
        await fetch.get(url).then(res => user = res.Data)
      }

    storage.setItem(`user.${user.UserID}`, user)
    dispatch({type: types.GET_USER_MESSAGE, data: user})

  }
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