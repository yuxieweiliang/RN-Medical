'use strict';

// import * as types from '../constants/loginTypes'; // 导入事件类别,用来做事件类别的判断

// 初始状态

const initialState = {
  tabCardData: {
    headerStyle: {
      height: 40,
      backgroundColor: '#fafafa',
    },
    containerStyle: {
      height: 400
    },
    dataSource: [
      {
        active: true,
        title: '生活',
        context: {
          text: 'fdsafda生活生活生活生活sfdsafdsafdsafdsafdsa',
          button: '饮食数据'
        }
      },{
        title: '运动',
        context: {
          text: '运动运动运动运动运动运动运动运动运动运动运动',
          button: '运动参数'
        }
      },{
        title: '体征',
        context: {
          text: '体征体征体征体征体征体征体征体征体征体征',
          button: '体征信息'
        }
      },{
        title: '就医',
        context: {
          text: '就医就医就医就医就医就医就医就医就医就医就医就医就医就医就医就医就医就医',
          button: '就医状况'
        }
      },
    ],
    tabChange(index, item) {
      console.log(index, item)
    }
  },
  status: '点击登录',

  isSuccess: false,

  user: null,

}

const LOGIN_IN_DOING = 'login/正在登陆'
const LOGIN_IN_DONE = 'login/登陆成功'
const LOGIN_IN_ERROR = 'login/登陆失败'


let func = {
  [LOGIN_IN_DOING](state, action) {
    return {
      ...state,
      status: '正在登陆',
      isSuccess: false,
      user: null,
    }
  },
  [LOGIN_IN_DONE](state, action) {
    return {
      ...state,
      status: '登陆成功',
      isSuccess: true,
      user: action.user,
    }
  },
  [LOGIN_IN_ERROR]: (state, action) => ({
  ...state,
  status: '登陆成功',
  isSuccess: true,
  user: action.user,
}),
}

// 不同类别的事件使用switch对应处理过程

export default function loginIn(state=initialState, action) {

  if(func[action.type]) {
    func[action.type].apply(null, arguments)
  } else return state
}
