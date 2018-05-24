import fetch from './fetch'
import util from '../util'

let data = {}
function createAsyncSave(key, option) {
  let headers = option[key].headers

  data[key] = function({params, data, patch}) {

    return new Promise((resolve, reject) => {
      let url = option[key].url(patch)

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
        ? fetch.get(url)
        : fetch.post(url, {body, headers})

      return method.then(res => {
        // 返回一个 Promise 对象
        resolve(res)

        // 将获取的值传回去
        option[key].save(res)
      })
    })
  }
}


export default function(option) {
  data = {}
  for(let key in option) {
    createAsyncSave(key, option)
  }
  return data
}


