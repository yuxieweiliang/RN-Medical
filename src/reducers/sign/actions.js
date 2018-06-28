import * as types from './actionTypes';
import fetch from '../../../utils/fetch'
import storage from '../../../utils/storage'
import url from '../../../api/url'

/**
 * 添加体征
 * @returns {{type}}
 */
export function postUserInfo() {
  let url = url.postUserInfo()

  fetch.post(url)

  return {type: types.LOGIN};
}

/**
 * 体征
 * @returns {{type}}
 */
export function getUserInfo() {
  let url = url.getUserInfo({id: '877554311095878178'})

  fetch.post(url)

  return {type: types.LOGIN};
}

/**
 * 体征列表
 * @returns {{type}}
 */
export function getUserInfoList() {
  let url = url.getUserInfoList()

  fetch.post(url)

  return {type: types.LOGIN};
}