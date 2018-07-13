import Toast from 'react-native-simple-toast'
import * as types from './actionTypes';
import fetch from '../../utils/fetch'
import storage from '../../utils/storage'
import api from '../../url'
import { getToken } from '../../utils/_utils'



/**
 * 获取角色信息
 * @returns {{type}}
 */
export function getUser() {
  let tokenData = getToken(global.token.access_token)
  let url = api.getUser({ id: tokenData.UserID })

  return async dispatch => {
    let user = await storage.getItem(`user.${tokenData.UserID}`)

    if(!user) {
      await fetch.get(url).then(res => {
        console.log(res)
        user = res.Data

      })
    }

    storage.setItem(`user.${user.UserID}`, user)
    dispatch({type: types.GET_USER_MESSAGE, data: user})

  }
}

/**
 * 修改角色信息
 * @returns {{type}}
 */
export function postUser(body) {
  let url = api.postUser({id: body.UserID})

  return (async dispatch => {

    fetch.post(url, { body }).then(res => {
      // 如果失败
      if(res.ok === false) {
        return false
      }

      // 保存成功
      dispatch({type: types.SAVE_USER_MESSAGE_SUCCESS})
      return true
    })
  })
}
