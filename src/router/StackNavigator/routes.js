import React, { Component } from 'react'
import routes from '../routes'
// tab nav
import TabNavigator from './../TabNavigator'


export default {

  TabNavigator: {
    screen: TabNavigator,
  },

  Product: {
    screen: routes.Product,
  },

  Login: {
    screen: routes.Login,
    navigationOptions: {
      header: null
    },
  },

  Register: {
    screen: routes.Register,
    navigationOptions: {
      header: null
    },
  },

  Consult: {
    screen: routes.Consult,
  },

  RecommendDefault: {
    screen: routes.RecommendDefault,
  },

  Recommend: {
    screen: routes.Recommend,
  },

  User: {
    screen: routes.User,
  },
  // 设置
  Setting: {
    screen: routes.Setting,
    navigationOptions: {
      header: null
    },
  },
  // 用户设置
  UserSetting: {
    screen: routes.UserSetting,
    navigationOptions: {
      header: null
    },
  },
  // 系统
  System: {
    screen: routes.System,
    navigationOptions: {
      header: null
    },
  },
  // 系统设置
  SystemSetting: {
    screen: routes.SystemSetting,
    navigationOptions: {
      header: null
    },
  },

  HistoryMedical: {
    screen: routes.HistoryMedical,
  },

  HistoryIndicators: {
    screen: routes.HistoryIndicators,
  },

  HealthIndicators: {
    screen: routes.HealthIndicators,
  },

  HealthStatus: {
    screen: routes.HealthStatus,
  },

  GuideToLife: {
    screen: routes.GuideToLife,
  },

  SignTrend: {
    screen: routes.SignTrend,
  },

  SignOut: {
    screen: routes.SignOut,
  },

  MedicalStatus: {
    screen: routes.MedicalStatus,
  },

  HealthExposure: {
    screen: routes.HealthExposure,
  },

  HealthDaily: {
    screen: routes.HealthDaily,
  },


  HealthDailyDetails: {
    screen: routes.HealthDailyDetails,
  },

  Appointment: {
    screen: routes.Appointment,
  },

  HospitalList: {
    screen: routes.HospitalList,
  },

  ExpertList: {
    screen: routes.ExpertList,
  },

  ExpertHome: {
    screen: routes.ExpertHome,
  },

  RegisteredInformation: {
    screen: routes.RegisteredInformation,
  },
  TelephoneInterview: {
    screen: routes.TelephoneInterview,
  },
  BodyParts: {
    screen: routes.BodyParts,
  },
  EditTextView: {
    screen: routes.EditTextView,
  },
}