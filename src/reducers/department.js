'use strict';
import { DEPARTMENT } from '../type'

// 初始状态
const initialState = {
  // 科室列表
  departmentList: null
}

let func = {
  [DEPARTMENT.LIST_SUCCESS](state, action) {
    console.log(state, action)
    return {
      ...state,
      departmentList: action.data
    }
  },
}

// 不同类别的事件使用switch对应处理过程


export default (state = initialState, action) => (
  func[action.type]
    ? func[action.type].apply(null, arguments)
    : state
)

