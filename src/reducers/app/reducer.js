import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  root: undefined, // 'login' / 'after-login'
  login: undefined, // boolean
});

const func = {
  [types.LOGIN](state, action) {
    return state.merge({
      login: action.data
    });
  },
  [types.ROOT_CHANGED](state, action) {
    return state.merge({
      root: action.data
    });
  },
}


export default (state = initialState, action = {}) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)
