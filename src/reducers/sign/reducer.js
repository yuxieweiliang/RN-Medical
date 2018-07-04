import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  SignTrendModel: false,
  signList: null,
});

const func = {
  ['SignTrendModel'](state, action) {
    // storage.setItem('system.token', action.data)
    return state.merge({
      SignTrendModel: ! state.SignTrendModel
    });
  },
  [types.SIGN_LIST](state, action) {
    // storage.setItem('system.token', action.data)
    return state.merge({
      signList: action.data
    });
  },
}


export default (state = initialState, action = {}) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)

