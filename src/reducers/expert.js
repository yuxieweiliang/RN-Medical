'use strict';
import { HOSPITAL } from '../type'
// 初始状态

const initialState = {
  // 专家列表
  expert: null,
  // 专家列表
  expertList: null

}

let func = {
  // 专家列表
  [HOSPITAL.EXPERT](state, action) {
    console.log(action)
    return {
      ...state,
      expert: action.data
    }
  },
  // 专家列表
  [HOSPITAL.EXPERT_LIST](state, action) {
    return {
      ...state,
      expertList: action.data
    }
  },
}

// 不同类别的事件使用switch对应处理过程
export default (state = initialState, action) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)
