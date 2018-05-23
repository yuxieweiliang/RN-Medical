import storage from '../storage'
import util from '../util'
import api from './url'


export default {
  /**
   * 请求角色信息
   * @param params
   * @returns {*|Promise.<TResult>}
   */
  getUser(params) {
    let {resolve, reject, syncParams } = params
    let url = api.getUser({id: '322717145007458'})
    return storage.get(url)
      .then(res => {
        let data = res && res.Data
        console.log(res)
        if(data){
          storage.save('user', data)
          // 成功则调用resolve
          resolve && resolve(data)
        }
      })
  },

  /**
   * 修改角色信息
   * @param params
   * @returns {*|Promise.<TResult>}
   */
  changeUser(params) {
    let {resolve, reject, syncParams } = params
    let url = api.postUser()
    let data = JSON.stringify(syncParams)

    return storage.post(url, data)
      .then(res => {
        let data = res && res.Data
        console.log(res)
        if(data){
          storage.save('user', data)
          // 成功则调用resolve
          resolve && resolve(data)
        }
      })
  },

  /**
   * 修改角色信息
   * @param params
   * @returns {*|Promise.<TResult>}
   */
  deleteUser(params) {
    let {resolve, reject, syncParams } = params
    let url = api.deleteUser()
    let data = JSON.stringify(syncParams)

    return storage.post(url, data)
      .then(res => {
        let data = res && res.Data
        console.log(res)
        if(data){
          storage.save('user', data)
          // 成功则调用resolve
          resolve && resolve(data)
        }
      })
  },
}