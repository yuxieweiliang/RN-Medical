import { user } from '../../type'
import React, { Component } from 'react';
import { Image } from 'react-native';
const iconTemp  = ()=> (
  <Image style={{width: 30, height: 30, borderRadius: 15, marginRight: 6}} source={require('../../../assets/images/a1.jpg')}/>
)
const initialState = {
  userListData: [
    {key: 'user', data: [
      { title: '张女士', icon: iconTemp(), type: 'Setting' },
    ]},
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

const func = {

}
export default (
  state = initialState,
  action
) => (
  func[action.type]
    ? func[action.type].apply(null, arguments)
    : state
)
