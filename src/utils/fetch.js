function toJSON(res) {
  if(res.ok) {
    return res.json()
  } else {
    console.warn('error', res)
    return res
  }
}
function catchError(error) {
  console.warn('error', error)
  return error
}


class CreateFetch {
  constructor() {
    this.headers = {
      'Content-Type': "application/json; charset=UTF-8"
    }
  }

  /**
   * example:
   * fetch.post(
   * 'www.baidu.com',
   * {
   *    headers: {'Content-Type': 'application/json; charset=UTF-8'},
   *    body: {data: 'new message'},
   *  })
   * @param url
   * @param body
   * @param headers
   * @returns {Promise.<*|Promise.<T>>}
   */
  async post(url, {body, headers}) {

    if(global.token) {
      let { token_type, access_token} = global.token
      this.headers.Authorization =  `${token_type} ${access_token}`
    }

    // console.log('post: ---\n', url + '\n', Object.assign({}, this.headers, headers ) , body)
    return fetch(url, {
      method: 'POST',
      headers: Object.assign({}, this.headers, headers ),
      body,
    })
      .then(toJSON)
      .catch(catchError)
  }

  /**
   * example:
   * fetch.get(
   * 'www.baidu.com',
   * {
   *    headers: {'Content-Type': 'application/json; charset=UTF-8'}
   *  })
   * @param url
   * @param headers
   * @returns {Promise.<*|Promise.<T>>}
   */
  async get(url, headers) {

    if(global.token) {
      let { token_type, access_token} = global.token
      this.headers.Authorization =  `${token_type} ${access_token}`
    }
    // console.log('get: ---', url, Object.assign({}, this.headers, headers ))

    return fetch(url, {
      method: 'GET',
      headers: Object.assign({}, this.headers, headers ),

    })
      .then(toJSON)
      .catch(catchError)
  }

  toJSON(res) {
    if(res.ok) {
      return res.json()
    } else {
      return res
    }
  }

  catch(error) {
    console.warn('error', error)
    return error
  }
}
export default new CreateFetch()