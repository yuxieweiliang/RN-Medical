import * as types from './actionTypes';
import fetch from '../../utils/fetch'
import storage from '../../utils/storage'
import { createParams } from '../../utils'
import api from '../../url'


/**
 * 预约挂号 { 列表 }
 * @returns {{type}}
 */
export function getRegistration(option) {
  let url = api.getRegistration(option)

  return (dispatch => {
    fetch.get(url)
      .then(function (res) {

        // console.log(res)

        if(res) {
          dispatch({
            type: types.REGISTRATION_LIST,
            data: res.Data
          })
        }
      })
  })
}

/**
 * 预约挂号 { 新建 }
 * @returns {{type}}
 */
export function postRegistration(option, body) {
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
  let url = api.postRegistration(option)
  fetch.post(url, { body })
    .then(function (res) {

      console.log(res)

      if(res) {
        return true
      }
    })

}



