import CreateFetch from './fetchFunc'
import storage from './index'
let url = 'http://47.94.97.210:8011/Common/GetLoginToken?token=&loginName=user%7C0132&psw=a'

let api = new CreateFetch()
let system = api.createApi({
  token: {
    url,
    func(option) {
      storage.save('token', option.Data).then(res => console.log(res))
    },
  },
})
let user = api.createApi({
  message: {
    url,
    func(option) {
      console.log(option)
      storage.save('token', option.Data)
    }
  }
})

export default {
  system,
  user,
}