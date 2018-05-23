import storage from '../storage'
import config from '../config'
import util from '../util'
import api from './url'

let query = {
  client_id: 'APPClient',
  client_secret: '4FA42C86ED02A2EB905E94F25D359C05',
  scope: 'offline_access',
  grant_type: 'password',
}

export default {
  token(params) {
    let { id, resolve, reject, syncParams } = params
    let url = api.getToken()
    if(syncParams) {
      query.username = syncParams.username
      query.password = syncParams.password
    }
    let data = util.createParams(query)

    console.log('remove token------------------------')

    return storage.post(url, data, 'token')
      .then(res => {
        console.log(res)
        if(res.access_token){
          resolve && resolve(res.access_token)
          storage.save('token', res.access_token)
        }
        // return res
      })
  }
}