import * as types from './actionTypes';
import JPushModule from 'jpush-react-native'
import fetch from '../../utils/fetch'
import storage from '../../utils/storage'
import api from '../../url'
import buffer from 'buffer'
const Buffer = buffer.Buffer;



/**
 * 更改患者 ID
 * @returns {{type}}
 */
export function setPatientId(data) {
  return ({type: types.SET_PATIENT_ID, data})
}

/**
 * 更改专家 ID
 * @returns {{type}}
 */
export function setExpertId(data) {
  return ({type: types.SET_EXPORT_ID, data})
}

/**
 * 修改症状信息
 * @returns {{type}}
 */
export function receiptSymptomChange(data) {
  return ({type: types.RECEIPT_SYMPTOM_CHANGE, data})
}


/**
 * 获取本地缓存中的数据
 * @returns {{type}}
 */
export function initState() {
  return (async dispatch => {
    const department = await storage.getItem('department')
    const expert = await storage.getItem('expert')
    const hospital = await storage.getItem('hospital')

    dispatch({
      type: types.GET_LOCAL_CACHING,
      data: {
        department,
        expert,
        hospital,
      }
    })
  })
}

/**
 * 极光推送
 * @returns {{type}}
 */
/**
 * 极光推送
 * @returns {{type}}
 */
export function JPushAlert(expertId, message) {
  const url = 'https://api.jpush.cn/v3/push';
  const author = new Buffer.from("cb421288cf278b1a3ced70b8:c241a3ef3f786b736b65845c");
  const Authorization = `Basic ${author.toString('base64')}`;
  console.log(expertId, message);

  /**
   * 向 医生 发送 患者 ID
   */
  return (async dispatch => {
    let headers = {
      'Connection': 'Keep-Alive',
      'Charset': 'UTF-8',
      'Content-Type': 'application/json',
      Authorization
    };

    let body = JSON.stringify({
      "platform": ["android"],
      // "audience": "all",
      "audience": {
        alias: [expertId] // 发送给  expert
      },
      /*"notification": {
       "alert": userId,
       },*/
      /*"message": {
       "msg_content": close ? 'close-video' : 'open-video',
       "extras": {
       id: patientId,
       data
       }
       },*/
      message,
    });

    // console.log({ headers, body })

    return fetch.post(url, { headers, body })
      .then(res => {
        // console.log(res)
        return (res.ok !== false)
      })
  })
}
