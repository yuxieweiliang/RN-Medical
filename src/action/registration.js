import { USER } from '../type'
import storage from '../storage'
// 模拟用户信息
export default {
  /**
   * 处理异步
   * @returns {{type: *}}
   */
  getRegistration(path) {
    let option = {path}

    console.log(option)
    return async dispatch => {
      const user = await storage.load('user.registration', option)
      console.log('-------------------')
      // storage.remove('user')

      dispatch({
        type: USER.REGISTRATION_LIST,
        data: user.Data,
      })
    }
  },
}