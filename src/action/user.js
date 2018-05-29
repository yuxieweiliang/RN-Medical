import { USER } from '../type'
import storage from '../storage'
// 模拟用户信息
export default {
  /**
   * 处理异步
   * @returns {{type: *}}
   */
  loadUser(id) {
    let option = {path: {id}}

    console.log(this)
    return async dispatch => {
      const user = await storage.load('user.message', option)
      console.log('-------------------', user)
      // storage.remove('user')

      dispatch({
        type: USER.MESSAGE,
        data: user.Data,
      })
      return user.Data
    }
  },
}