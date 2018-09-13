import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import storage from '../../utils/storage'

const initialState = Immutable({
  // 并发症
  complication: null,
  // 并发症列表
  complicationList: [],
});

const func = {
  // 并发症
  [types.COMPLICATION](state, action) {
    return state.merge({
      complication: action.data
    });
  },
  // 并发症列表
  [types.COMPLICATION_LIST](state, action) {
    return state.merge({
      complicationList: action.data
    });
  },

}


export default (state = initialState, action = {}) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)
