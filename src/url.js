import config from './config'
import template from 'url-template'
let {server: { auth, user, userData, system, file }} = config

function createApi(url) {
  return (option) => template.parse(url).expand(option);
}

/**
 * ********************************       授权
 */
const getToken =createApi(`${auth}/connect/token`)

/**
 * ********************************       用户
 * id：用户id
 * start：起始时间
 * end：结束时间
 */
const userMessage = {
  getUser: createApi(`${user}/api/ClientUsers/Get/{id}`),
  postUser: createApi(`${user}/api/ClientUsers/Post`),
  putUser: createApi(`${user}/api/ClientUsers/Put`),
  deleteUser: createApi(`${user}/api/ClientUsers/Delete`),
}

/**
 * ********************************       预约挂号
 * id：用户id
 * start：起始时间
 * end：结束时间
 */
const registration = {
  getRegistration: createApi(`${user}/api/Registration/Get/{start}/{end}`), // 获取
  postRegistration: createApi(`${user}/api/Registration/Post`), // 新增
  // 获取指定科室的指定时间段的所有挂号信息
  getRegistrationList: createApi(`${user}/api/Registration/GetListByDeptCode/{deptCode}/{start}/{end}`),
}

/**
 * ********************************       咨询
 * userId：用户id
 * start：起始时间
 * end：结束时间
 * consultId：咨询adviceId
 */
const con = `${userData}/api/Data_User_Advice/`
const msg = `${userData}/api/Data_User_AdviceMessage/`
const consult = {
  // -新增一个咨询信息
  postConsult: createApi(`${con}/Post`),
  // 获取当前用户指定时间段的咨询列表
  consultList: createApi(`${con}/GetListByUser/{start}/{end}`),

  // 咨询留言
  postAdviceMessage: createApi(`${msg}/Post`),
  // 咨询留言
  adviceMessage: createApi(`${msg}/GetByAdviceID/{userId}/{consultId}/{messageType}`),
  // 删除
  deleteAdviceMessage: createApi(`${msg}/Delete/{id}`),
}

/**
 * ********************************       科室人员列表
 * hospitalId：医院ID
 * deptCode：科室ID
 * userId：用户ID
 */
const hos = `${userData}/api/Sys_User_Info/`
const hospitalUser = {
  // 医护人员列表
  getDepartmentDoctorList: createApi(`${hos}/GetByDeptCode/{hospitalId}/{deptCode}`),
  // 专家详细信息
  getHospitalDoctor: createApi(`${hos}/Get/{hospitalId}/{userId}`),
}

/**
 * ********************************       系统数据
 * hospitalId：医院ID
 * clayCode：人体代码
 * positionCode：部位代码
 * symptomCode：症状代码
 * complicationCode：症状代码
 */
const position = `${userData}/api/Sys_Complication_Rela/`
const systemData = {
  // 部位列表
  getPositionList: createApi(`${position}/GetBuWei/{hospitalId}/{clayCode}`),
  // 症状列表
  getSymptomList: createApi(`${position}/GetZhengZhuang/{hospitalId}/{clayCode}/{positionCode}`),
  // 病程列表
  getCourseOfDiseaseList: createApi(`${position}/GetBingCheng/{hospitalId}/{clayCode}/{positionCode}/{symptomCode}`),
  // 并发症列表
  getComplicationList: createApi(`${position}/GetBingFaZheng/{hospitalId}/{clayCode}/{positionCode}/{symptomCode}/{complicationCode}`),
}

