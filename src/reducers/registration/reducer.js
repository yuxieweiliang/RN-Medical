import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import storage from '../../utils/storage'

const data = new Date()
const today = data.toISOString().split('T')[0]
const initialState = Immutable({
  // 身体模型
  bodyModel: ['man', 'woman', 'child'],
  // 预约列表
  registrationList: null,


  // 是否预约
  isRegistration: false,
  // 预约日期
  appointDate: today,
  // 预约时间
  appointTime: '上午',
  // 时间段
  timeSlot: null,

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
  // 预约列表
  [types.REGISTRATION_LIST](state, action) {
    return state.merge({
      registrationList: action.data.reverse()
    });
  },

  // 更改预约时间
  [types.CHANGE_REGISTRATION_TIME](state, action) {
    return state.merge({
      appointDate: action.date,
      appointTime: action.time,
    });
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
  // 医生排班列表
  [types.GET_EXPERT_SCHEDULE_LIST](state, action) {
    // storage.setItem('complication', action.data)
    return state.merge({
      schedulingList: action.data
    });
  },
}
export default (state = initialState, action) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)