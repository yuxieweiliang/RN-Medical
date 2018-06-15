import fetch from './fetch'
import util from '../util'
import storage from '../storage'

export default function(option) {
  let sync = {}
  let _key = ''
  function createSync(option) {
    for(let key in option) {

      _key = _key ? _key + '.' + key : key

      if(typeof option[key].url === 'function') {
        sync[_key] = createAsyncSave(option[key])
      } else {
        createSync(option[key])
      }

      _key = _key.substring(0, _key.indexOf('.', -1))
    }
  }
  createSync(option)

  function createAsyncSave(option) {
    let headers = option.headers || {}

    /**
     * 给headers添加token
     * 这里保持用户的登陆状态，
     * 如果用户已经登陆，
     * 在token即将过期的时候，重新获取
     * @returns {Promise.<void>}
     */
    async function getToken() {
      const token = await storage.load('system.token'),
        { token_type, access_token} = token

      if(token) {
        headers.Authorization =  `${token_type} ${access_token}`
      }
    }

    return  async function(asyncFunc) {
      const {params, data, path} = asyncFunc
      let url = option.url(path)

      // 只有不是获取token的方法才会给headers添加token
      if(url.indexOf('token') < 0) {
        await getToken()
      }

      // 默认 data 会直接转化为 json 字符串
      let body = JSON.stringify(data)

      // 传入了 data 函数 可以自定义格式
      if(typeof option.data === 'function') {
        body = option.data(data)
      }

      // 存在查询字符串
      if(params) {
        url += "?" + util.createParams(params)
      }

      // 默认为 get 请求
      let method = (option.method !== 'post')
        ? fetch.get(url, headers)
        : fetch.post(url, {body, headers})


      return new Promise((resolve, reject) => {
        try{
          return method.then(res => {
            // 返回一个 Promise 对象
            resolve(res)
            // 将获取的值传回保存方法
            if(typeof option.save === 'function') {
              option.save(res)
            }
          })
        } catch(error) {
          // 错误处理
          console.error(error)
          reject(error)
        }
      })
    }
  }
  return sync
}


