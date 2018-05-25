import { USER } from '../type'
import React, { Component } from 'react';
import { Image } from 'react-native';
const iconTemp  = ()=> (
  <Image style={{width: 30, height: 30, borderRadius: 15, marginRight: 6}} source={require('../../assets/images/a1.jpg')}/>
)
const initialState = {
  user_original: {},
  user: [
    {title: '姓名', key: 'UserName', value: null, show: true},
    {title: 'ID', key: 'ID', value: null, show: false},
    {title: 'UserID', key: 'UserID', value: null, show: false},
    {title: '年龄', key: 'Age', value: null, show: true},
    {title: '性别', key: 'Sex', value: null, show: true},
    {title: '身高', key: 'ShenGao', value: null, show: true},
    {title: '证件号码', key: 'IDCard', value: null, show: true},
    {title: '关注医院', key: null, value: null, show: true},
    {title: '关注病种', key: null, value: null, show: true},
    {title: '手机号码', key: null, value: null, show: true},
  ],
  userMessages: [
    {key: 'user', data: [
      { title: '张女士', icon: iconTemp(), type: 'UserMessages' },
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
  [USER.MESSAGE](state, action) {
    return {
      ...state,
      message: action.data
    }
  },
  ['CHANGE_USER_MESSAGE'](state, action) {
    const data = {...state}
    data.user[action.key].value = action.text
    console.log(data.user)

    return {
      ...state,
      ...data
    }
  }
}
export default (state = initialState, action) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)
