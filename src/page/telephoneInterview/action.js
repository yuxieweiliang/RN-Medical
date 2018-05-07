import storage from '../../storage'
import { user } from '../../type'

let { TELEPHONE_BEFORE, TELEPHONE_SUCCESS, TELEPHONE_FAIL } = user


/**
 * 用户登录
 * @returns {function(*)}
 */
function interview(option) {

  console.log('电话访谈数据');

  return dispatch => {

    dispatch({ type: TELEPHONE_BEFORE }); // 正在执行登录请求

    storage.load('token', option)
      .then(res => {
        if(res) {
          console.log('登录成功');
          dispatch({ type: TELEPHONE_SUCCESS, data: res })
        } else {
          console.log('登录失败');
          dispatch({ type: TELEPHONE_FAIL })
        }
        return res
      })

  }

}


export default {
  interview
}