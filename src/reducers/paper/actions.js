import * as types from './actionTypes';
import storage from '../../utils/storage'
import { createParams } from '../../utils'
import fetch from '../../utils/fetch'
import { Navigator } from 'react-native-navigation'
import api from '../../url'

/**
 * 随访记录
 * @returns {{type}}
 */
export function getPaperList(merchantId = 1001) {
  return (async dispatch => {
    const url = api.getPaperList(merchantId)
    const data = await storage.getItem('consult')

    // console.log('consult', data)
    if(data) {
      dispatch({
        type: types.PAPER_LIST,
        data
      })
    }
  })
}

