import buffer from 'buffer'
/*import moment from 'moment';
 require('moment/locale/zh-cn.js');*/

/**
 * 将 token 中的 access_token，解密为json数据
 * @param token
 */
export function getToken(token) {
  let Buffer = buffer.Buffer
  let start = token.indexOf('.') + 1, end = token.lastIndexOf('.')
  let str = new Buffer(token.substring(start, end), 'base64').toString()
  return JSON.parse(str)
}