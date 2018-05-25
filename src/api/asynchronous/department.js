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
   * 科室
   * @param params
   * @returns {*|Promise.<TResult>}
   */
  getDepartment(params) {
    let {resolve, reject, syncParams } = params
    let url = url.getDepartmentInfo({hospitalId: 1001, deptCode: 2})
    return storage.get(url)
      .then(res => save(res, resolve, 'department'))
  },

  /**
   * 科室列表
   * @param params
   * @returns {*|Promise.<TResult>}
   */
  departmentList: {
    url: url.getDepartmentList,
    save(option) {
      console.log('getDepartmentList:', option.access_token)
      // storage.save('system.token', option).then(res => console.log(res))
    },
  },
  /*getDepartmentList(params) {
    let {resolve, reject, syncParams } = params
    let url = url.getDepartmentList()
    return storage.get(url)
      .then(res => save(res, resolve, 'department'))
  },*/
}