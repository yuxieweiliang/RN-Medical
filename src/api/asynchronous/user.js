import storage from '../../storage'
import url from '../url'


export default {
  /**
   * 请求角色信息
   * @param params
   * @returns {*|Promise.<TResult>}
   */
  message: {
    url: url.getUser,
    save(option) {
      storage.save('user.info', option)
    },
  },
  /**
   * 修改角色信息
   * @param params
   * @returns {*|Promise.<TResult>}
   */
  changeMessage: {
    url: url.postUser,
    method: 'post',
    createData(option) {
      let data = JSON.stringify(option)
      console.log('createParams', data)
      return data
    },
    save(option) {
      console.log('post:', option.access_token)
      storage.save('user.info', option).then(res => console.log(res))
    },
  },
  /**
   * 修改角色信息
   * @param params
   * @returns {*|Promise.<TResult>}
   */
  deleteMessage: {
    url: url.deleteUser,
    method: 'post',
    createData(option) {
      let data = JSON.stringify(option)
      console.log('createParams', data)
      return data
    },
    save(option) {
      console.log('post:', option.access_token)
      storage.save('user.info', option).then(res => console.log(res))
    },
  },
}
