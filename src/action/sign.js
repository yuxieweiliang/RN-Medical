import { USER } from '../type'
import storage from '../storage'

export default {
  /**
   * 添加体征信息
   * @returns {{type: *}}
   */
  postSign(option) {
    return async dispatch => {
      const data = {
        UserID: "322717145007458",
        TimePoint: "2018-06-12T00:00:00",
        TimePosition: "2018-06-12T00:00:00",
        AddTime: "2018-06-12T00:00:00",
        AddFrom: "app",
        TW: 11,
        TWDesc: "tttt",
        MB: 22,
        MBDesc: "mmmmm",
        XYH: 33,
        XYHDesc: "xxx",
        XYL: 44,
        XYLDesc: "xxxx",
        HX: 55,
        HXDesc: "hhhh",
        XL: 66,
        XLDesc: "xxx",
        XYBHD: 77,
        XYBHDDesc: "xx"
      }
      console.log('-------------------')
      // storage.remove('user')
     const sign = await storage.load('user.postSign', {data: data})

      console.log(sign)
      /*dispatch({
        type: 'SIGN_ITEM_CHANGE',
        data: data,
      })*/
      return sign
    }
  },

  /**
   * 获取体征列表
   * @returns {{type: *}}
   */
  sign(option) {
    return async dispatch => {

      // storage.remove('user')
     const sign = await storage.load('user.sign', {path: {signId: option}})

      console.log(sign)
      /*dispatch({
        type: 'SIGN_ITEM_CHANGE',
        data: data,
      })*/
      return sign
    }
  },

  /**
   * 获取体征列表
   * @returns {{type: *}}
   */
  signList(option) {
    return async dispatch => {

      // storage.remove('user')
     const sign = await storage.load('user.signList', {path: {start: '2018-05-01 12:12:00', end: '2018-05-12 23:59:59'}})

      console.log('sign', sign)
      dispatch({
        type: USER.SIGN_LIST,
        data: sign.Data,
      })
      return sign
    }
  },




}