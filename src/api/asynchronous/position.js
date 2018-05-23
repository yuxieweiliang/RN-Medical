import storage from '../../storage'
import url from '../url'

function save(res, resolve, key) {
  let data = res && res.Data
  console.log(res)
  if(data){
    storage.save(key, data)
    // 成功则调用resolve
    resolve && resolve(data)
  }
}


export default {
  /**
   * 请求角色信息
   * @param params
   * @returns {*|Promise.<TResult>}
   */
  getPositionList(params) {
    let {resolve, reject, syncParams } = params
    let url = url.getPositionList({start: '2017-05-10 00:00', end: '2017-05-15 : 23:59'})
    return storage.get(url)
      .then(res => save(res, resolve, 'consult'))
  }
}