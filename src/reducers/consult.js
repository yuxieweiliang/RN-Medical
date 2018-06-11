import { USER } from '../type'

const initialState = {
  // 人物类型
  clayCode: null,
  // 医院
  hospital: null,
  // 部位
  position: null,
  // 症状
  symptom: null,
  // 病种
  IllnessType: null,
}

const func = {
  CHANGE_CONSULT_ITEM(state, action) {
    return {
      ...state,
      [action.data.key]: action.data.value
    }
  },
}
export default (state = initialState, action) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)