// import * as types from '../constants/loginTypes';// 导入事件类型,用来做分配给各个事件
import storage from '../storage'
import { HOSPITAL } from '../type'


// 访问登录接口 根据返回结果来划分action属于哪个type,然后返回对象,给reducer处理
function getDepartmentList(path) {


  return async dispatch => {
    try{
      const departmentList = await storage.load('hospital.departmentList', {path})

      dispatch({
        type: HOSPITAL.DEPARTMENT_LIST,
        data: departmentList.Data
      })

    }catch(error){
      console.error(error)
    }
  }

}



export default {
  getDepartmentList
}