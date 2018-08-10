import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  expertList: null,
});

const func = {

  // 获取专家列表
  [types.GET_EXPERT_LIST](state, action) {
    return state.merge({
      expertList: action.data
    });
  },

}


export default (state = initialState, action = {}) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)
