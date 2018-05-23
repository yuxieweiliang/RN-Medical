import { SYSTEM } from '../../type'
import storage from '../../storage'
// import axios from 'axios'

/**
 * 用户登录
 * @returns {function(*)}
 */
function login(option) {
  let query = {
    username: 'loginname|1001|xueyufei',
    password: 'xyf.3342',
  }

  return async dispatch => {
    // dispatch({ type: SYSTEM.LOGIN_BEFORE }); // 正在执行登录请求

    // storage.remove('system.token')
    // storage.remove('user.info')

    try {
      console.log('remove token------------------------')
      const token = await storage.load('system.token', {data: query})

      if(token) {
        // return storage.load('user.list', {params: {id: '877554311095878178'}})
        // storage.load('changeUser', user).then(res => console.log(res))

        // storage.load('userInfo', user).then(res => console.log(res))
      }

      return 'fffffffffffff'
    }catch(err) {
      console.error(err)
    }

  }

}


export default {
  login
}