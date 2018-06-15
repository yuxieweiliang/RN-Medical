import kee from '../fetch'
import util from '../util'
import url from '../url'

export default {
  post: {
    system: {
      // token
      token(option) {
        let body = util.createParams({
          ...option.data,
          client_id: 'APPClient',
          client_secret: '4FA42C86ED02A2EB905E94F25D359C05',
          scope: 'offline_access',
          grant_type: 'password',
        })

        return kee.post(url.getToken(), {
          headers: {
            'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"
          },
          body
        })
      },
    }
  }
}
