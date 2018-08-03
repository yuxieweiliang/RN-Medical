import { setting } from '../../type'

let initialState = {

}

let func = {
  listData: [
    {key: 'test', data: [
      {title: '检查', type: 'EditTextView'},
      {title: '检验', type: 'EditTextView'},
    ]},
    {key: 'history', data: [
      {title: '预约床位', type: 'EditTextView'},
      {title: '咨询记录', type: 'EditTextView'},
      {title: '随访记录', type: 'EditTextView'},
      {title: '宣教记录', type: 'EditTextView'},
    ]},
    {key: 'myself', data: [
      {title: '我的账户', type: 'EditTextView'},
      {title: '推荐[智护康]给好友', type: 'EditTextView'},
      {title: '帮助中心', type: 'EditTextView'},
    ]},
  ]
}

export default () => (
  state = initialState,
  action
) => (
  func[action.type]
    ? func[action.type].apply(this, arguments)
    : state
)