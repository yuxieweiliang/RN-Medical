import Toast from 'react-native-simple-toast'
import { NimSession } from 'react-native-netease-im';
import buffer from 'buffer'
import * as types from './actionTypes';
import storage from '../../utils/storage'
import { createParams, randomString, establishUsnPsw } from '../../utils'
import fetch from '../../utils/fetch'
import crypto from '../../utils/crypto'
import api from '../../url'

/**
 * 初始化 APP 状态
 * @returns {Function}
 */
export function appInitialized(router) {
  // storage.clear()
  // storage.removeItem('system.token')
  if(router) {
    return {type: types.ROOT_CHANGED, data: router};
  }

  return async function(dispatch, getState) {
    let token = await storage.getItem('system.token')
    let Buffer = buffer.Buffer

    if(token) {
      global.token = token
      let access_token = token.access_token
      let start = access_token.indexOf('.') + 1 , end = access_token.lastIndexOf('.')
      let base64Str = new Buffer(access_token.substring(start, end), 'base64').toString()
      let tokenData = JSON.parse(base64Str)

      console.log(tokenData)

      NimSession.login(tokenData.UserID, '123456').then((data)=>{
        console.log('网易登陆， data: ', data)
      },(err)=>{
        console.warn(err);
      })

      dispatch({type: types.ROOT_CHANGED, data: 'home'});
    } else {
      dispatch({type: types.ROOT_CHANGED, data: 'login'});
    }
  };
}

export function exit() {
  storage.removeItem('system.token')
  return ({type: types.ROOT_CHANGED, data: 'login'})
}


/**
 * 登录
 * @param username
 * @param password
 * @returns {*}
 */
export function login(username, password) {
  let url = api.getToken()
  let option = {
    headers: {
      'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: createParams({
      username: 'loginname|1001|' + username,
      password: password, // 'xyf.3342
      client_id: 'APPClient',
      client_secret: '4FA42C86ED02A2EB905E94F25D359C05',
      scope: 'offline_access',
      grant_type: 'password',
    })
  }



  return (async dispatch => {

    if(!username || !password) {
      Toast.show("用户名或密码不正确！")
      return false
    }

    try{
      let token = await storage.getItem('system.token')


      if(!token) {
        token = await fetch.post(url, option)
      }

      if(token.ok === false) {
        Toast.show('登录失败，请输入正确的用户名和密码！')
        return false;
      }

      global.token = token
      storage.setItem('system.token', token)
      dispatch({type: types.ROOT_CHANGED, data: 'home'})
      dispatch({
        type: types.LOGIN,
        data: true
      })

      return true
    }catch(error) {
      storage.removeItem('system.token')
      Toast.show(error)
      console.log(error)
    }
  })
}

/**
 * 注册
 * @param UserName
 * @param Password
 * @param RePassword
 * @param UserType 患者
 * @param RegType loginname | mobilephonepsw
 * @returns {function(*)}
 */
export async function register(
  UserName,
  Password,
  RePassword,
  UserType = '患者',
  RegType = 'mobilephonepsw'
) {
  const option = {
    body: JSON.stringify({
      UserName,
      Password,
      RePassword,
      UserType,
      RegType,
    })
  }

  return fetch.post(api.register, option)
    .then(res => {

    if(res.state === 1 && res.errorMsg === '') {

      // 本地保存用户信息
      storage.setItem(`user.${res.data.userID}`, res.data)

      // 返回用户ID
      return res.data.userID
    } else {

      // 注册失败
      console.log(res)
      return false
    }
  })
}

/**
 * 获取手机验证码
 * @param mobilePhoneNumber
 * @returns {Promise.<void>}
 */
export function requestSmsCode(mobilePhoneNumber) {
  const option = {
    headers: {
      "X-LC-Id": "t6c4P42MQWPQ8pirVPUsqAwL-gzGzoHsz",
      "X-LC-Key": "phkAztA1twOR64YQgfnGwq2H"
    },
    body: JSON.stringify({ mobilePhoneNumber })
  }
  return fetch.post('https://t6c4p42m.api.lncld.net/1.1/requestSmsCode', option)
    .then(res => {
      console.log('requestSmsCode', res)
      return true
    })
}

/**
 * 验证验证码
 * @param verifyCode
 * @param mobilePhoneNumber
 * @returns {Promise.<void>}
 */
export function verifySmsCode(verifyCode, mobilePhoneNumber) {
  const option = {
    headers: {
      "X-LC-Id": "t6c4P42MQWPQ8pirVPUsqAwL-gzGzoHsz",
      "X-LC-Key": "phkAztA1twOR64YQgfnGwq2H"
    },
    body: JSON.stringify({ mobilePhoneNumber })
  }


  return fetch.post(`https://t6c4p42m.api.lncld.net/1.1/verifySmsCode/${verifyCode}`, option)
    .then(res => {
      if(res.ok === false) {
        return false
      }
      console.log('requestSmsCode', res)
      return true
    })
}

/**
 * 网易创建用户ID
 * @param userId
 * @returns {Promise.<void>}
 */
const netEase = 'https://api.netease.im/nimserver/'
export async function registerNetEase(userId) {
  try {
    let url = `${netEase}user/create.action`
    let appKey = '4057e946492159a20b43abac8f8f29d1'
    let appSecret = 'f3b7f88bc393'
    let curTime = (Math.round(Date.now() / 1000)).toString()
    let nonce = randomString(8)
    let str = appSecret + "" + nonce + "" + curTime
    let checkSum = crypto.createHash('sha1').update(str).digest('hex')
    let headers = {
      "Content-Type": "multipart/form-data",
      'Appkey': appKey,
      'Nonce': nonce,
      'CurTime': curTime,
      'CheckSum': checkSum,
    }
    // 注册数据
    let formdata = new FormData()
    formdata.append("accid", userId)
    formdata.append("token", '123456')

    console.log(checkSum)

    let user = await fetch.post(url, { headers, body: formdata})
    if(!user) {
      console.log('声网注册失败！')
    }


    dispatch({type: types.ROOT_CHANGED, data: 'UserMessages'})


    return user


  } catch (err) {
    console.log(err);
  }
}

/**
 * 网易创建用户ID
 * @param userId
 * @param friendId
 * @returns {Promise.<void>}
 */
export function addFriendNetEase(userId, friendId){

  try {
    let url = `${netEase}friend/add.action`
    let appKey = '4057e946492159a20b43abac8f8f29d1'
    let appSecret = 'f3b7f88bc393'
    let curTime = (Math.round(Date.now() / 1000)).toString()
    let nonce = randomString(8)
    let str = appSecret + "" + nonce + "" + curTime
    let checkSum = crypto.createHash('sha1').update(str).digest('hex')
    let formdata = new FormData()

    formdata.append("accid", userId)
    formdata.append("faccid", friendId)
    formdata.append("type", '1')

    /**
     * true:
     * {
     *    code: 200
     * }
     * false:
     * {
     *    code: 414
     *    desc: "check self.username" // 用户名用了 "self.username"
     * }
     */
    return fetch.post(url, {
      headers: {
        "Content-Type": "multipart/form-data",
        'Appkey': appKey,
        'Nonce': nonce,
        'CurTime': curTime,
        'CheckSum': checkSum,
      },
      body: formdata
    })
  } catch (err) {
    console.log(err);
  }

};