import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import storage from '../../utils/storage'

const initialState = Immutable({
  // 病例病程
  pathological: null,
  // 病例病程
  pathologicalList: [],
});

const func = {
  // 病例病程
  [types.PATHOLOGICAL_LIST](state, action) {
    return state.merge({
      pathologicalList: action.data
    });
  },
  // 病例病程
  [types.PATHOLOGICAL](state, action) {
    return state.merge({
      pathological: action.data
    });
  },

}


export default (state = initialState, action = {}) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)
