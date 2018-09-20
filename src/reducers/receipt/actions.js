import Toast from 'react-native-simple-toast'
import * as types from './actionTypes';
import fetch from '../../utils/fetch'
import storage from '../../utils/storage'
import api from '../../url'
import { getPatient } from '../patient/actions'


/**
 * 根据 咨询ID  获取 当前咨询对应的回执信息
 * @returns {{type}}
 */
export function getReceiptByAdviceId(adviceId) {
  let url = api.getReceiptByAdviceId({ adviceId })

  return async function(dispatch) {
    return fetch.get( url )
      .then(function (res) {
        console.log('获取回执信息', res)
        if(res) {
          return dispatch(changeReceipt(res.Data))
        }
      })
  }
}

/**
 * 根据患者 ID  获取 回执列表
 * @returns {{type}}
 */
export function getReceiptListByPatientId() {
  let url = api.getReceiptListByPatientId()

  return async function(dispatch) {
    return fetch.get( url )
      .then(function (res) {
        console.log('获取回执列表', res)
        if(res) {

          dispatch({
            type: types.RECEIPT_LIST,
            data: res.Data
          })
          return true
        }
      })
  }
}

/**
 * 修改回执信息
 * @returns {{type}}
 */
export function putReceiptByAdviceId(option) {
  let url = api.putReceiptByAdviceId({adviceId: option.adviceId})
  const data = {
    "AdviceID": option.AdviceID,
    "UserID": option.UserID,
    "MerchantName": option.MerchantName,
    "Illness_Code": option.Illness_Code,
    "Illness_Name":option.Illness_Name,
    "DoctorID": option.DoctorID,
    "DoctorName": option.DoctorName,
    "AdviceStatus": '已完成',
    "AdviceScore": 5
  }

  return async function(dispatch) {
    return fetch.put( url, data )
      .then(function (res) {
        console.log('修改回执信息', res)
        if(res) {

          dispatch({
            type: types.RECEIPT_CHANGE,
            data: res.Data
          })
          return true
        }
      })
  }
}

/**
 * 修改当前回执
 * @returns {{type}}
 */
export function changeReceipt(data) {
  return ({
    type: types.RECEIPT_MESSAGE,
    data
  })
}