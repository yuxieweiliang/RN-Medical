import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  // 患者 ID
  patientId: null,
  // 专家 ID
  expertId: null,
  // 专家 ID
  receipt: {},
});

const func = {

  // { 视频咨询 } 更改患者 ID
  [types.SET_PATIENT_ID](state, action) {
    // console.log('expert:::::::', action.data)
    return state.merge({
      patientId: action.data
    });
  },
  // { 视频咨询 } 更改专家 ID
  [types.SET_EXPORT_ID](state, action) {
    return state.merge({
      expertId: action.data
    });
  },
  // 修改症状信息
  [types.RECEIPT_SYMPTOM_CHANGE](state, action) {
    return state.merge({
      receiptSymptom: action.data
    });
  },


}


export default (state = initialState, action = {}) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)
