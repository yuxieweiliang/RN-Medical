import { USER } from '../type'
import React, { Component } from 'react';

const initialState = {
  sign: null,
  signList: null,

  // 体温
  TW: null,
  // 脉搏
  MB: null,
  // 血压高
  XYH: null,
  // 血压低
  XYL: null,
  // 呼吸
  HX: null,
  // 心率
  XL: null,
  // 血氧饱和度
  XYBHD: null,
}

const func = {

  // token
  ['SIGN_ITEM_CHANGE'](state, action) {

    console.log(action)
    return {
      ...state,
      sign: {
        ...state.sign,
        [action.data.key]: action.data.value
      }
    }
  },
  // token
  [USER.SIGN_LIST](state, action) {

    console.log(action)
    return {
      ...state,
      signList: action.data,
    }
  },
}


export default (state = initialState, action) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)
