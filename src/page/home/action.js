import { system } from '../../type'
import storage from '../../storage'
// 模拟用户信息

/**
 * 处理同步
 * @returns {{type: *}}
 */
function beforeHomeLoad() {
  return {
    type: system.HOME_LOAD_BEFORE
  }
}

/**
 * 处理异步
 * @returns {{type: *}}
 */
function homeLoad() {

  return dispatch => {

    storage.load('homeLoad').then(res => {

      dispatch({
        type: system.HOME_LOAD_SUCCESS,
        data: res.data
      })

    })
  }
}

/**
 * 处理同步
 * @returns {{type: *}}
 */
function afterHomeLoad() {
  return {
    type: system.HOME_LOAD_FAIL
  }
}

export default {
  beforeHomeLoad,
  homeLoad,
  afterHomeLoad,
}