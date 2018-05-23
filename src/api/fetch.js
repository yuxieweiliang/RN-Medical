function CreateFetch() {
  this.data = {}
  // this.init.apply(this, arguments)
}

CreateFetch.prototype = {
  fetch(key, option) {
    let _this = this
    this.data[key] = function({params, data}) {

      return new Promise((resolve, reject) => {
        let url = option[key].url(params)
        let _data = option[key].createData(data)

        // 默认为 get 请求
        let method = (option[key].method !== 'post')
          ? _this.get(url)
          : _this.post(url, _data)

        return method.then(res => {
          // 返回一个 Promise 对象
          resolve(res)

          // 将获取的值传回去
          option[key].save(res)
        })
      })
    }
  },
  createApi(option) {
    this.data = {}
    for(let key in option) {
      this.fetch(key, option)
    }
    return this.data
  },
  post(url, data) {
    let headers = {}
    console.log('post url: ', url, data)

    headers['Content-Type'] = "application/x-www-form-urlencoded; charset=UTF-8"

    return fetch(url, {
      method: 'POST',
      headers,
      body: data
    }).then(res => res.json()).then(res => {
      console.log(res)
      return res
    })
  },
  get(url, option) {
    console.log('get: ---', url)
    return fetch(url).then(res => res.json())
  },
}

export default CreateFetch