import React from 'react';
import { Image } from 'react-native';
const iconTemp  = ()=> (
  <Image style={{width: 30, height: 30, borderRadius: 15, marginRight: 6}} source={require('../../../assets/images/a1.jpg')}/>
)
// 模拟用户信息
export default {
  createStructure(option = {}) {
    return   [
      {key: 'test', data: [
        {title: '检查', type: 'Examination', key: '2'},
      ]},
      {key: 'history', data: [
        {title: '预约床位', type: 'Help', key: '4'},
        {title: '咨询记录', key: '5'},
        {title: '随访记录', key: '6'},
        {title: '宣教记录', key: '7'},
      ]},
      {key: 'myself', data: [
        {title: '推荐[智护康]给好友', type: 'Friends', key: '9'},
      ]},
    ]
  }
}