import * as types from './actionTypes';
import fetch from '../../utils/fetch'
import storage from '../../utils/storage'
import api from '../../url'

/**
 * 医护人员列表 {hospitalId}/{userId}
 * @returns {{type}}
 */
export function getExpert(userId, hospitalId) {
  let url = api.getExpert({hospitalId, userId})

  return (async dispatch => {
    let expert
    // 首先查看本地是否保存
    try{
      expert = await storage.getItem('expert')
      if(expert) {
        dispatch(changeExpert(expert))
        return expert
      }
    }catch (error) {
      console.log(error)
    }

    // 如果本地不存在
    try{
      expert = await fetch.get(url)
      if(expert) {
        dispatch(changeExpert(expert.Data))
        return expert.Data
      }
    }catch (error) {
      console.log(error)
    }
    /*return fetch.get(url).then(res => {
     console.log('expert: ', res)
     if(res) {
     // console.log(res)

     dispatch(changeExpert(res.Data))

     // dispatch({type: types.CHANGE_EXPERT_MESSAGE, data: res.Data})
     return res.Data
     }
     })*/
  })
}

/**
 * 专家列表
 * @returns {{type}}
 */
export function getExportList(option) {
  let url = api.getDoctorList(option)

  return (dispatch => {
    fetch.get(url).then(res => {
      // console.log('hospital: ', res)
      if(res) {
        dispatch({type: types.GET_EXPERT_LIST, data: res.Data})
      }
    })
  })
}

/**
 * 更改专家
 * @returns {{type}}
 */
export function changeExpert(data) {
  storage.setItem('expert', data)
  return ({type: types.CHANGE_EXPERT_MESSAGE, data})
}


/**
 * 添加医患关系
 * @returns {{type}}
 */
export function addRelationshipForDoctorAndPatient(body) {
  let url = api.addRelationshipForDoctorAndPatient()

  return (dispatch => {
    fetch.post(url, { body })
      .then(res => {
        // console.log('hospital: ', res)
        if(res) {
          // dispatch({type: types.GET_EXPERT_LIST, data: res.Data})
        }
      })
  })
}
