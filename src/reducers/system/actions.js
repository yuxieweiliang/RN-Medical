import * as types from './actionTypes';
import fetch from '../../utils/fetch'
import storage from '../../utils/storage'
import { createParams } from '../../utils'
import api from '../../url'



/**
 * 预约挂号 { 列表 }
 * @returns {{type}}
 */
export function getRegistration(option) {
  let url = api.getRegistration(option)

  return (dispatch => {
    fetch.get(url)
      .then(function (res) {

        // console.log(res)

        if(res) {
          dispatch({
            type: types.REGISTRATION_LIST,
            data: res.Data
          })
        }
      })
  })
}

/**
 * 病种 { 列表 }
 * @returns {{type}}
 */
export function getDiseaseSpeciesList(option) {
  let url = api.getIllnessList(option)

  return (dispatch => {
    fetch.get(url)
      .then(function (res) {

        console.log(res)

        if(res) {
          dispatch({
            type: types.DISEASE_SPECIES_LIST,
            data: res.Data
          })
        }
      })
  })

}

/**
 * 部位 { 列表 }
 * @returns {{type}}
 */
export function getPositionList(option) {
  let url = api.getCommonDicList(option)

  return (dispatch => {
    fetch.get(url)
      .then(function (res) {

        console.log(res)

        if(res) {
          dispatch({
            type: types.BODY_POSITION_LIST,
            data: res.Data
          })
        }
      })
  })
}

/**
 * 症状 { 列表 }
 * @returns {{type}}
 */
export function getSymptomList(option) {
  let url = api.getSymptomList(option)

  return (dispatch => {
    fetch.get(url)
      .then(function (res) {

        console.log(res)

        if(res) {
          dispatch({
            type: types.SYMPTOM_LIST,
            data: res.Data
          })
        }
      })
  })
}

/**
 * 病理病程 { 列表 }
 * @returns {{type}}
 */
export function getCourseOfDiseaseList(option) {
  let url = api.getCourseOfDiseaseList(option)

  return (dispatch => {
    fetch.get(url)
      .then(function (res) {

        console.log(res)

        if(res) {
          dispatch({
            type: types.PATHOLOGICAL_COURSE_LIST,
            data: res.Data
          })
        }
      })
  })
}

/**
 * 并发症 { 列表 }
 * @returns {{type}}
 */
export function getComplicationList(option) {
  let url = api.getComplicationList(option)

  return (dispatch => {
    fetch.get(url)
      .then(function (res) {

        console.log(res)

        if(res) {
          dispatch({
            type: types.COMPLICATION_LIST,
            data: res.Data
          })
        }
      })
  })
}

/**
 * 查询公共自定义片段
 * @returns {{type}}
 */
export function getCommonDicList(option) {
  let url = api.getCommonDicList(option)

  return (dispatch => {
    fetch.get(url)
      .then(function (res) {

        console.log(res)

        if(res) {
          dispatch({
            type: types.COMPLICATION_LIST,
            data: res.Data
          })
        }
      })
  })
}

/**
 * 健康日报列表
 * start: 从什么时候开始查
 * offSet: 跳过多少个
 * number: 获取多少个（最多50）
 * @returns {{type}}
 */
export function healthDaily(body) {
  let url = api.getListByUser({start: '2018-05-01', offSet: 0, number: 30})

  return (async dispatch => {
    fetch.get(url, { body }).then(res => {
      // 如果失败
      if(res.ok === false) {
        return false
      }

      // 保存成功
      dispatch({type: types.HEALTH_DAILY_LIST, data: res.Data})
      return true
    })
  })
}






