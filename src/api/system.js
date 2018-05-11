import storage from '../storage'


function token(params) {
  let option = {
    api: '/connect/token',
    ...params
  }

  return storage.post(option)
    .then(res => {

      console.log(res)
      if(res.access_token){

        storage.save('token', res.access_token)
      }
    })
}


export default {
  token,
  homeLoad: token,
}