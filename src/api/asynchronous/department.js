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

  getDepartmentList(params) {
    let {resolve, reject, syncParams } = params
    let url = url.getDepartmentList({hospitalId: 1001})
    return storage.get(url)
      .then(res => save(res, resolve, 'department'))
  },
  getDepartment(params) {
    let {resolve, reject, syncParams } = params
    let url = url.getDepartmentInfo({hospitalId: 1001, deptCode: 2})
    return storage.get(url)
      .then(res => save(res, resolve, 'department'))
  },
}