import { SYSTEM } from '../type'
import React, { Component } from 'react';

const initialState = {
  token: null,
  // 病症
  illnessList: null,
  // 身体模型
  bodyModel: ['man', 'woman', 'child'],
  // 身体部位
  bodyPartsList: null,
  // 咨询
  consult: null,
  // 症状
  symptomList: null,
  // 病例病程
  courseDiseaseList: null,
  // 并发症
  complicationList: null,
}

const func = {

  // token
  [SYSTEM.TOKEN](state, action) {
    return {
      ...state,
      token: action.data
    }
  },

  // 疾病列表
  [SYSTEM.ILLNESS_LIST](state, action) {
    return {
      ...state,
      illnessList: action.data
    }
  },

  // 部位列表
  [SYSTEM.BODY_PARTS_LIST](state, action) {
    return {
      ...state,
      bodyPartsList: action.data
    }
  },

  // 症状列表
  [SYSTEM.SYMPTOM_LIST](state, action) {

    console.log('症状列表: ', action.data)
    return {
      ...state,
      symptomList: action.data
    }
  },

  // 病例病程
  [SYSTEM.COURSE_DISEASE_LIST](state, action) {
    return {
      ...state,
      courseDiseaseList: action.data
    }
  },

  // 并发症
  [SYSTEM.COMPLICATION_LIST](state, action) {
    return {
      ...state,
      complicationList: action.data
    }
  },
}


export default (state = initialState, action) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)
