import fetch from './fetch'
import util from './util'
import storage from '../storage'

export default function(option) {
  let _key = ''
  let syncApi = {}
  let syncFunc = {}
  let methods = ['get', 'post', 'put', 'delete']

  function createSyncApi(option) {
    let sync = {}

    function createSync(option) {
      for(let key in option) {
        _key = _key ? _key + '.' + key : key
        if(typeof option[key] === 'function') {
          sync[_key] = option[key]
        } else {
          createSync(option[key])
        }
      }
    }
    createSync(option)
    return sync
  }

  methods.map(item => {
    // 组装api
    syncApi[item] = createSyncApi(option[item])

    // 组装调用函数
    syncFunc[item] = function(key, option) {
      if(typeof syncApi[item][key] === 'function') {
        return syncApi[item][key](option)
      } else {
        console.error(`key ${key} is not find`)
      }
    }
  })

  console.log(option, syncApi, syncFunc)
  return syncFunc
}


