// import * as types from '../constants/loginTypes';// 导入事件类型,用来做分配给各个事件
// 模拟用户信息

let user = {
  name: 'zhangsan',
  age: 24,
}

// 访问登录接口 根据返回结果来划分action属于哪个type,然后返回对象,给reducer处理

function getHospitalList() {

  console.log('登录方法');

  return dispatch => {
    // storage.remove('hospital')


    /*storage.load('hospital').then((res)=>{

      console.log(res)
      dispatch({
        type: HOSPITAL.LIST_SUCCESS,
        data: res
      })


      }).catch((e)=>{



      })*/

  }

}



export default {
  getHospitalList
}