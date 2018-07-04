import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  expert: null,
  expertList: null,
});

const func = {
  [types.EXPERT_MESSAGE](state, action) {
    return state.merge({
      expert: action.data
    });
  },
  [types.EXPERT_LIST](state, action) {
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
