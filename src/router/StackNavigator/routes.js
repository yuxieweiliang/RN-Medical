import React, { Component } from 'react'
import { TouchableHighlight, View, Image, Text, Dimensions, TextInput,StyleSheet } from 'react-native'
import routes from '../routes'
// tab nav
import TabNavigator from './../TabNavigator'
const { width, height } = Dimensions.get('window');


function headerTitle(option, nav, title) {
  console.log(option, nav, title)
  return (
    <View style={{width: width - 120, height: 30, alignItems: 'center', justifyContent: 'center',backgroundColor: 'red'}}>
<Text style={{fontSize: 20, color: '#333', fontWeight: 'bold'}}>{option.children}</Text>
  </View>
)
}

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

  DefaultRecommend: {
    screen: routes.DefaultRecommend,
  },

  Recommend: {
    screen: routes.Recommend,
  },

  User: {
    screen: routes.User,
  },

  HistoryMedical: {
    screen: routes.HistoryMedical,
  },

  HistoryIndicators: {
    screen: routes.HistoryIndicators,
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
}