import * as types from './actionTypes';
import storage from '../../utils/storage'
import { createParams } from '../../utils'
import fetch from '../../utils/fetch'
import { Navigator } from 'react-native-navigation'
import api from '../../url'
import buffer from 'buffer'

const Buffer = buffer.Buffer
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
        type: 'GET_CONSULT_COPY',
        data
      })
    }
  })
}

/**
 * 极光推送
 * @returns {{type}}
 */
export function JPushAlert(userId, expertId) {
  const url = 'https://api.jpush.cn/v3/push'
  const author = new Buffer.from("cb421288cf278b1a3ced70b8:c241a3ef3f786b736b65845c")
  const Authorization = `Basic ${author.toString('base64')}`
  return (async dispatch => {
    let headers = {
      'Connection': 'Keep-Alive',
      'Charset': 'UTF-8',
      'Content-Type': 'application/json',
      Authorization
    }

    let body = JSON.stringify({
      "platform": ["android"],
      "audience": {
        alias: [expertId]
      },
      "notification": {
        "alert": userId,
      },
    })

    console.log({ headers, body })

    return fetch.post(url, { headers, body })
      .then(res => {
      console.log(res)
      return (res.ok !== false)
    })
  })
}

