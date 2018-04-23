'use strict';

// 初始状态

const initialState = {
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
