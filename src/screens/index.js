import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';

// ==========================================================================================
/////////////////////////////////////////////////////////////////////////////////////////////
// ==========================================================================================
//                       system   start
import System_DiseaseSpeciesList from './System_DiseaseSpeciesList' // 病种
import System_SymptomList from './System_SymptomList' // 症状 身体部位列表
import System_PathologicalList from './System_PathologicalList' // 病理病程
import System_Complication from './System_Complication' // 并发症
import System_Authentication from './System_Authentication' // 验证
//                       Registration   end
// ==========================================================================================
/////////////////////////////////////////////////////////////////////////////////////////////
// ==========================================================================================
//                           App   start
import App from './App'
import App_Login from './App_Login'
import App_Register from './App_Register'
import App_RetrievePassword from './App_RetrievePassword' // 忘记密码
import App_NewPassword from './App_NewPassword' // 新密码
import App_SignTrendEdit from './App_SignTrendEdit' // 填写体征信息
//                       App   end
// ==========================================================================================
/////////////////////////////////////////////////////////////////////////////////////////////
// =======================================================================
//                            Receipt   start
import Receipt from './Receipt'
import Receipt_List from './Receipt_List'
//                            Receipt   end
// ==========================================================================================
/////////////////////////////////////////////////////////////////////////////////////////////
// =======================================================================
//                            Self   start
import Self from './Self'
import Self_Messages from './Self_Messages'
import Self_FriendList from './Self_FriendList' // 朋友列表
import Self_Account from './Self_Account' // 我的账户
import Self_Registration from './Self_Registration'
import Self_Follow from './Self_Follow'
import Self_Record from './Self_Record'
import Self_QRCode from './Self_QRCode' // 二维码
import Self_Examination from './Self_Examination' // 检查
import Self_Picture from './Self_Picture' // 检查
//                            Self   end
// =======================================================================
//////////////////////////////////////////////////////////////////////////
// =======================================================================
//                            Prescription   start
import Prescription from './Prescription'
import Prescription_List from './Prescription_List'
import Prescription_QRCode from './Prescription_QRCode'
//                            Prescription   end
// =======================================================================
//////////////////////////////////////////////////////////////////////////
// =======================================================================
//                            Hospital   start
import Hospital from './Hospital'
import Hospital_List from './Hospital_List'
//                            Hospital   end
// =======================================================================
//////////////////////////////////////////////////////////////////////////
// =======================================================================
//                            Department   start
import Expert from './Expert'
import Expert_List from './Expert_List'
//                            Hospital   end
// =======================================================================
//////////////////////////////////////////////////////////////////////////
// =======================================================================
//                            Department   start
import Department from './Department'
import Department_List from './Department_List'
//                            Department   end
// =======================================================================
//////////////////////////////////////////////////////////////////////////
// =======================================================================
//                            Consult   start
import Consult from './Consult'
import Telephone_Video from './Telephone_Video' // 预约视频
import Consult_Chat from './Consult_Chat/Chat'
import Consult_Select from './Consult_Select'
//                            Consult   end
// =======================================================================

//////////////////////////////////////////////////////////////////////////
// =======================================================================
//                            WePay   start
import WePay from './WePay'

//                            WePay   end
// =======================================================================

//////////////////////////////////////////////////////////////////////////
// =======================================================================
//                            Registration   start
import Registration from './Registration'
import Registration_List from './Registration_List'
import Registration_Information from './Registration_Information'
//                            Registration   end
// =======================================================================
////////////////////////////////////////////////////////////////////////
// =======================================================================
//                            other
import Drawer_Left from './Drawer_Left'


