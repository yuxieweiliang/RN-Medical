import { system } from '../../type'
import storage from '../../storage'
let { beforeLogin, Login, afterLogin } = system


/**
 * 用户登录
 * @returns {function(*)}
 */
function login(option) {

  console.log('登录方法');

  return dispatch => {

    dispatch({ type: beforeLogin }); // 正在执行登录请求

    storage.load('token', option)
      .then(res => {
        if(res) {
          console.log('登录成功');
          dispatch({ type: Login, data: res })
        } else {
          console.log('登录失败');
          dispatch({ type: afterLogin })
        }
        return res
      })

  }

}


export default {
  login
}