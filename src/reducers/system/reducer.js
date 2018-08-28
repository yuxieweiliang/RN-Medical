import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import storage from '../../utils/storage'

const initialState = Immutable({
  // 身体模型
  bodyModel: ['man', 'woman', 'child'],
  // 预约列表
  registrationList: null,
  // 病种
  diseaseSpeciesList: null,
  // 身体部位
  bodyPositionList: null,
  // 症状
  symptomList: null,
  // 病例病程
  pathologicalCourseList: null,
  // 并发症
  complicationList: null,
  // 健康日报
  healthDailyList: null,
  // 健康数据
  healthIndicatorsList: null,
});

const func = {
  // 预约列表
  [types.REGISTRATION_LIST](state, action) {
    return state.merge({
      registrationList: action.data.reverse()
    });
  },
  // 病种列表
  [types.DISEASE_SPECIES_LIST](state, action) {
    return state.merge({
      diseaseSpeciesList: action.data
    });
  },

  // 部位列表
  [types.BODY_POSITION_LIST](state, action) {
    return state.merge({
      bodyPositionList: action.data
    });
  },

  // 症状列表
  [types.SYMPTOM_LIST](state, action) {
    return state.merge({
      symptomList: action.data
    });
  },

  // 病例病程
  [types.PATHOLOGICAL_COURSE_LIST](state, action) {
    return state.merge({
      pathologicalCourseList: action.data
    });
  },

  // 并发症
  [types.COMPLICATION_LIST](state, action) {
    return state.merge({
      complicationList: action.data
    });
  },

  // 健康日报
  [types.HEALTH_DAILY_LIST](state, action) {
    return state.merge({
      healthDailyList: action.data
    });
  },

  // 健康数据
  [types.GET_HEALTH_INDICATOR_LIST](state, action) {
    return state.merge({
      healthIndicatorsList: action.data
    });
  },

  // 修改健康数据
  [types.CHANGE_SUITABLE_LIST](state, action) {
    let { suitable, taboo } = state.healthIndicatorsList

    const option = suitable.map(item => {
        if(item.category === action.item.category) {
          return {...item, value: action.value}
        } else return item
      })

    // console.log(action)
    return state.merge({
      healthIndicatorsList: {
        taboo,
        suitable: option
      }
    });
  },

  // 修改健康数据
  [types.CHANGE_TABOO_LIST](state, action) {
    let { suitable, taboo } = state.healthIndicatorsList

    const option = taboo.map(item => {
      if(item.category === action.item.category) {
        return {...item, value: action.value}
      } else return item
    })

    return state.merge({
      healthIndicatorsList: {
        taboo: option,
        suitable
      }
    });
  },
}


export default (state = initialState, action = {}) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)
