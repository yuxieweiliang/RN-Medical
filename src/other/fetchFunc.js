function CreateFetch() {
  this.data = {}
  this.init.apply(this, arguments)
}

CreateFetch.prototype = {
  fetch(key, option) {
    let _this = this
    this.data[key] = function() {
      console.log('url', key)
      return new Promise((resolve, reject) => {
        _this.get(option[key].url).then(res => {
          resolve(res)
          option[key].func(res)
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
  post() {

  },
  get(url, option) {
    console.log('get: ---')
    return fetch(url).then(res => res.json())
  },
}

export default CreateFetch