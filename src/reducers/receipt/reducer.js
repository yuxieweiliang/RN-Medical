import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import storage from '../../utils/storage'

const initialState = Immutable({
  receipt: [],
  receiptList: [],
});

const func = {
  [types.RECEIPT_LIST](state, action) {
    // storage.setItem('receiptList', action.data)
    return state.merge({
      receiptList: action.data
    });
  },
  [types.RECEIPT_MESSAGE](state, action) {
    // storage.setItem('receiptList', action.data)
    return state.merge({
      receipt: action.data
    });
  },
}


export default (state = initialState, action = {}) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)

