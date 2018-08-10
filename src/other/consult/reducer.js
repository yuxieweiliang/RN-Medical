import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import storage from '../../utils/storage'

const initialState = Immutable({
  // 人物类型
  clayCode: 'man',
  // 病种
  diseaseSpecies: null,
  // 部位
  bodyPosition: null,
  // 症状
  symptom: null,
  // 病理病程
  pathologicalCourse: null,
  // 并发症
  complication: null,
});

const func = {
  /**
   * 获取咨询的本地缓存
   */
  [types.GET_LOCAL_CACHING](state, action){
    return state.merge(action.data);
  },

  // 更改病种
  [types.CHANGE_DISEASE_SPECIES](state, action) {
    storage.setItem('diseaseSpecies', action.data)
    return state.merge({
      diseaseSpecies: action.data
    });
  },

  // 更改部位
  [types.CHANGE_BODY_POSITION](state, action) {
    storage.setItem('bodyPosition', action.data)
    return state.merge({
      bodyPosition: action.data
    });
  },

  // 更改症状
  [types.CHANGE_SYMPTOM](state, action) {
    storage.setItem('symptom', action.data)
    return state.merge({
      symptom: action.data
    });
  },

  // 病理病程
  [types.CHANGE_PATHOLOGICAL_COURSE](state, action) {
    storage.setItem('pathologicalCourse', action.data)
    return state.merge({
      pathologicalCourse: action.data
    });
  },

  // 并发症
  [types.CHANGE_COMPLICATION](state, action) {
    storage.setItem('complication', action.data)
    return state.merge({
      complication: action.data
    });
  },
}
export default (state = initialState, action) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)