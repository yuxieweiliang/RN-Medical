import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import storage from '../../utils/storage'

const initialState = Immutable({
  // 人物类型
  clayCode: null,
  // 医院
  hospital: null,
  // 专家
  expert: null,
  // 病种
  illness: null,
  // 部位
  position: null,
  // 症状
  symptom: null,
  // 病例病程
  IllnessType: null,
  // 病种
  complication: null,
  // 并发症
  pathological: null,
});

const func = {
  INIT_STATE(state, action){
    return state.merge(action.data);
  },
  CHANGE_CONSULT_ITEM(state, action) {
    let data = state.merge({
      [action.data.key]: action.data.value
    });
    storage.setItem('consult', data)

    // console.log('consult', data)
    return data
  }
}
export default (state = initialState, action) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)