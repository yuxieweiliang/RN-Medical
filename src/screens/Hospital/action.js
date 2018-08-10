/*
import { user } from '../../type'
import storage from '../../storage'
import api from '../../api/url'
import { Map } from 'immutable'

export default {
  /!**
   *
   *!/
  loadUser() {
    return async dispatch => {
      console.log('-------------------')
      // storage.remove('user')
      storage.load('user').then(res => {
        dispatch({
          type: 'USER_MESSAGE',
          data: res,
        })
        console.log(res)
      })
    }
  },
  saveUserMessage(option) {
    let url = api.postUser()


    console.log(option)
    return({
      type: 'USER_MESSAGE',
    })
    return async dispatch => {
      const data = {
        IDCard: "6101151999022223232",
        IsDeleted: false,
        MerchantID: 1001,
        Sex: "男",
        ShenGao: "175.6",
        UserID: "322717145007458",
        UserName: "薛育飞",
        VShardID: 548
      }

      if(!UserID)
      storage.post(url, JSON.stringify(data)).then(res => {
        let data = Map(res)
        dispatch({
          type: 'USER_MESSAGE',
          data,
        })


        console.log(data)
      })
      console.log(option)
    }
  }
}*/
