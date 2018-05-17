'use strict';
import { EXPERT } from '../type'
// 初始状态

const initialState = {
  // 专家列表
  expertList: null

}

let func = {
  [EXPERT.LIST](state, action) {
    console.log(system)
    return {
      ...state,
      status: '正在登陆',
      isSuccess: false,
      user: null,
    }
  },
}

// 不同类别的事件使用switch对应处理过程
export default (state = initialState, action) => (
  func[action.type]
    ? func[action.type].apply(null, arguments)
    : state
)
