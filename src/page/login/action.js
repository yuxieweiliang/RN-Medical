import { SYSTEM } from '../../type'
import storage from '../../storage'
import axios from 'axios'

async function getToken() {
  let query = {
    client_id: 'APPClient',
    client_secret: '4FA42C86ED02A2EB905E94F25D359C05',
    username: 'loginname|1001|admin',
    scope: 'offline_access',
    password: 'admin888',
    grant_type: 'password',
  }
  return await storage.load('token', query)
    .then(res => {
      if(res) {
        console.log('登录成功');
      } else {
        console.log('登录失败');
      }
      return res
    })
}
/**
 * 用户登录
 * @returns {function(*)}
 */
function login(option) {

  return async dispatch => {
    dispatch({ type: SYSTEM.LOGIN_BEFORE }); // 正在执行登录请求

    storage.remove('token')
    try {
      const token = await getToken()

      console.log(token)
      if(token) {
        // storage.load('user').then(res => console.log(res))
      }
      /*fetch('http://10.0.0.98:3001/api/ClientUsers/Get/877554311095878178', {
        method: 'GET',
        headers: {
          // 'Accept': '*!/!*',
          'Content-Type': 'application/json; charset=UTF-8',
          'Authorization': "Bearer " + token,
          // 'Content-Type': 'text/plain',
        }
      }).then(res => res.json()).then(res => console.log(res))*/





    }catch(err) {
      console.error(err)
    }
    // storage.remove('token')

    /*storage.load('user', query)
      .then(res => {
        if(res) {
          console.log('登录成功');
          dispatch({ type: SYSTEM.LOGIN_SUCCESS, data: res })
        } else {
          console.log('登录失败');
          dispatch({ type: SYSTEM.LOGIN_FAIL })
        }
        return res
      })*/

  }

}


export default {
  login
}