import storage from '../../storage'
import url from '../url'
import CreateFetch from '../fetch'


let api = new CreateFetch()
export default api.createApi({
  /**
   * 请求角色信息
   * @param params
   * @returns {*|Promise.<TResult>}
   */
  getUser: {
    url: url.getUser,
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
  changeUser: {
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
  deleteUser: {
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
})
