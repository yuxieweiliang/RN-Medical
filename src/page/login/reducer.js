import { login } from '../../type'

// 初始状态

const initialState = {
  status: '点击登录',

  isSuccess: false,

  user: null,

}

let func = {
  ['LOGIN_BEFORE'](state, action) {
    return {
      ...state,
      status: '正在登陆',
      isSuccess: false,
      user: null,
    }
  },
  ['LOGIN_SUCCESS'](state, action) {
    return {
      ...state,
      status: '登陆成功',
      isSuccess: true,
      user: action.user,
    }
  },
  ['LOGIN_FAIL']: (state, action) => ({
    ...state,
    status: '登陆成功',
    isSuccess: true,
    user: action.user,
  }),
}

// 不同类别的事件使用switch对应处理过程

export default function loginIn(state=initialState, action) {
  console.log(action)

  if(func[action.type]) {
    func[action.type].apply(null, arguments)
  } else return state
}
