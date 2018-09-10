import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';


import AppHome from './App'
// import HealthDaily from './HealthDaily'
// 健康日报
import HealthDailyDetails from './App/HealthDailyDetails'
// 健康指标
import HealthIndicators from './App/HealthIndicators'

import SearchView from '../components/Search'
import TitleView from '../components/Title'

// SYSTEM
import Login from './Login'
import Register from './System.Register'
// 病种
import DiseaseSpecies from './System.DiseaseSpecies'

// 忘记密码
import RetrievePassword from './System.Register/RetrievePassword'
// 新密码
import NewPassword from './System.Register/NewPassword'

// USER
import SelfRegistration from './Self.Registration'
import SelfFollow from './Self.Follow'
import SelfRecord from './Self.Record'
// 二维码
import SelfQRCode from './Self.QRCode'

// 检查
import Examination from './Examination'


import Consult from './Consult'
import Registration from './Registration'
import RegistrationInformation from './Registration.Information'

import HospitalList from './Hospital.List'
import Expert from './Expert'
import ExpertList from './Expert.List'

// =======================================================================
//                            系统数据
// =======================================================================
// 病种
import DiseaseSpeciesList from './System.DiseaseSpeciesList'
// 填写体征信息
import SignTrendEdit from './App.SignTrendEdit'
// 症状 身体部位列表
import SymptomList from './System.SymptomList'
// 病理病程
import PathologicalList from './System.PathologicalList'
// 并发症
import Complication from './System.Complication'
// 预约视频
import ConsultVideo from './Consult.Video'

// =======================================================================
//                            我的   start
import User from './Self'
import SelfMessages from './Self.Messages'
import FriendList from './Self.FriendList' // 朋友列表
import SelfAccount from './Self.Account' // 我的账户
import Chat from './Self.Chat/Chat'
//                            我的   end
// =======================================================================
//////////////////////////////////////////////////////////////////////////
// =======================================================================
//                            医院   start
import Department from './Hospital.Department'
import DepartmentList from './Hospital.Department.List'
//                            医院   end
// =======================================================================


import DrawerLeft from './DrawerLeft'


// Register the component
export  function registerScreens(store, Provider) {
  const RegisterComponent = Navigation.registerComponent
  RegisterComponent('Koe.Login', () => Login, store, Provider)
  RegisterComponent('Koe.Register', () => Register, store, Provider)
  RegisterComponent('Koe.DiseaseSpecies', () => DiseaseSpecies, store, Provider)
  RegisterComponent('Koe.RetrievePassword', () => RetrievePassword, store, Provider)
  RegisterComponent('Koe.NewPassword', () => NewPassword, store, Provider)


  RegisterComponent('Koe.AppHome', () => AppHome, store, Provider)
  RegisterComponent('Koe.HealthDailyDetails', () => HealthDailyDetails, store, Provider)
  RegisterComponent('Koe.HealthIndicators', () => HealthIndicators, store, Provider)
  RegisterComponent('Koe.Examination', () => Examination, store, Provider)

  RegisterComponent('Koe.Consult', () => Consult, store, Provider)
  RegisterComponent('Koe.SignTrendEdit', () => SignTrendEdit, store, Provider)
  RegisterComponent('Koe.HospitalList', () => HospitalList, store, Provider)
  RegisterComponent('Koe.DiseaseSpeciesList', () => DiseaseSpeciesList, store, Provider)
  RegisterComponent('Koe.ExpertList', () => ExpertList, store, Provider)
  RegisterComponent('Koe.Expert', () => Expert, store, Provider)
  RegisterComponent('Koe.SymptomList', () => SymptomList, store, Provider)
  RegisterComponent('Koe.PathologicalList', () => PathologicalList, store, Provider)
  RegisterComponent('Koe.Complication', () => Complication, store, Provider)
  RegisterComponent('Koe.ConsultVideo', () => ConsultVideo, store, Provider)
  RegisterComponent('Koe.Chat', () => Chat, store, Provider)
  RegisterComponent('Koe.FriendList', () => FriendList, store, Provider)

  // ======================================================================
  //                           self   start
  RegisterComponent('Koe.Self', () => User, store, Provider)
  RegisterComponent('Koe.Self.Messages', () => SelfMessages, store, Provider)
  RegisterComponent('Koe.Self.SelfAccount', () => SelfAccount, store, Provider)
  RegisterComponent('Koe.Self.Registration', () => SelfRegistration, store, Provider)
  RegisterComponent('Koe.Self.QRCode', () => SelfQRCode, store, Provider)
  RegisterComponent('Koe.Self.Follow', () => SelfFollow, store, Provider)
  RegisterComponent('Koe.Self.Record', () => SelfRecord, store, Provider)
  //                           self   end
  // ======================================================================

  // ======================================================================
  //                       Registration   start
  RegisterComponent('Koe.Registration', () => Registration, store, Provider)
  RegisterComponent('Koe.Registration.Information', () => RegistrationInformation, store, Provider)
  //                       Registration   end
  // ======================================================================

  RegisterComponent('Koe.Department', () => Department, store, Provider)
  RegisterComponent('Koe.DepartmentList', () => DepartmentList, store, Provider)


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
