import * as types from './actionTypes';
import storage from '../../utils/storage'
import { createParams } from '../../utils'
import fetch from '../../utils/fetch'
import { Navigator } from 'react-native-navigation'
import api from '../../url'

/**
 * 登录
 * @returns {{type}}
 */
export function initState() {
  return (async dispatch => {
    const data = await storage.getItem('consult')

    // console.log('consult', data)
    if(data) {
      dispatch({
        type: 'INIT_STATE',
        data
      })
    }
  })
}

