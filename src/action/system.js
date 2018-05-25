import { SYSTEM } from '../type'
import storage from '../storage'

let query = {
  username: 'loginname|1001|xueyufei',
  password: 'xyf.3342',
}

// 模拟用户信息
export default {
  /**
   * 处理异步
   * @returns {{type: *}}
   */
  loadToken(option = query) {
    return async dispatch => {
      storage.remove('system.token')
      const token = await storage.load('system.token', {data: option})
      console.log('-------------------')
      // storage.remove('user')

      dispatch({
        type: SYSTEM.TOKEN,
        data: token,
      })
      return token
    }
  },
}