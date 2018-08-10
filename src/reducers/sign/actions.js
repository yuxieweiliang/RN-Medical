import * as types from './actionTypes';
import fetch from '../../utils/fetch'
import storage from '../../utils/storage'
import moment from 'moment'
import api from '../../url'

const today = moment().format('YYYY-MM-DD HH:mm:ss')


/**
 * 添加体征
 * @returns {{type}}
 */
export function postUserInfo(body, user) {
  let url = body.ID ? api.putUserInfo() : api.postUserInfo()
  let data = {
    "UserID": user.UserID,
    "TimePoint": today,
    "TimePosition": today,
    "AddTime": today,
    "AddFrom": "string",
    "TWDesc": "string",
    "MBDesc": "string",
    "XYHDesc": "string",
    "XYLDesc": "string",
    "HXDesc": "string",
    "XLDesc": "string",
    "XYBHDDesc": "string",
    "VShardID": 0,
    "MerchantID": 0,
    "IsDeleted": true
  }

  return (async dispatch => {
    return fetch.post(url, { body: JSON.stringify(Object.assign({}, data, body)) }).then(res => console.log(res))
  });
}

/**
 * 获取单条体征
 * @returns {{type}}
 */
export function getUserInfo() {
  let url = api.getUserInfo({id: '877554311095878178'})

  fetch.get(url)

  // return {type: types.LOGIN};
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

/**
 * 修改体征信息的每一项
 * @param data
 * @returns {{type: string, data: *}}
 */
export function changeSignItem(data) {
  return ({type: types.SIGN_ITEM_CHANGE, data})
}