import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import storage from '../../utils/storage'

const initialState = Immutable({
  // 身体部位
  bodyPosition: null,
  // 身体部位列表
  bodyPositionList: [],
});

const func = {

  // 部位
  [types.BODY_POSITION](state, action) {
    return state.merge({
      bodyPosition: action.data
    });
  },
  // 部位列表
  [types.BODY_POSITION_LIST](state, action) {
    return state.merge({
      bodyPositionList: action.data
    });
  },

  // 部位列表
  [types.BODY_POSITION_CHANGE](state, action) {
    let list = state.bodyPositionList.map(item => {
      if(item.ItemName === action.data.ItemName) {
        return {
          ...action.data,
          active: true
        };
      } else return {
        ...item,
        active: false
      };
    })

    return state.merge({
      bodyPosition: action.data,
      bodyPositionList: list,
    });
  },
}


export default (state = initialState, action = {}) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)
