import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import storage from '../../utils/storage'

const initialState = Immutable({
  token: null
});



const func = {
  [types.LOGIN](state, action) {
    storage.setItem('system.token', action.data)
    return state.merge({
      token: action.data
    });
  }
}


export default (state = initialState, action = {}) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)
