import storage from '../storage'
import config from '../config'
import util from '../util'
import api from './url'


export default {
  /**
   * 请求医院列表
   * @param params
   * @returns {*|Promise.<TResult>}
   */
  getHospital(params) {
    let {resolve, reject, syncParams } = params
    let url = api.getHospitalList()
    console.log('getHospitalList', url);
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
  }
}