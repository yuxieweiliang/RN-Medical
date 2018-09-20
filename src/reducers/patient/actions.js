import Toast from 'react-native-simple-toast'
import * as types from './actionTypes';
import fetch from '../../utils/fetch'
import storage from '../../utils/storage'
import api from '../../url'
import { getToken } from '../../utils/_utils'



/**
 * 获取角色信息
 * @returns {{type}}
 */
export function getPatient() {
  let tokenData = getToken(global.token.access_token)
  let url = api.getHospitalPatient({ hospitalId: tokenData.MID, id: tokenData.UserID })
  return async dispatch => {
    let user = await storage.getItem(`patient`)

    if(!user) {
      user = await fetch.get(url).then(res => res.Data)
    }

    if(user) {
      storage.setItem(`patient`, user)
      dispatch({type: types.GET_USER_MESSAGE, data: user})
    } else {
      Toast.show('用户信息不存在，是否为医生端用户！')
    }
  }
}

/**
 * 修改角色信息
 * @returns {{type}}
 */
export function saveAndUpdateUser(option) {
  let {Doctors, IsDeleted, VShardID, ...body } = option
  let url = body.ID >= 0 ? api.putUser() : api.postUser()
  return (async dispatch => {
    let user = await storage.getItem(`patient`)
    console.log(body)
    fetch[body.ID >= 0 ? 'put': 'post'](url, { body: JSON.stringify(body) }).then(res => {
      console.log(res)
      // 如果失败
      if(res.ok === false) {
        return false
      }

      storage.setItem(`patient`, {...user, ...res.Data})
      // 保存成功
      dispatch({type: types.GET_USER_MESSAGE, data: res.Data})
      return true
    })

  })
}

/**
 * 咨询随访列表
 * paperType 表单类型，如：1：慢病随访记录、2：咨询确认单
 * @returns {{type}}
 */
/*export function fullList(body) {
  let url = api.getFullListByUser({start: '2018-06-06', end: '2018-08-08', paperType: '慢病随访记录'})

  return (async dispatch => {

    if(0 === 0) {
      return;
    }
    fetch.get(url, { body }).then(res => {
      // 如果失败
      if(res.ok === false) {
        return false
      }

      // 保存成功
      dispatch({type: types.SAVE_USER_MESSAGE_SUCCESS})
      return true
    })
  })
}*/

/**
 * 电话随访列表
 * paperType 表单类型，如：1：慢病随访记录、2：咨询确认单
 * @returns {{type}}
 */
export function paperList(body) {
  let url = api.getByPaperId({paperId: '电话随访', userId: '2018-08-08'})

  return (async dispatch => {

    if(0 === 0) {
      return;
    }
    fetch.get(url, { body }).then(res => {
      // 如果失败
      if(res.ok === false) {
        return false
      }

      // 保存成功
      dispatch({type: types.SAVE_USER_MESSAGE_SUCCESS})
      return true
    })
  })
}


/**
 * 用户随访
 * start
 * offSet
 * number
 * @returns {{type}}
 */
export function getPaperDetail(option) {
  let url = api.getPaperDetail(option)

  return (async dispatch => {

    fetch.get(url).then(res => {

      // console.log('****************||||||||||| ', res)
      // 如果失败
      if(res.ok === false) {
        return false
      }

      // 保存成功
      dispatch({type: types.SAVE_USER_MESSAGE_SUCCESS})
      return true
    })
  })
}


/**
 * 根据 类型 获取报表
 * start
 * offSet
 * number
 * @returns {{type}}
 */
export function getTemplateByType(option) {
  let url = api.getTemplateByType(option)

  return (async dispatch => {

    fetch.get(url).then(res => {

      // console.log('****************||||||||||| ', res)
      // 如果失败
      if(res.ok === false) {
        return false
      }

      // 保存成功
      dispatch({type: types.SAVE_USER_MESSAGE_SUCCESS})
      return true
    })
  })
}

/**
 * 上传证件照
 * start
 * offSet
 * number
 * @returns {{type}}
 */
export function userCredentials(image) {
  let url = api.uploadUserCredentials()

  let body = new FormData();
  let file = { uri: image.path, type: "multipart/form-data", name: "image.png" };
  body.append("imgFile", file);

  return (async dispatch => {

    fetch.post(url,
      {
        body,
        headers: {
          'Content-Type': 'multipart/form-data;charset=utf-8',
        }
      }).then(res => {




      // 如果失败
      if(res.ok === false) {
        return false
      }

      // 图片地址
      // http://fileserver.api.koenn.cn:81/UploadImages/UserCredentials/2018/07-17/322717145007458/408eb95a-b8ed-4b91-be42-62cf8bb5b5b5.png
      // console.log(res)
      // 保存成功
      dispatch({type: types.SAVE_USER_MESSAGE_SUCCESS})
      return true
    })
  })
}


/**
 * 上传用户头像
 * start
 * offSet
 * number
 * @returns {{type}}
 */
export function postUserPortrait(path) {
  let url = api.postUserPortrait()

  let body = new FormData();
  let file = { uri: path, type: "multipart/form-data", name: "image.png" };
  body.append("imgFile", file);

  return (async dispatch => {

    return fetch.post(url,
      {
        body,
        headers: {
          'Content-Type': 'multipart/form-data;charset=utf-8',
        }
      }).then(res => {

      console.log('图片上传成功: ', res)
      // 如果失败
      if(res.ok === false) {
        return false
      }

      // 图片地址
      // http://fileserver.api.koenn.cn:81/UploadImages/UserCredentials/2018/07-17/322717145007458/408eb95a-b8ed-4b91-be42-62cf8bb5b5b5.png
      // console.log('图片地址', res)
      // 保存成功
      return res.Data
    })
  })
}