// Register the component
export  function registerScreens(store, Provider) {
  const RegisterComponent = Navigation.registerComponent
  /////////////////////////////////////////////////////////////////////////////////////////////
  // ==========================================================================================
  //                           App   start
  RegisterComponent('Koe.App', () => App, store, Provider)
  RegisterComponent('Koe.App.Login', () => App_Login, store, Provider)
  RegisterComponent('Koe.App.Register', () => App_Register, store, Provider)
  RegisterComponent('Koe.App.RetrievePassword', () => App_RetrievePassword, store, Provider)
  RegisterComponent('Koe.App.NewPassword', () => App_NewPassword, store, Provider)
  RegisterComponent('Koe.App.SignTrendEdit', () => App_SignTrendEdit, store, Provider) // 体征填写
  // ==========================================================================================
  /////////////////////////////////////////////////////////////////////////////////////////////
  // ==========================================================================================
  //                       system   start
  RegisterComponent('Koe.System.DiseaseSpeciesList', () => System_DiseaseSpeciesList, store, Provider)
  RegisterComponent('Koe.System.SymptomList', () => System_SymptomList, store, Provider)
  RegisterComponent('Koe.System.PathologicalList', () => System_PathologicalList, store, Provider)
  RegisterComponent('Koe.System.Complication', () => System_Complication, store, Provider)
  RegisterComponent('Koe.System.Authentication', () => System_Authentication, store, Provider)
  //                       Registration   end
  // ==========================================================================================
  /////////////////////////////////////////////////////////////////////////////////////////////
  // ==========================================================================================
  //                           Consult   start
  RegisterComponent('Koe.Consult', () => Consult, store, Provider)
  RegisterComponent('Koe.Consult.Chat', () => Consult_Chat, store, Provider)
  RegisterComponent('Koe.Telephone.Video', () => Telephone_Video, store, Provider)
  RegisterComponent('Koe.Consult.Select', () => Consult_Select, store, Provider)

  //                           Consult   end
  // ==========================================================================================
  /////////////////////////////////////////////////////////////////////////////////////////////
  // ==========================================================================================
  //                           Prescription   start
  RegisterComponent('Koe.Prescription', () => Prescription, store, Provider)
  RegisterComponent('Koe.Prescription.List', () => Prescription_List, store, Provider)
  RegisterComponent('Koe.Prescription.QRCode', () => Prescription_QRCode, store, Provider)
  //                           Consult   end
  // ==========================================================================================
  /////////////////////////////////////////////////////////////////////////////////////////////
  // ==========================================================================================
  //                           Hospital   start
  RegisterComponent('Koe.Hospital', () => Hospital, store, Provider)
  RegisterComponent('Koe.Hospital.List', () => Hospital_List, store, Provider)

  //                           Consult   end
  // ==========================================================================================
  /////////////////////////////////////////////////////////////////////////////////////////////
  // ==========================================================================================
  //                           Department   start
  RegisterComponent('Koe.Department', () => Department, store, Provider)
  RegisterComponent('Koe.Department.List', () => Department_List, store, Provider)

  //                           Department   end
  // ==========================================================================================
  /////////////////////////////////////////////////////////////////////////////////////////////
  // ==========================================================================================
  //                           Expert   start
  RegisterComponent('Koe.Expert', () => Expert, store, Provider)
  RegisterComponent('Koe.Expert.List', () => Expert_List, store, Provider)
  //                           Expert   end
  // ==========================================================================================
  /////////////////////////////////////////////////////////////////////////////////////////////
  // ==========================================================================================
  //                           Receipt   start
  RegisterComponent('Koe.Receipt', () => Receipt, store, Provider)
  RegisterComponent('Koe.Receipt.List', () => Receipt_List, store, Provider)
  //                           Receipt   end
  // ==========================================================================================
  /////////////////////////////////////////////////////////////////////////////////////////////
  // ==========================================================================================
  //                           self   start
  RegisterComponent('Koe.Self', () => Self, store, Provider)
  RegisterComponent('Koe.Self.Messages', () => Self_Messages, store, Provider)
  RegisterComponent('Koe.Self.Account', () => Self_Account, store, Provider)
  RegisterComponent('Koe.Self.Registration', () => Self_Registration, store, Provider)
  RegisterComponent('Koe.Self.QRCode', () => Self_QRCode, store, Provider)
  RegisterComponent('Koe.Self.Follow', () => Self_Follow, store, Provider)
  RegisterComponent('Koe.Self.Record', () => Self_Record, store, Provider)
  RegisterComponent('Koe.Self.Examination', () => Self_Examination, store, Provider)
  RegisterComponent('Koe.Self.FriendList', () => Self_FriendList, store, Provider)
  RegisterComponent('Koe.Self.Picture', () => Self_Picture, store, Provider)
  //                           self   end
  // ==========================================================================================
  /////////////////////////////////////////////////////////////////////////////////////////////
  // ==========================================================================================
  //                           WePay   start
  RegisterComponent('Koe.WePay', () => WePay, store, Provider)
  //                           WePay   end
  // ==========================================================================================
  /////////////////////////////////////////////////////////////////////////////////////////////
  // ==========================================================================================
  //                       Registration   start
  RegisterComponent('Koe.Registration', () => Registration, store, Provider)
  RegisterComponent('Koe.Registration.list', () => Registration_List, store, Provider)
  RegisterComponent('Koe.Registration.Information', () => Registration_Information, store, Provider)
  //                       Registration   end
  // ==========================================================================================
  /////////////////////////////////////////////////////////////////////////////////////////////
  // ==========================================================================================

  RegisterComponent('Koe.Drawer.Left', () => Drawer_Left, store, Provider)
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
