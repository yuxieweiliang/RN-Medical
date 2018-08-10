import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  hospitalList: null,
});

const func = {
  // 获取医院列表
  [types.GET_HOSPITAL_LIST](state, action) {
    return state.merge({
      hospitalList: action.data
    });
  },
}


export default (state = initialState, action = {}) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)
