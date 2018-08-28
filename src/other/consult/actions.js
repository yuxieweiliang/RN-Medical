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
    const diseaseSpecies = await storage.getItem('diseaseSpecies')
    const bodyPosition = await storage.getItem('bodyPosition')
    const symptom = await storage.getItem('symptom')
    const pathologicalCourse = await storage.getItem('pathologicalCourse')
    const complication = await storage.getItem('complication')
    // console.log('diseaseSpecies', {
      diseaseSpecies,
      bodyPosition,
      symptom,
      pathologicalCourse,
      complication,
    })
    dispatch({
      type: types.GET_LOCAL_CACHING,
      data: {
        diseaseSpecies,
        bodyPosition,
        symptom,
        pathologicalCourse,
        complication,
      }
    })
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

    // console.log({ headers, body })

    return fetch.post(url, { headers, body })
      .then(res => {
      // console.log(res)
      return (res.ok !== false)
    })
  })
}


/**
 * 更改病种
 * @param data
 * @returns {{type, data: *}}
 */
export function diseaseSpeciesChange(data) {
  storage.setItem('diseaseSpecies', data)
  return({type: types.CHANGE_DISEASE_SPECIES, data})
}

/**
 * 更改部位
 * @param data
 * @returns {{type, data: *}}
 */
export function bodyPositionChange(data) {
  storage.setItem('bodyPosition', data)
  return({type: types.CHANGE_BODY_POSITION, data})
}
/**
 * 更改症状
 * @param data
 * @returns {{type, data: *}}
 */
export function symptomChange(data) {
  storage.setItem('symptom', data)
  return({type: types.CHANGE_SYMPTOM, data})
}
/**
 * 病理病程
 * @param data
 * @returns {{type, data: *}}
 */
export function pathologicalCourseChange(data) {
  storage.setItem('pathologicalCourse', data)
  return({type: types.CHANGE_PATHOLOGICAL_COURSE, data})
}
/**
 * 并发症
 * @param data
 * @returns {{type, data: *}}
 */
export function complicationChange(data) {
  storage.setItem('complication', data)
  return({type: types.CHANGE_COMPLICATION, data})
}

