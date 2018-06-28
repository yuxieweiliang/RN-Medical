import * as types from './actionTypes';
import storage from '../../utils/storage'
import { createParams } from '../../utils'
import fetch from '../../utils/fetch'
import { Navigator } from 'react-native-navigation'
import api from '../../url'

export function appInitialized() {
  return async function(dispatch, getState) {
    let token = await storage.getItem('system.token')
    // since all business logic should be inside redux actions
    // this is a good place to put your app initialization code
    if(token) {
      global.token = token
      dispatch({type: types.ROOT_CHANGED, data: 'home'});
    } else {
      dispatch({type: types.ROOT_CHANGED, data: 'login'});
    }
  };
}

/**
 * 登录
 * @returns {{type}}
 */
export async function login(data) {
  let url = api.getToken()
  let option = {
    headers: {
      'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: createParams({
      ...data,
      client_id: 'APPClient',
      client_secret: '4FA42C86ED02A2EB905E94F25D359C05',
      scope: 'offline_access',
      grant_type: 'password',
    })
  }

  // 清除token
  // storage.clear()

  try{
    let token = await storage.getItem('system.token')

    if(!token) {
      token = await fetch.post(url, option)
    }

    global.token = token
    storage.setItem('system.token', token)
    return true
  }catch(error) {
    console.log(error)
    return false
  }
}

