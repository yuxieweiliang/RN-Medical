import storage from '../storage'

function getUser(params) {
  let { id, resolve, reject, syncParams } = params

  return storage.get({
    api: '/api/ClientUsers/Get/877554311095878178',
    ...params
  })
    /*.then(res => {
      let data = res && res.Data
      console.log(res)
      if(data){
        storage.save({key: 'user', data})
        // 根据syncParams中的额外参数做对应处理
        if (syncParams.someFlag) {}

        // 成功则调用resolve
        resolve && resolve(data)

      } else {
        // 失败则调用reject
        reject && reject(new Error('data parse error'))
      }
    })*/
}

export default {
  getUser,
}