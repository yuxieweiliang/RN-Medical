import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';


import AppHome from './AppHome'
// import HealthDaily from './HealthDaily'
// 健康日报
import HealthDailyDetails from './AppHome/HealthDailyDetails'
// 健康指标
import HealthIndicators from './AppHome/HealthIndicators'

import SearchView from '../components/Search'
import TitleView from '../components/Title'

// SYSTEM
import Login from './Login'
import Register from './Register'
// 病种
import DiseaseSpecies from './Register/DiseaseSpecies'
// 忘记密码
import RetrievePassword from './Register/RetrievePassword'
// 新密码
import NewPassword from './Register/NewPassword'
// 二维码
import QRCode from './QRCode'

// USER
import MyRegistration from './User/MyRegistration'
import Follow from './User/Follow'
import Record from './User/Record'

// 检查
import Examination from './Examination'


import Consult from './system/Consult'
import Registration from './Registration'
import Information from './Registration/Information'

import HospitalList from './Hospital/HospitalList'
import Expert from './Expert'
import ExpertList from './Expert/ExpertList'

// 病种
import DiseaseSpeciesList from './system/DiseaseSpeciesList'
// 填写体征信息
import SignTrendEdit from './AppHome/SignTrendEdit'
// 身体部位列表
import BodyPosition from './system/BodyPosition'
// 症状雷彪
import SymptomList from './system/SymptomList'
// 病理病程
import PathologicalCourseList from './system/PathologicalCourseList'
// 并发症
import Complication from './system/Complication'
// 预约视频
import InterrogationVideo from './system/InterrogationVideo'
import Chat from './Chat'
// 朋友列表
import FriendList from './FriendList'

import User from './User'
import UserMessages from './UserMessages'
// import CollapsingHeader from './UserMessages/CollapsingHeader'

import Department from './Department'
import DepartmentList from './Department/DepartmentList'


import Account from './Account'

import DrawerLeft from './DrawerLeft'


// Register the component
export  function registerScreens(store, Provider) {
  const RegisterComponent = Navigation.registerComponent
  RegisterComponent('Koe.Login', () => Login, store, Provider)
  RegisterComponent('Koe.Register', () => Register, store, Provider)
  RegisterComponent('Koe.DiseaseSpecies', () => DiseaseSpecies, store, Provider)
  RegisterComponent('Koe.RetrievePassword', () => RetrievePassword, store, Provider)
  RegisterComponent('Koe.NewPassword', () => NewPassword, store, Provider)
  RegisterComponent('Koe.QRCode', () => QRCode, store, Provider)
  RegisterComponent('Koe.Follow', () => Follow, store, Provider)
  RegisterComponent('Koe.Record', () => Record, store, Provider)
  RegisterComponent('Koe.MyRegistration', () => MyRegistration, store, Provider)


  RegisterComponent('Koe.AppHome', () => AppHome, store, Provider)
  // RegisterComponent('Koe.HealthDaily', () => HealthDaily, store, Provider)
  RegisterComponent('Koe.HealthDailyDetails', () => HealthDailyDetails, store, Provider)
  RegisterComponent('Koe.HealthIndicators', () => HealthIndicators, store, Provider)
  RegisterComponent('Koe.Examination', () => Examination, store, Provider)

  RegisterComponent('Koe.Consult', () => Consult, store, Provider)
  RegisterComponent('Koe.SignTrendEdit', () => SignTrendEdit, store, Provider)
  RegisterComponent('Koe.HospitalList', () => HospitalList, store, Provider)
  RegisterComponent('Koe.DiseaseSpeciesList', () => DiseaseSpeciesList, store, Provider)
  RegisterComponent('Koe.ExpertList', () => ExpertList, store, Provider)
  RegisterComponent('Koe.Expert', () => Expert, store, Provider)
  RegisterComponent('Koe.BodyPosition', () => BodyPosition, store, Provider)
  RegisterComponent('Koe.SymptomList', () => SymptomList, store, Provider)
  RegisterComponent('Koe.PathologicalCourseList', () => PathologicalCourseList, store, Provider)
  RegisterComponent('Koe.Complication', () => Complication, store, Provider)
  RegisterComponent('Koe.InterrogationVideo', () => InterrogationVideo, store, Provider)
  RegisterComponent('Koe.Chat', () => Chat, store, Provider)
  RegisterComponent('Koe.FriendList', () => FriendList, store, Provider)

  RegisterComponent('Koe.User', () => User, store, Provider)
  RegisterComponent('Koe.User.UserMessages', () => UserMessages, store, Provider)

  RegisterComponent('Koe.Registration', () => Registration, store, Provider)
  RegisterComponent('Koe.Registration.Information', () => Information, store, Provider)
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
    willAppear: ({screen}) => // console.log(`Displaying screen ${screen}`),
    didAppear: ({screen, startTime, endTime, commandType}) => // console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    willDisappear: ({screen}) => // console.log(`Screen will disappear ${screen}`),
    didDisappear: ({screen}) => // console.log(`Screen disappeared ${screen}`)
  }).register();*/
}
