import { SYSTEM } from '../type'
import storage from '../storage'

let query = {
  username: 'loginname|1001|xueyufei',
  password: 'xyf.3342',
}

// 模拟用户信息
export default {
  /**
   * token
   * @returns {{type: *}}
   */
  loadToken(option = query) {
    return async dispatch => {
      storage.remove('system.token')
      const token = await storage.load('system.token', {data: option})
      // console.log('-------------------')
      // storage.remove('user')

      dispatch({
        type: SYSTEM.TOKEN,
        data: token,
      })
      return token
    }
  },

  /**
   * 病种
   * @returns {{type: *}}
   */
  illnessList(path) {
    return async dispatch => {
      const data = await storage.load('system.illnessList', { path })
      // console.log('-------------------')
      // storage.remove('user')

      dispatch({
        type: SYSTEM.ILLNESS_LIST,
        data: data.Data,
      })
      return data.Data
    }
  },

  // 病种 { 列表 }
  getPositionList(path) {
    return async dispatch => {
      const data = await storage.load('system.positionList', { path })

      dispatch({
        type: SYSTEM.POSITION_LIST,
        data: data.Data,
      })
      return data.Data
    }
  },

  // 症状 { 列表 }
  getSymptomList(path) {
    return async dispatch => {
      const data = await storage.load('system.symptomList', { path })

      console.log(data)
      dispatch({
        type: SYSTEM.SYMPTOM_LIST,
        data: data.Data,
      })
      return data.Data
    }
  },

  // 病理病程 { 列表 }
  getCourseOfDiseaseList(path) {
    return async dispatch => {
      const data = await storage.load('system.courseDiseaseList', { path })

      dispatch({
        type: SYSTEM.COURSE_DISEASE_LIST,
        data: data.Data,
      })
      return data.Data
    }
  },

  // 并发症 { 列表 }
  getComplicationList(path) {
    return async dispatch => {
      const data = await storage.load('system.complicationList', { path })

      console.log('并发症', data)
      dispatch({
        type: SYSTEM.COMPLICATION_LIST,
        data: data.Data,
      })
      return data.Data
    }
  },


  // 部位 { 列表 }
  getCommonDicList(path) {
    return async dispatch => {
      const data = await storage.load('system.commonDicList', { path })

      dispatch({
        type: SYSTEM.BODY_PARTS_LIST,
        data: data.Data,
      })
      return data.Data
    }
  },





}