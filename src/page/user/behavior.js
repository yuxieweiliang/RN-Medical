import React, { Component } from 'react';
import { Image } from 'react-native';
import { USER } from '../../type'
import storage from '../../storage'
const iconTemp  = ()=> (
  <Image style={{width: 30, height: 30, borderRadius: 15, marginRight: 6}} source={require('../../../assets/images/a1.jpg')}/>
)
// 模拟用户信息
export default {
  /**
   * 处理异步
   * @returns {{type: *}}
   */
  loadUser() {
    return async dispatch => {
      const user = await storage.load('user.message', {path: {id: '322717145007458'}})
      console.log('-------------------')
      // storage.remove('user')

      dispatch({
        type: USER.MESSAGE,
        data: user.Data,
      })
    }
  },
  createStructure(option = {}) {

    return   [
      {key: 'user', data: [
        { title: option.UserName, icon: iconTemp(), type: 'UserMessages' },
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
}