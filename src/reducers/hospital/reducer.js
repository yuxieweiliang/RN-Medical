import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  // 医院信息
  hospital: null,
  // 医院列表
  hospitalList: null,
});

const func = {
  // 获取医院列表
  [types.GET_HOSPITAL_LIST](state, action) {
    return state.merge({
      hospitalList: action.data
    });
  },
  // 更换医院信息
  [types.CHANGE_HOSPITAL_MESSAGE](state, action) {
    return state.merge({
      hospital: action.data
    });
  },
}


export default (state = initialState, action = {}) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)
