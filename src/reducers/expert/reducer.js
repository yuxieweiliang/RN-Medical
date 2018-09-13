import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  // 专家信息
  expert: null,
  // 专家列表
  expertList: null,
});

const func = {

  // 获取专家列表
  [types.GET_EXPERT_LIST](state, action) {
    return state.merge({
      expertList: action.data
    });
  },
  // 更换专家信息
  [types.CHANGE_EXPERT_MESSAGE](state, action) {
    return state.merge({
      expert: action.data
    });
  },


}


export default (state = initialState, action = {}) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)
