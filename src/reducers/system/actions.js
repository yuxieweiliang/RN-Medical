import * as types from './actionTypes';
import fetch from '../../utils/fetch'
import storage from '../../utils/storage'
import { createParams } from '../../utils'
import api from '../../url'


/**
 * 病种 { 列表 }
 * @returns {{type}}
 */
export function getIllnessList() {
  let url = api.getIllnessList()

  fetch.post(url)
    .then(function (data) {

  })

  return {type: types.LOGIN};
}

/**
 * 部位 { 列表 }
 * @returns {{type}}
 */
export function getPositionList() {
  let url = api.getPositionList()

  fetch.post(url)
    .then(function (data) {

  })

  return {type: types.LOGIN};
}

/**
 * 症状 { 列表 }
 * @returns {{type}}
 */
export function getSymptomList() {
  let url = api.getSymptomList()

  fetch.post(url)
    .then(function (data) {

  })

  return {type: types.LOGIN};
}

/**
 * 病理病程 { 列表 }
 * @returns {{type}}
 */
export function getCourseOfDiseaseList() {
  let url = api.getCourseOfDiseaseList()

  fetch.post(url)
    .then(function (data) {

  })

  return {type: types.LOGIN};
}

/**
 * 并发症 { 列表 }
 * @returns {{type}}
 */
export function getComplicationList() {
  let url = url.getComplicationList()

  fetch.post(url)
    .then(function (data) {

  })

  return {type: types.LOGIN};
}

/**
 * 并发症
 * @returns {{type}}
 */
export function getCommonDicList() {
  let url = api.getCommonDicList()

  fetch.post(url)
    .then(function (data) {

  })

  return {type: types.LOGIN};
}







