import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import storage from '../../utils/storage'

const initialState = Immutable({
  // 健康日报
  healthDailyList: null,
});

const func = {
  // 健康日报
  [types.HEALTH_DAILY_LIST](state, action) {
    return state.merge({
      healthDailyList: action.data
    });
  },
}


export default (state = initialState, action = {}) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)
