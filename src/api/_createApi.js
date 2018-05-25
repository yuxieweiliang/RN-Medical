import fetch from './fetch'
import util from '../util'
import storage from '../storage'



export default function(option) {
  let data = {}

  for(let key in option) {
    createAsyncSave(key, option)
  }

  async function createAsyncSave(key, option) {
    let headers = option[key].headers || {}


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


    data[key] = async function({params, data, path}) {
      // 只有不是获取token的方法才会给headers添加token
      if(key.indexOf('token') < 0) {
        await getToken()
      }

      return new Promise((resolve, reject) => {
        try{
          let url = option[key].url(path)

          // 默认 data 会直接转化为 json 字符串
          let body = JSON.stringify(data)

          // 传入了 data 函数 可以自定义格式
          if(typeof option[key].data === 'function') {
            body = option[key].data(data)
          }

          // 存在查询字符串
          if(params) {
            url += "?" + util.createParams(params)
          }

          // 默认为 get 请求
          let method = (option[key].method !== 'post')
            ? fetch.get(url, headers)
            : fetch.post(url, {body, headers})

          return method.then(res => {
            // 返回一个 Promise 对象
            resolve(res)

            // 将获取的值传回保存方法
            if(typeof option[key].save === 'function') {
              option[key].save(res)
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

  return data
}


