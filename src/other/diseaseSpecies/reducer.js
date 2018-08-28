import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import storage from '../../utils/storage'

const initialState = Immutable({
  // 病种
  illnessList: null,
  // 身体模型
  bodyModel: ['man', 'woman', 'child'],
  // 身体部位
  bodyPartsList: null,
  // 咨询
  consult: null,
  // 症状
  symptomList: null,
  // 病例病程
  courseDiseaseList: null,
  // 并发症
  complicationList: null,
});



const func = {
  // 疾病列表
  [types.ILLNESS_LIST](state, action) {
    return state.merge({
      illnessList: action.data
    });
  },
  // 部位列表
  [types.BODY_PARTS_LIST](state, action) {
    return state.merge({
      bodyPartsList: action.data
    });
  },

  // 症状列表
  [types.SYMPTOM_LIST](state, action) {

    // console.log('症状列表: ', action.data)
    return state.merge({
      symptomList: action.data
    });
  },

  // 病例病程
  [types.COURSE_DISEASE_LIST](state, action) {
    return state.merge({
      courseDiseaseList: action.data
    });
  },

  // 并发症
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
