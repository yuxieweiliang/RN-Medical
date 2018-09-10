import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  SignTrendModel: false,
  sign: {}, // 当前条
  signList: [], // 体征列表
});

const func = {
  /**
   * 页面弹出框
   */
  SignTrendModel(state, action) {
    // storage.setItem('system.token', action.data)
    return state.merge({
      SignTrendModel: ! state.SignTrendModel
    });
  },
  /**
   * 填写体征信息
   */
  [types.SIGN_ITEM_CHANGE](state, action) {
    return state.merge({
      sign: {
        ...state.sign,
        [action.data.key]: action.data.value
      }
    });
  },
  /**
   * 填写体征信息
   */
  [types.SIGN_CHANGE](state, action) {
    return state.merge({
      sign: action.data
    });
  },
  [types.SIGN_LIST](state, action) {
    // storage.setItem('system.token', action.data)
    return state.merge({
      signList: action.data
    });
  },
}


export default (state = initialState, action = {}) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)

