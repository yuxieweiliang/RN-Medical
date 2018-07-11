import React from 'react';
import { Image } from 'react-native';
const iconTemp  = ()=> (
  <Image style={{width: 30, height: 30, borderRadius: 15, marginRight: 6}} source={require('../../../assets/images/a1.jpg')}/>
)
// 模拟用户信息
export default {
  createStructure(option = {}) {

    return   [
      {key: 'user', data: [
        { title: option.UserName || 'none', icon: iconTemp(), type: 'UserMessages', key: '1' },
      ]},
      {key: 'test', data: [
        {title: '检查', type: 'Examination', key: '2'},
        {title: '检验', key: '3'},
      ]},
      {key: 'history', data: [
        {title: '预约床位', key: '4'},
        {title: '咨询记录', key: '5'},
        {title: '随访记录', key: '6'},
        {title: '宣教记录', key: '7'},
      ]},
      {key: 'myself', data: [
        {title: '我的账户', key: '8'},
        {title: '推荐[智护康]给好友', key: '9'},
        {title: '帮助中心', key: '10'},
      ]},
    ]
  }
}