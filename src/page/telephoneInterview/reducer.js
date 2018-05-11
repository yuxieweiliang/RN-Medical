import { SYSTEM } from '../../type'
const { LOGIN_BEFORE, LOGIN_SUCCESS, LOGIN_FAIL } = SYSTEM


// 初始状态

const initialState = {
  status: '点击登录',
  isSuccess: false,
  user: null,

}

let func = {
  [LOGIN_BEFORE](state, action) {
    return {
      ...state,
      status: '正在登陆',
      isSuccess: false,
      user: null,
    }
  },
}

// 不同类别的事件使用switch对应处理过程

export default function loginIn(state=initialState, action) {

  if(func[action.type]) {
    return func[action.type].apply(null, arguments)
  } else return state
}
