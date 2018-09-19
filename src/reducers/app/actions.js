import Toast from 'react-native-simple-toast'
import { NimSession } from 'react-native-netease-im';
import Icon from 'react-native-vector-icons/FontAwesome'
import buffer from 'buffer'
import * as types from './actionTypes';
import storage from '../../utils/storage'
import { createParams, randomString, establishUsnPsw } from '../../utils'
import fetch from '../../utils/fetch'
import crypto from '../../utils/crypto'
import api from '../../url'
// 医院
import { changeHospital } from '../hospital/actions'
// 科室
import { changeDepartment } from '../department/actions'
// 专家
import { changeExpert } from '../expert/actions'
// 更换 病种
import { diseaseSpeciesChange } from '../diseaseSpecies/actions'
// 更换 身体部位
import { bodyPositionChange } from '../bodyPosition/actions'
// 更换 症状
import { symptomChange } from '../symptom/actions'
// 更换 病理病程
import { pathologicalChange } from '../pathological/actions'
// 更换 并发症
import { complicationChange } from '../complication/actions'

/**
 * 获取本地缓存中的数据
 * @returns {{type}}
 */
export function initLocalState() {
  return (async dispatch => {
    const diseaseSpecies = await storage.getItem('diseaseSpecies')
    const bodyPosition = await storage.getItem('bodyPosition')
    const symptom = await storage.getItem('symptom')
    const pathological = await storage.getItem('pathological')
    const complication = await storage.getItem('complication')
    const department = await storage.getItem('department')
    const expert = await storage.getItem('expert')
    const hospital = await storage.getItem('hospital')
    // 医院
    if(hospital) dispatch(changeHospital(hospital))
    // 科室
    if(department) dispatch(changeDepartment(department))
    // 专家
    if(expert) dispatch(changeExpert(expert))
    // 更改病种
    if(diseaseSpecies) dispatch(diseaseSpeciesChange(diseaseSpecies))
    // 更改部位
    if(bodyPosition) dispatch(bodyPositionChange(bodyPosition))
    // 更改症状
    if(symptom) dispatch(symptomChange(symptom))
    // 病理病程
    if(pathological) dispatch(pathologicalChange(pathological))
    // 并发症
    if(complication) dispatch(complicationChange(complication))
  })
}
/**
 * APP 用到的图标
 */
export function populateIcons() {
  /**
   * APP 用到的图标
   * homeIcon consultIcon registrationIcon userIcon
   * bars plus search
   */
  let icon = {}
  return new Promise(function (resolve, reject) {
    Promise.all(
      [
        Icon.getImageSource('home', 24),
        Icon.getImageSource('calendar-check-o', 24),
        Icon.getImageSource('phone', 24),
        Icon.getImageSource('user', 24),
      ]
    ).then((values) => {
      icon.home = values[0];
      icon.consult = values[1];
      icon.registration = values[2];
      icon.user = values[3];
      resolve(icon);
    }).catch((error) => {
      // console.log(error);
      reject(error);
    }).done();
  });
}


/**
 * 初始化 APP 状态
 * @returns {Function}
 */
export function appInitialized(router) {

  // storage.clear()
  // storage.removeItem('system.token')
  // 如果调用这个方法的时候，直接传入进来了router 则直接跳转
  if(router) {
    return {type: types.ROOT_CHANGED, data: router};
  }

  /**
   * 首先判断当前是否存在token
   * 如果存在，则直接跳转到首页
   * 否则，我们进入登录页
   */
  return async function(dispatch, getState) {
    let token = await storage.getItem('token')
    let Buffer = buffer.Buffer

    if(token) {
      global.token = token
      let access_token = token.access_token
      let start = access_token.indexOf('.') + 1 , end = access_token.lastIndexOf('.')
      let base64Str = new Buffer(access_token.substring(start, end), 'base64').toString()
      let tokenData = JSON.parse(base64Str)

      // console.log(tokenData)

      NimSession.login(tokenData.UserID, '123456').then((data)=>{
        // console.log('网易登陆， data: ', data)
      },(err)=>{
        console.warn(err);
      })

      dispatch({type: types.ROOT_CHANGED, data: 'app'});
    } else {
      dispatch({type: types.ROOT_CHANGED, data: 'login'});
    }
  };
}

export function exit() {
  storage.removeItem('token')
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



  // console.log(option)
  return (async dispatch => {

    if(!username || !password) {
      Toast.show("用户名或密码不正确！")
      return false
    }

    try{
      await storage.removeItem('token')
      let token = await fetch.post(url, option)

      if(token.ok === false) {
        Toast.show('登录失败，请输入正确的用户名和密码！')
        return false;
      }

      global.token = token
      storage.setItem('token', token)
      dispatch({type: types.ROOT_CHANGED, data: 'app'})
      dispatch({
        type: types.LOGIN,
        data: true
      })

      return true
    }catch(error) {
      storage.removeItem('token')
      Toast.show(error)
      // console.log(error)
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
      storage.setItem(`user`, res.data)

      // 返回用户ID
      return res.data
    } else {

      // 注册失败
      // console.log(res)
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
      // console.log('requestSmsCode', res)
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
  const _url = `https://t6c4p42m.api.lncld.net/1.1/verifySmsCode/${verifyCode}`
  const option = {
    headers: {
      "X-LC-Id": "t6c4P42MQWPQ8pirVPUsqAwL-gzGzoHsz",
      "X-LC-Key": "phkAztA1twOR64YQgfnGwq2H"
    },
    body: JSON.stringify({ mobilePhoneNumber })
  }


  return fetch.post(_url, option)
    .then(res => {
      if(res.ok === false) {
        return false
      }
      // console.log('requestSmsCode', res)
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

    // console.log(checkSum)

    let user = await fetch.post(url, { headers, body: formdata})
    if(!user) {
      // console.log('声网注册失败！')
    }


    dispatch({type: types.ROOT_CHANGED, data: 'UserMessages'})


    return user


  } catch (err) {
    // console.log(err);
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
    // console.log(err);
  }

};