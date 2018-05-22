import CreateFetch from './fetch'
import storage from './newStorage'
let url = 'http://47.94.97.210:8011/Common/GetLoginToken?token=&loginName=user%7C0132&psw=a'
let token = {
  token: {
    url,
    func(option) {
      storage.save('token', option)
    }
  },
  index: {
    url,
    func(option) {
      console.log(option)
      storage.save('token', option.Data)
    }
  }
}
export default {
  ...new CreateFetch(token)
}