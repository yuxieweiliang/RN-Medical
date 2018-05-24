class CreateFetch {
  constructor() {
    this.headers = {
      'Content-Type': "application/json; charset=UTF-8"
    }
  }

  post(url, {body, headers = this.headers}) {
    console.log('post: ---\n', url + '\n', body + '\n', headers)
    return fetch(url, {
      method: 'POST',
      headers,
      body,
    })
      .then(this.toJSON)
      .catch(this.catch)
  }

  get(url) {
    console.log('get: ---', url)
    return fetch(url)
      .then(this.toJSON)
      .catch(this.catch)
  }

  toJSON(res) {
    if(res.ok) {
      return res.json()
    } else {
      console.error('response is error', res)
      return res
    }
  }

  catch(error) {
    console.log(error)
    return error
  }
}
export default new CreateFetch()