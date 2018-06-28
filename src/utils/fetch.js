
class CreateFetch {
  constructor() {
    this.headers = {
      'Content-Type': "application/json; charset=UTF-8"
    }
  }
  async post(url, {body, headers}) {

    if(token) {
      let { token_type, access_token} = global.token
      this.headers.Authorization =  `${token_type} ${access_token}`
    }

    console.log('post: ---\n', url + '\n')
    return fetch(url, {
      method: 'POST',
      headers: Object.assign({}, this.headers, headers ),
      body,
    })
      .then(this.toJSON)
      .catch(this.catch)
  }

  async get(url, headers) {

    if(token) {
      let { token_type, access_token} = global.token
      this.headers.Authorization =  `${token_type} ${access_token}`
    }
    console.log('get: ---', url, Object.assign({}, this.headers, headers ))

    return fetch(url, {
      method: 'GET',
      headers: Object.assign({}, this.headers, headers ),

    })
      .then(this.toJSON)
      .catch(this.catch)
  }

  toJSON(res) {
    if(res.ok) {
      return res.json()
    } else {
      // console.error('response is error', res)
      return res
    }
  }

  catch(error) {
    console.log(error)
    return error
  }
}
export default new CreateFetch()