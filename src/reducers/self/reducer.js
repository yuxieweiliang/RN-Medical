import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import storage from '../../utils/storage'

const initialState = Immutable({
  user: null
});

const func = {
  [types.GET_USER_MESSAGE](state, action) {
    storage.setItem('user', action.data)
    return state.merge({
      user: action.data
    });
  }
}


export default (state = initialState, action = {}) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)

