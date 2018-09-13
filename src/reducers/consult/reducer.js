import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import storage from '../../utils/storage'

const data = new Date()
const today = data.toISOString().split('T')[0]
const initialState = Immutable({
  consultVideo: null,
  consultVideoList: []
});

const func = {
  /**
   * 视频预约列表
   */
  [types.CONSULT_VIDE0_LIST](state, action){
    return state.merge({consultVideoList: action.data});
  },

  /**
   * 视频预约列表
   */
  [types.CONSULT_VIDE0_MESSAGE](state, action){
    return state.merge({consultVideo: action.data});
  },

}
export default (state = initialState, action) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)