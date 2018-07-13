import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import storage from '../../utils/storage'

const data = new Date()
const today = data.toISOString().split('T')[0]
const initialState = Immutable({
  // 预约时间
  appointTime: today,
  // 科室
  department: null,
  // 专家
  expert: null,
  // 时间段
  timeSlot: null,
  // 预约挂号
  registrationList: null,

});



const func = {
  // 预约挂号
  [types.REGISTRATION_LIST](state, action) {
    return state.merge({
      registrationList: action.data
    });
  },
  change_registration_item(state, action) {
    let data = state.merge({
      [action.data.key]: action.data.value
    });
    storage.setItem('consult', data)

    // console.log('consult', data)
    return data
  }
}


export default (state = initialState, action = {}) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)
