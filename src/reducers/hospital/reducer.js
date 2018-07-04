import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  message: null,
  hospitalList: null,
});

const func = {
  [types.HOSPITAL_MESSAGE](state, action) {
    return state.merge({
      message: action.data
    });
  },
  [types.HOSPITAL_LIST](state, action) {
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
