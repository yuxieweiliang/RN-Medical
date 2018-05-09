import { system } from '../../type'
import storage from '../../storage'


/**
 * 用户登录
 * @returns {function(*)}
 */
function login(option) {

  alert('aaaa');

  return dispatch => {

    dispatch({ type: system.LOGIN_BEFORE }); // 正在执行登录请求

    storage.load('token', option)
      .then(res => {
        if(res) {
          console.log('登录成功');
          dispatch({ type: system.LOGIN_SUCCESS, data: res })
        } else {
          console.log('登录失败');
          dispatch({ type: system.LOGIN_FAIL })
        }
        return res
      })

  }

}


export default {
  login
}