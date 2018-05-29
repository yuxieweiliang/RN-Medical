import { USER } from '../type'
import storage from '../storage'
// 模拟用户信息
export default {
  /**
   * 处理异步
   * @returns {{type: *}}
   */
  getRegistration(path) {
    let option = {path}

    console.log(option)
    return async dispatch => {
      const user = await storage.load('user.registration', option)
      console.log('-------------------')
      // storage.remove('user')

      dispatch({
        type: USER.REGISTRATION_LIST,
        data: user.Data,
      })
    }
  },
  postRegistration() {
    let data = {
      "MerchantID": 1001,
      "IsDeleted": 0,
      "UserID": "322717145007458",
      "Reg_PKStr": "3333333",
      "UserName": "张三",
      "Sex": "男",
      "IDCard": "610115199102273531",
      "PhoneNo": "18691850237",
      "Reg_MerchantID": 1001,
      "Reg_MerchantName": "3333333",
      "Reg_DeptCode": "3333333",
      "Reg_Dept_Name": "3333333",
      "Reg_Doc_UserID": "3333333",
      "Reg_Doc_UserName": "3333333",
      "Reg_Doc_Title": "3333333",
      "Reg_VisitTime": "2018-05-26 12:12:00",
      "Reg_Expense": 12.21,
      "Reg_Status": "3333333",
      "Reg_VisitBanCi": "3333333"
    }

    return async dispatch => {
      const registration = await storage.load('user.changeRegistration', {
        data
      })
      console.log('-------------------')
      // storage.remove('user')

      dispatch({
        type: USER.REGISTRATION_NEW,
        data: registration.Data,
      })
    }
  }
}