import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import storage from '../../utils/storage'

const initialState = Immutable({
  // 处方
  prescription: null,
  // 处方
  prescriptionList: [],
});

const func = {
  // 处方
  [types.PRESCRIPTION_LIST](state, action) {
    return state.merge({
      prescriptionList: action.data
    });
  },
  // 处方
  [types.PRESCRIPTION](state, action) {
    return state.merge({
      prescription: action.data
    });
  },

}


export default (state = initialState, action = {}) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)
