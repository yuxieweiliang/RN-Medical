import { HOSPITAL } from '../type'

const initialState = {
  hospital_original: {
    UserName: '三甲医院'
  },
  hospital: [
    {title: '医院名称', key: 'UserName', value: 'fdsafdsa', show: true},
    {title: 'ID', key: 'ID', value: null, show: false},
    {title: 'UserID', key: 'UserID', value: null, show: false},
    {title: '地址', key: 'Age', value: null, show: true},
    {title: '电话', key: 'Sex', value: null, show: true},
    {title: '邮箱', key: 'ShenGao', value: null, show: true},
    {title: '证件号码', key: 'IDCard', value: null, show: true},
    {title: '关注医院', key: null, value: null, show: true},
    {title: '关注病种', key: null, value: null, show: true},
    {title: '手机号码', key: null, value: null, show: true},
  ],
}

const func = {
  [HOSPITAL.LIST_SUCCESS](state, action) {
    console.log(action)
    return {
      ...state,
      hospital: action.data
    }
  },
}
export default (state = initialState, action) => (
  func[action.type]
    ? func[action.type].apply(null, arguments)
    : state
)
