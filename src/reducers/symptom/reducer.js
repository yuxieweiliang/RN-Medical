import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import storage from '../../utils/storage'

const initialState = Immutable({
  // 症状
  symptom: null,
  // 症状列表
  symptomList: [],
});

const func = {
  // 症状列表
  [types.SYMPTOM_LIST](state, action) {
    return state.merge({
      symptomList: action.data
    });
  },
  // 症状
  [types.SYMPTOM](state, action) {
    return state.merge({
      symptom: action.data
    });
  },
}


export default (state = initialState, action = {}) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)
