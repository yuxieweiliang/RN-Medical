import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';

import Login from './Login'
import Register from './Register'
import RetrievePassword from './Register/RetrievePassword'
import NewPassword from './Register/NewPassword'
import QRCode from './QRCode'
import Follow from './User/Follow'
import Record from './User/Record'
import MyRegistration from './User/MyRegistration'


import AppHome from './AppHome'

import SearchView from '../components/Search'
import TitleView from '../components/Title'

import HealthDaily from './HealthDaily'
import HealthDailyDetails from './HealthDaily/HealthDailyDetails'
import HistoryMedical from './HistoryMedical'
import CollapsingHeader from './UserMessages/CollapsingHeader'

import Consult from './system/Consult'
import HospitalList from './hospital/HospitalList'
import IllnessTypeList from './system/IllnessTypeList'
import ExpertHome from './hospital/ExpertHome'
import ExpertList from './hospital/ExpertList'

import SignTrend from './system/SignTrend'
import SignTrendEdit from './system/SignTrendEdit'
import BodyParts from './system/BodyParts'
import SymptomList from './system/SymptomList'
import Pathological from './system/SymptomList/Pathological'
import Complication from './system/SymptomList/Complication'
import InterrogationVideo from './system/InterrogationVideo'
import Chat from './Chat'
import FriendList from './FriendList'

import User from './User'
import UserMessages from './UserMessages'

import Registration from './Registration'
import Information from './Registration/Information'
import Department from './Department'
import DepartmentList from './Department/DepartmentList'


import Account from './Account'

import DrawerLeft from './DrawerLeft'


// Register the component
export  function registerScreens(store, Provider) {
  const RegisterComponent = Navigation.registerComponent
  RegisterComponent('Koe.Login', () => Login, store, Provider)
  RegisterComponent('Koe.Register', () => Register, store, Provider)
  RegisterComponent('Koe.RetrievePassword', () => RetrievePassword, store, Provider)
  RegisterComponent('Koe.NewPassword', () => NewPassword, store, Provider)
  RegisterComponent('Koe.QRCode', () => QRCode, store, Provider)
  RegisterComponent('Koe.Follow', () => Follow, store, Provider)
  RegisterComponent('Koe.Record', () => Record, store, Provider)
  RegisterComponent('Koe.MyRegistration', () => MyRegistration, store, Provider)


  RegisterComponent('Koe.AppHome', () => AppHome, store, Provider)
  RegisterComponent('Koe.HealthDaily', () => HealthDaily, store, Provider)
  RegisterComponent('Koe.HealthDailyDetails', () => HealthDailyDetails, store, Provider)
  RegisterComponent('Koe.HistoryMedical', () => HistoryMedical, store, Provider)
  RegisterComponent('Koe.CollapsingHeader', () => CollapsingHeader, store, Provider)

  RegisterComponent('Koe.Consult', () => Consult, store, Provider)
  RegisterComponent('Koe.SignTrend', () => SignTrend, store, Provider)
  RegisterComponent('Koe.SignTrendEdit', () => SignTrendEdit, store, Provider)
  RegisterComponent('Koe.HospitalList', () => HospitalList, store, Provider)
  RegisterComponent('Koe.IllnessTypeList', () => IllnessTypeList, store, Provider)
  RegisterComponent('Koe.ExpertList', () => ExpertList, store, Provider)
  RegisterComponent('Koe.ExpertHome', () => ExpertHome, store, Provider)
  RegisterComponent('Koe.BodyParts', () => BodyParts, store, Provider)
  RegisterComponent('Koe.SymptomList', () => SymptomList, store, Provider)
  RegisterComponent('Koe.Pathological', () => Pathological, store, Provider)
  RegisterComponent('Koe.Complication', () => Complication, store, Provider)
  RegisterComponent('Koe.InterrogationVideo', () => InterrogationVideo, store, Provider)
  RegisterComponent('Koe.Chat', () => Chat, store, Provider)
  RegisterComponent('Koe.FriendList', () => FriendList, store, Provider)

  RegisterComponent('User', () => User, store, Provider)
  RegisterComponent('Koe.UserMessages', () => UserMessages, store, Provider)

  RegisterComponent('Registration', () => Registration, store, Provider)
  RegisterComponent('Registration.Information', () => Information, store, Provider)
  RegisterComponent('Koe.Department', () => Department, store, Provider)
  RegisterComponent('Koe.DepartmentList', () => DepartmentList, store, Provider)

  RegisterComponent('Koe.Account', () => Account, store, Provider)

  RegisterComponent('Koe.DrawerLeft', () => DrawerLeft, store, Provider)

  RegisterComponent('Koe.SearchView', () => SearchView)
  RegisterComponent('Koe.TitleView', () => TitleView)
}



export function registerScreenVisibilityListener() {

  return;
  /*new ScreenVisibilityListener({
    willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
    didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
    didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
  }).register();*/
}
