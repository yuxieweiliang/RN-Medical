import { system } from '../../type'
import storage from '../../storage'
// 模拟用户信息

export default {
  /**
   * 处理异步
   * @returns {{type: *}}
   */
  loadUser() {
    return async dispatch => {
      console.log('-------------------')
      storage.remove('user')
      storage.load('user').then(res => {
        dispatch({
          type: 'USER_MESSAGE',
          data: res,
        })
        console.log(res)
      })
    }
  },
}