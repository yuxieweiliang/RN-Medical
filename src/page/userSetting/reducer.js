import { setting } from '../../type'

let initialState = {
  listData: [
    {key: 'test', data: [
      {title: '姓名', value: '骨傲天', type: 'EditTextView'},
      {title: '性别', value: '男', type: 'EditTextView'},
    ]},
    {key: 'history', data: [
      {title: '证件号码', value: '61011528353698421585425241', type: 'EditTextView'},
      {title: '关注病种', value: '骨科', type: 'EditTextView'},
      {title: '身高', value: '185', type: 'EditTextView'},
      {title: '联系方式', value: '1555555555555', type: 'EditTextView'},
    ]},
    {key: 'myself', data: [
      {title: '我的账户', value: 'guaotian', type: 'EditTextView'},
      {title: '推荐[智护康]给好友', value: '骨刺天', type: 'EditTextView'},
      {title: '帮助中心', value: '骨头联盟', type: 'EditTextView'},
    ]},
  ]
}

let func = {
  '姓名'(state, action) {
    let { listData } = state
    let newData = listData.map(items => {
      let data = items.data.map(item => {
        if(item.title === action.title) {
          item.value = action.text
        }
        return item
      })
      return {
        ...items,
        data
      }
    })
    return Object.assign({}, state, newData)
  }
}

export default (
  state = initialState,
  action
) => (
  func[action.type]
    ? func[action.type].call(this, state, action)
    : state
)