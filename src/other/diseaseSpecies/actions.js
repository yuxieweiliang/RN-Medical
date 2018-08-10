import * as types from './actionTypes';
import fetch from '../../utils/fetch'
import storage from '../../utils/storage'
import { createParams } from '../../utils'
import api from '../../url'


/**
 * 病种 { 列表 }
 * @returns {{type}}
 */
export function getIllnessList(option) {
  let url = api.getIllnessList(option)

  return (dispatch => {
    fetch.get(url)
      .then(function (res) {

        console.log(res)

        if(res) {
          dispatch({
            type: types.ILLNESS_LIST,
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
            type: types.BODY_PARTS_LIST,
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
            type: types.COURSE_DISEASE_LIST,
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
 * 并发症
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







