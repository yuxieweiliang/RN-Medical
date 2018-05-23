import storage from '../storage'
import api from './url'
import util from '../util'


export default {
  /**
   * 获取用户体征
   * @param params
   * @returns {*|Promise.<TResult>}
   */
  getUserInfo(params) {
    let {resolve, reject, syncParams } = params
    let url = api.getUserInfo({id: '877554311095878178'})
    return storage.get(url)
      .then(res => {
        let data = res && res.Data
        console.log(res)
        if(data){
          storage.save('userInfo', data)
          // 成功则调用resolve
          resolve && resolve(data)
        } else {
          reject('error')
        }
      })
  },

  /**
   * 修改用户体征信息
   * @param params
   * @returns {*|Promise.<TResult>}
   */
  changeUserInfo(params) {
    let {resolve, reject, syncParams } = params
    let url = api.postUserInfo({id: '877554311095878178'})
    return storage.get(url)
      .then(res => {
        let data = res && res.Data
        console.log(res)
        if(data){
          storage.save('userInfo', data)
          // 成功则调用resolve
          resolve && resolve(data)
        } else {
          reject('error')
        }
      })
  },
}