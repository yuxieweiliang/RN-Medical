import { system } from '../../type'
import storage from '../../storage'


/**
 * 用户登录
 * @returns {function(*)}
 */
function login(option) {

  console.log(login);

  return dispatch => {

    dispatch({ type: 'LOGIN_BEFORE' }); // 正在执行登录请求

    storage.load('token', option)
      .then(res => {
        if(res) {
          console.log('登录成功');
          dispatch({ type: 'LOGIN_SUCCESS', data: res })
        } else {
          console.log('登录失败');
          dispatch({ type: 'LOGIN_FAIL' })
        }
        return res
      })

  }

}


export default {
  login
}