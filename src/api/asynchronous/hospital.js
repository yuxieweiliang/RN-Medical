import storage from '../../storage'
import config from '../../config'
import util from '../../util'
import url from '../url'


export default {
  /**
   * 请求医院列表
   * @param params
   * @returns {*|Promise.<TResult>}
   */
  hospital: {
    url: url.getHospitalInfo,
    save(option) {
      console.log('post:', option.access_token)

      console.log(option, storage)
    },
  },
  /**
   * 请求医院列表
   * @param params
   * @returns {*|Promise.<TResult>}
   */
  hospitalList: {
    url: url.getHospitalList,
    save(option) {
      console.log('post:', option.access_token)

      console.log(option, storage)
    },
  },
}