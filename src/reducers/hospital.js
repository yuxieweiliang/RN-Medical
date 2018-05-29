import { HOSPITAL } from '../type'

const initialState = {
  hospital: null,
  hospitalList: null
}

const func = {
  [HOSPITAL.MESSAGE](state, action) {
    return {
      ...state,
      hospital: action.data
    }
  },
  [HOSPITAL.LIST_SUCCESS](state, action) {
    return {
      ...state,
      hospitalList: action.data
    }
  },
}
export default (state = initialState, action) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)
