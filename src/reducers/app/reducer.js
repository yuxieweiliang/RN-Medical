import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  root: undefined // 'login' / 'after-login'
});

const func = {
  [types.ROOT_CHANGED](state, action) {
    return state.merge({
      root: action.data
    });
  }
}


export default (state = initialState, action = {}) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)
