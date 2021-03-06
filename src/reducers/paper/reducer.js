import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import storage from '../../utils/storage'

const initialState = Immutable({
  paper: null,
  // 随访记录
  paperList: [],
});

const func = {
  [types.PAPER_LIST](state, action){
    return state.merge(action.data);
  },

}
export default (state = initialState, action) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)