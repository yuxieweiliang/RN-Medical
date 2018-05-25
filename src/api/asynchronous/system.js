import storage from '../../storage'
import util from '../../util'
import url from '../url'

let query = {
  client_id: 'APPClient',
  client_secret: '4FA42C86ED02A2EB905E94F25D359C05',
  scope: 'offline_access',
  grant_type: 'password',
}

export default {
  token: {
    url: url.getToken,
    method: 'post',
    headers: {
      'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"
    },
    data(data) {
      console.log('createParams', data)
      return util.createParams({
        ...data,
        ...query
      })
    },
    save(option) {
      console.log('post:', option.access_token)

      console.log(option, storage)
      storage.save('system.token', option).then(res => console.log(res))
    },
  },
}
