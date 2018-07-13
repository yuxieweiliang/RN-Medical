import * as types from './actionTypes';
import fetch from '../../utils/fetch'
import storage from '../../utils/storage'
import moment from 'moment'
import api from '../../url'



/**
 * 添加体征
 * @returns {{type}}
 */
export function postUserInfo(body) {
  let url = body.ID ? api.putUserInfo() : api.postUserInfo()

  return (async dispatch => {
    return fetch.post(url, { body })
  });
}

/**
 * 获取单条体征
 * @returns {{type}}
 */
export function getUserInfo() {
  let url = api.getUserInfo({id: '877554311095878178'})

  fetch.get(url)

  return {type: types.LOGIN};
}

/**
 * 体征列表
 * @returns {{type}}
 */
export function getSignList() {
  let start = moment().add(-30, 'days').format('YYYY-MM-DD HH:mm:ss')
  let end = moment().format('YYYY-MM-DD HH:mm:ss')
  let url = api.getUserInfoList({start: '2018-05-01 12:12:00', end: '2018-05-12 23:59:59'})

  // storage.remove('user')
  return (dispatch => {

    fetch.get(url).then(res => {
      if(res) {
        dispatch({type: types.SIGN_LIST, data: res.Data})
      }
    })
  })
}