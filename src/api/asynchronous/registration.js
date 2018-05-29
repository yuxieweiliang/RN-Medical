import storage from '../../storage'
import url from '../url'


export default {
  /**
   * 请求角色预约挂号信息
   * @param params
   * @returns {*|Promise.<TResult>}
   */
  registration: {
    url: url.getRegistration,
    save(option) {
      console.log('post:', option.access_token)

      console.log(option, storage)
    },
  },
  /**
   * 请求角色预约挂号信息
   * @param params
   * @returns {*|Promise.<TResult>}
   */
  changeRegistration: {
    url: url.postRegistration,
    method: 'post',
    /*data(data) {
      console.log('changeRegistration', data)
      return data
    },*/
    save(option) {
      console.log('post:', option.access_token)

      console.log(option, storage)
    },
  },
}