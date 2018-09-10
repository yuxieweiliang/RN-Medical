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
export function postUserInfo(option, user) {
  let url = option.ID ? api.putUserInfo() : api.postUserInfo()
  let body = JSON.stringify(Object.assign({}, {
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
    "XYBHDDesc": "string"
  }, option))

  console.log(body, url)
  return (async dispatch => {
    if(option.ID) {
      return fetch.put(url, { body  }).then(res => console.log(res))
    }
    return fetch.post(url, { body  }).then(res => console.log(res))
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
  let start = moment().add(-7, 'd').format('YYYY-MM-DD HH:mm:ss')
  let end = moment().format('YYYY-MM-DD HH:mm:ss')
  let url = api.getUserInfoList({start: start, end: end})

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
 * 修改体征信息
 * @param data
 * @returns {{type: string, data: *}}
 */
export function changeSign(data) {
  return ({type: types.SIGN_CHANGE, data})
}
/**
 * 修改体征信息的每一项
 * @param data
 * @returns {{type: string, data: *}}
 */
export function changeSignItem(data) {
  return ({type: types.SIGN_ITEM_CHANGE, data})
}