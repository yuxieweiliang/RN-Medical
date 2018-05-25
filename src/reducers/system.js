import { SYSTEM } from '../type'
import React, { Component } from 'react';
import { Image } from 'react-native';

const initialState = {
  token: null,

}

const func = {
  [SYSTEM.TOKEN](state, action) {
    return {
      ...state,
      token: action.data
    }
  }
}
export default (state = initialState, action) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)
