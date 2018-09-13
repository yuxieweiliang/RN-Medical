import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import storage from '../../utils/storage'

const data = new Date()
const today = data.toISOString().split('T')[0]
const initialState = Immutable({
  // 科室信息
  department: null,
  // 科室列表
  departmentList: null,

});



const func = {
  // 科室列表
  [types.GET_DEPARTMENT_LIST](state, action) {
    return state.merge({
      departmentList: action.data
    });
  },
  // 更换科室信息
  [types.CHANGE_DEPARTMENT_MESSAGE](state, action) {
    return state.merge({
      department: action.data
    });
  },

}


export default (state = initialState, action = {}) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)
