import storage from '../../storage'
import util from '../../util'
import url from '../url'
import CreateFetch from '../fetch'

let query = {
  client_id: 'APPClient',
  client_secret: '4FA42C86ED02A2EB905E94F25D359C05',
  scope: 'offline_access',
  grant_type: 'password',
}

let api = new CreateFetch()
export default api.createApi({
  token: {
    url: url.getToken,
    method: 'post',
    createData(data) {
      console.log('createParams', data)
      return util.createParams({
        ...data,
        ...query
      })
    },
    save(option) {
      console.log('post:', option.access_token)

      console.log(option, storage)
      storage.save('token', option).then(res => console.log(res))
    },
  },
})
