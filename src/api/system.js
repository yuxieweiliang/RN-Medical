import storage from '../storage'


function token(params) {
  let { id, resolve, reject, syncParams: { extraFetchOptions, someFlag } } = params

  console.log('get token', extraFetchOptions )
  return storage.get('Common/GetLoginToken?loginName=user|0132&psw=a')
    .then(res => {
      let data = res && res.Data

      console.log('create new token data: ', data)

      if(data){
        storage.save({key: 'token', data})

        if (someFlag) {
          // 根据syncParams中的额外参数做对应处理
          // console.log()
        }

        // 成功则调用resolve
        resolve && resolve(data)

      } else {
        // 失败则调用reject
        reject && reject(new Error('data parse error'))
      }
    }).catch(err => {
    console.warn(err)
    reject && reject(new Error(err))
  })
}


export default {
  token,
}