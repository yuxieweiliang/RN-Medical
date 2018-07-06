import Toast from 'react-native-simple-toast'
import * as types from './actionTypes';
import fetch from '../../utils/fetch'
import buffer from 'buffer'
import storage from '../../utils/storage'
import api from '../../url'

/**
 * 获取角色信息
 * @returns {{type}}
 */
export function getUser() {
  let Buffer = buffer.Buffer
  let access_token = global.token.access_token
  let start = access_token.indexOf('.') + 1, end = access_token.lastIndexOf('.')
   let base64Str = new Buffer(access_token.substring(start, end), 'base64').toString()
  let tokenData = JSON.parse(base64Str)
  let url = api.getUser({ id: tokenData.UserID })

  console.log(base64Str)
  return async dispatch => {
    let user = await storage.getItem(`user.${tokenData.UserID}`)

    if(!user) {
      await fetch.get(url).then(res => {
        console.log(res)
        user = res.Data

      })
    }

    console.log('user: ', user)
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