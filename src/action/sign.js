import { USER } from '../type'
import storage from '../storage'
import moment from 'moment'
export default {
  /**
   * 添加体征信息
   * @returns {{type: *}}
   */
  postSign(option) {
    return async dispatch => {

      const data = {
        ...option,
        UserID: "322717145007458",
        TimePoint: moment().format('YYYY-MM-DD HH:mm:ss'), // 时间点
        TimePosition: moment().format('YYYY-MM-DD HH:mm:ss'), // 时间戳
        AddTime: moment().format('YYYY-MM-DD HH:mm:ss'), // 创建时间
        AddFrom: "app",
        TWDesc: "TW",
        MBDesc: "MB",
        XYHDesc: "XYH",
        XYLDesc: "XYL",
        HXDesc: "HX",
        XLDesc: "XL",
        XYBHDDesc: "XYBHD"
      }
      const sign = await storage.load('user.postSign', {data: data})

      // console.log(sign)
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
  sign(signId) {
    return async dispatch => await storage.load('user.sign', {path: { signId }})
  },

  /**
   * 获取体征列表
   * @returns {{type: *}}
   */
  signList(option) {
    return async dispatch => {

      var start = moment().add(-30, 'days').format('YYYY-MM-DD HH:mm:ss')
      let end = moment().format('YYYY-MM-DD HH:mm:ss')

      // storage.remove('user')
      const sign = await storage.load('user.signList', {
        path: {start: '2018-05-01 12:12:00',
          end: '2018-05-12 23:59:59'
        },
        /*params: {
         names: 'HX,MB,TW,XYL,XYH,XYBHD'
         }*/
      })

      console.log('sign', start,end)
      console.log('sign', sign)
      dispatch({
        type: USER.SIGN_LIST,
        data: sign.Data,
      })
      return sign
    }
  },




}
