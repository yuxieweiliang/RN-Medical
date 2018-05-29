// import * as types from '../constants/loginTypes';// 导入事件类型,用来做分配给各个事件
import storage from '../storage'
import { HOSPITAL } from '../type'




export default {
  getExpert(path) {
    return async dispatch => {
      try{
        const expert = await storage.load('hospital.expert', {path})
        dispatch({
          type: HOSPITAL.EXPERT,
          data: expert.Data
        })

      }catch(error){
        console.error(error)
      }
    }

  },
  getExpertList(path) {

    return async dispatch => {
      try{
        const expertList = await storage.load('hospital.expertList', {path})

        dispatch({
          type: HOSPITAL.EXPERT_LIST,
          data: expertList.Data
        })

      }catch(error){
        console.error(error)
      }
    }

  }

}