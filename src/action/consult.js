import { SYSTEM } from '../type'
import storage from '../storage'

let query = {
  username: 'loginname|1001|xueyufei',
  password: 'xyf.3342',
}
const consult ={
  /**
   * 新建咨询留言
   */
  postAdviceMessage(AdviceID) {
    let data = {
      VShardID: '1001', // 身份证
      MerchantID: '1001', // 医院id
      IsDeleted: 0,
      AdviceID, // 本次咨询的ID
      SessionID: 'fdse232423',
      ReqUserID: '717145500745835', // 咨询的医生的ID
      UserID: '322717145007458',
      UserName: '薛育飞', // 状态
      AddTime: '2018-05-28 12:14',
      MessageContent: 'fdsa状态平分', // 留言内容
      MessageType: 'text', // 留言内容 text || video
      ContentType: 'text', // 留言内容 text || image || voice || video
    }
    return async dispatch => {
      hospital = await storage.load('user.postAdviceMessage', {data})
      console.log()
    }
  },
  /**
   * 查询留言
   */
  getAdviceMessage(path) {

    return async dispatch => {
      let advice = await storage.load('user.adviceMessage', {path})
      console.log(advice)
    }
  },
  /**
   * 新建咨询
   */
  postConsult(UserID) {
    let data = {
      UserID,
      AddTime: '2018-05-28 12:14',
      MerchantName: 'fdsa',
      Illness_Code: 11,
      Illness_Name: 'fdsa',
      DoctorID: 2,
      DoctorName: '李四',
      AdviceStatus: '正常', // 状态
      AdviceScore: 0, // 平分
    }
    return async dispatch => {
      let advice = await storage.load('user.postConsult', {data})

      if(advice) {
        await dispatch(consult.postAdviceMessage(advice.Data.AdviceID))
        console.log(advice)
      }
    }
  },
  /**
   * 处理异步
   * @returns {{type: *}}
   */
  getConsultList(option = query) {
    return async dispatch => {
      try{
        let user,  hospital, adviceMessage

        if(option) {
          consultList = await storage.load('user.consultList', {path: {start: '2018-05-10 00:00:00', end: '2018-06-15  23:59:00'}})
          console.log('consult-consult-consult-consult', hospital)
        }



        if(consultList) {
          let data = consultList.Data[0]
          console.log(data)
          adviceMessage = await dispatch(consult.getAdviceMessage({
            userId: data.UserID,
            adviceId: data.AdviceID,
            messageType: 'text'
          }))
          console.log(adviceMessage)
        }

      }catch(error) {
        console.log(error)
      }
    }
  },
  /**
   * 症状
   * @returns {{type: *}}
   */
  postSymptom(option = query) {
    let data = {
      VShardID: '1001',
      MerchantID: '1001',
      IsDeleted: '0',
      AdviceID: '1001',
      UserID: '1001',
      AddTime: '1001',
      ItemCode: '1001',
      ItemName: '1001',
      ItemType: '1001',
    }
    return async dispatch => {
      try{
        let user,  hospital, adviceMessage

        if(option) {
          consultList = await storage.load('user.postSymptom', {data})
          console.log('consult-consult-consult-consult', hospital)
        }


      }catch(error) {
        console.log(error)
      }
    }
  },
  /**
   * 处理异步
   * @returns {{type: *}}
   */
  getSymptomList(option = query) {
    return async dispatch => {
      try{
        let user,  hospital, adviceMessage

        if(option) {
          consultList = await storage.load('user.symptomList', {path: {userId: '2018', consultId: '2018'}})
          console.log('consult-consult-consult-consult', hospital)
        }


      }catch(error) {
        console.log(error)
      }
    }
  },
}
// 模拟用户信息
export default consult