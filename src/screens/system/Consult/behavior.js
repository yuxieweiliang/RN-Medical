import { system } from '../../type'
import storage from '../../storage'
// 模拟用户信息


/**
 * 处理异步
 * @returns {{type: *}}
 */
function consultLoad() {

  return async dispatch => {
    try{
      let user,  hospital, department
      // storage.remove('user')
      user =  await storage.load('user')
      // console.log(user)

      if(user) {
        hospital = await storage.load('consult')
        // console.log(hospital)
      }

      if(hospital) {
        // department = await storage.load('department', hospital.id)
        // console.log(department)
      }

    }catch(error) {
      // console.log(error)
    }
  }
}





export default {
  consultLoad,
}