import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import storage from '../../utils/storage'

const data = new Date()
const today = data.toISOString().split('T')[0]
const initialState = Immutable({
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
}


export default (state = initialState, action = {}) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)