export default {
  // 授权
  getToken,

  // 用户
  ...userMessage,

  // 挂号信息
  ...registration,

  // 医院用户
  ...hospitalUser,

  // 咨询
  ...consult,

  // 新增一个症状列表
  postSymptom: createApi(`${userData}/api/Data_User_ZhengZhuang/Post`),
  // 根据咨询ID获取病人的症状列表
  getSymptomListByConsult: createApi(`${userData}/api/Data_User_ZhengZhuang/GetByAdviceID/{userId}/{consultId}`),


  // 获取指定医院的所有疾病基本信息列表  http://sysdataapi.kecoretest.com:81/
  getIllnessList: createApi(`${system}/api/Sys_Illness_Info/Get/{hospitalId}`),



  ...systemData,

  // 查询公共自定义片段
  getCommonDicList: createApi(`${system}/api/Sys_Common_Dic/GetByParentItemCode/{merchantId}/{itemType}/{parentItemCode}`),




  // 获取指定体征ID的体征信息  ?name=TW,MB,HX
  getUserInfo: createApi(`${userData}/api/Data_User_Info/Get/{signId}`),
  // 获取当前用户指定时段的所有体征信息
  getUserInfoList: createApi(`${userData}/api/Data_User_Info/Get/{start}/{end}`),
  // 新增一个用户体征信息
  postUserInfo: createApi(`${userData}/api/Data_User_Info/Post`),
  // 修改...
  putUserInfo: createApi(`${userData}/api/Data_User_Info/Put`),
  // 删除...
  deleteUserInfo: createApi(`${userData}/api/Data_User_Info/Delete/{iD}`),























  // { 用户授权医院 }-用户获取自己授权给指定医院的单个权限信息
  getAuthMerchant: createApi(`${auth}/api/AuthMerchant/Get/{merchantID}/{authInfo}`),
  // 用户授权医院-新增一个用户授权医院的信息，只能新增自己的 医院授权的原则是，授权后才能查看
  postAuthMerchant: createApi(`${auth}/api/AuthMerchant/Post`),
  // 授权管理-用户授权医院-修改一个用户授权医院的信息，只能修改自己的
  putAuthMerchant: createApi(`${auth}/api/AuthMerchant/Put`),
  // 用户授权医院-删除一个用户授权信息，只能删除自己的
  deleteAuthMerchant: createApi(`${auth}/api/AuthMerchant/Delete/{merchantID}/{authInfo}`),

  // { 用户授权用户 } 获取授权给指定用户的所有权限列表
  getAuthUsersList: createApi(`${auth}/api/AuthUsers/GetUserRoles/{merchantID}`),
  // 获取自己授权给指定用户的单个权限信息
  getAuthUsers: createApi(`${auth}/api/AuthUsers/Get/{authUserID}/{authInfo}`),
  // 新增一个用户授权用户的信息
  postAuthUsers: createApi(`${auth}/api/AuthUsers/Post`),
  // 修改……
  putAuthUsers: createApi(`${auth}/api/AuthUsers/Put`),
  // 删除……
  deleteAuthUsers: createApi(`${auth}/api/AuthUsers/Delete/{merchantID}/{authInfo}`),
  // 删除所有……
  deleteAllAuthUsers: createApi(`${auth}/api/AuthUsers/DeleteUserRoles/{authUserID}`),


  ///////////////////////////////////////// 信息 ///////////////////////////////////////
  /**
   * id：用户id
   */
  // 获取当前用户指定咨询的ID（AdviceID）的咨询信息
  getConsultInfo: createApi(`${userData}/api/Data_User_Advice/GetByAdviceID/{consultId}`),
  // -删除....
  deleteConsult: createApi(`${userData}/api/Data_User_Advice/Delete/{consultId}`),

  // 获取朋友圈数据
  getFriendList: createApi(`${userData}/api/Data_User_CircleMessage/GetList`),


  ///////////////////////////////////////// 系统  ///////////////////////////////////////
  // 根据医院ID获取一个医院信息
  getHospitalInfo: createApi(`${system}/api/Sys_Mer_Info/Get/{hospitalId}`),
  // 医院 -获取全部医院信息
  getHospitalList: createApi(`${system}/api/Sys_Mer_Info/Get`),

  /**
   * 科室
   * hospitalId：医院id
   * deptCode：科室code
   */
  // 根据医院ID获取医院所有科室列表
  getDepartmentList: createApi(`${system}/api/Sys_Dept_Info/Get/{hospitalId}`),
  // 根据医院ID和科室Code获取一条科室信息
  getDepartmentInfo: createApi(`${system}/api/Sys_Dept_Info/Get/{hospitalId}/{deptCode}`),
  // 新增一个科室，只能增加当前用户所在医院的科室
  postDepartmentInfo: createApi(`${system}/api/Sys_Dept_Info/Post`),
  // 修改...
  putDepartmentInfo: createApi(`${system}/api/Sys_Dept_Info/Put/{deptCode}`),
  // 删除...
  deleteDepartmentInfo: createApi(`${system}/api/Sys_Dept_Info/Delete/{deptCode}`),

  // 获取指定医院，指定疾病ID的基本信息
  getIllnessInfo: createApi(`${system}/api/Sys_Illness_Info/Get/{hospitalID}/{illnessCode}`),



  // { 科室ID } -> 所有医院医护人员-部门信息列表
  getDivision: createApi(`${system}/api/Sys_User_DeptInfo/GetByDeptCode/{deptCode}`),



  // { UserID } -> 人员所有科室关系列表
  getDeptRelationship: createApi(`${system}/api/Sys_User_DeptInfo/GetByUserID/{id}`),
  // { 医院ID } -> 医院所有人员列表
  getHospitalDoctorList: createApi(`${system}/api/Sys_User_Info/Get/{hospitalID}`),



  // 上传用户头像文件，一次上传一个，返回文件名
  postHeadPortrait: createApi(`${file}/api/UserMainImages/UploadUserHead`),
  // 下载文件，文件流的方式输出
  getFile: createApi(`${file}/api/UserMainImages/DownLoad/{fileName}`),
  // Ajax上传文件,支持批量上传，返回文件名列表
  uploadFiles: createApi(`${file}/api/UserMainImages/UploadFiles`),
  // 上传用户证件照
  uploadUserCredentials: createApi(`${file}/api/UserMainImages/UploadUserCredentials`),
}


