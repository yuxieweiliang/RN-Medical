import * as types from './actionTypes';
import storage from '../../utils/storage'
import fetch from '../../utils/fetch'
import api from '../../url'
import moment from 'moment'

/**
 * 根据患者 ID  获取 回执列表
 * @returns {{type}}
 */
export function getReceiptListByPatientId() {
  let url = api.getReceiptListByPatientId()

  return async function(dispatch) {
    fetch.get( url )
      .then(function (res) {
        if(res) {
          console.log(res)
          return true
        }
      })
  }


}

