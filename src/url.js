import { server } from './config'
import template from 'url-template'
let { auth, user, userData, system, file, register, cms } = server

function createApi(url) {
  return (option) => template.parse(url).expand(option);
}

/**
 * ********************************       授权
 */
const getToken =createApi(`${auth}/connect/token`)

/**
 * ********************************       用户
 * id：用户id getHospitalPatient
 * start：起始时间
 * end：结束时间
 */
const userMessage = {
  getHospitalPatient: createApi(`${user}/api/ClientUsers/Get/{hospitalId}/{id}`),
  postUser: createApi(`${user}/api/ClientUsers/Post`),
  putUser: createApi(`${user}/api/ClientUsers/Put`),
  deleteUser: createApi(`${user}/api/ClientUsers/Delete`),
}

/**
 * ********************************       预约挂号
 * start：起始时间
 * end：结束时间
 */
const registration = {
  // 获取
  getRegistration: createApi(`${user}/api/Registration/Get/{start}/{end}`),
  // 新增
  postRegistration: createApi(`${user}/api/Registration/Post`),
}

/**
 * ********************************       科室人员列表
 * hospitalId：医院ID
 * deptCode：科室ID
 * userId：用户ID
 */
const hos = `${system}/api/Sys_User_Info/`
const hospitalUser = {
  // 医护人员列表
  getDoctorList: createApi(`${hos}/Get/{hospitalId}`),
  // 医护人员列表
  getDeptDoctorList: createApi(`${hos}/GetByDeptCode/{hospitalId}/{deptCode}`),
  // 专家详细信息
  getExpert: createApi(`${hos}/Get/{hospitalId}/{userId}`),
}

/**
 * ********************************       系统数据
 * hospitalId：医院ID
 * clayCode：人体代码
 * positionCode：部位代码
 * symptomCode：症状代码
 * complicationCode：症状代码
 */
const position = `${system}/api/Sys_Complication_Rela/`
const systemData = {
  // 部位列表
  getPositionList: createApi(`${position}/GetBuWei/{hospitalId}/{clayCode}`),
  // 症状列表
  getSymptomList: createApi(`${position}/GetZhengZhuang/{hospitalId}/{clayCode}/{positionCode}`),
  // 病程列表
  getPathologicalList: createApi(`${position}/GetBingCheng/{hospitalId}/{clayCode}/{positionCode}/{symptomCode}`),
  // 并发症列表
  getComplicationList: createApi(`${position}/GetBingFaZheng/{hospitalId}/{clayCode}/{positionCode}/{symptomCode}/{complicationCode}`),
}

// 咨询列表
const paperData = {
  getPaperList: createApi(`${cms}/api/Sys_Paper_Template//GetList/{merchantId}`),
}


export default {
  register: `${register}/api/reg/post`,
  // 授权
  getToken,

  // 用户
  ...userMessage,

  // 挂号信息
  ...registration,

  // 医院用户
  ...hospitalUser,


  // 咨询
  ...paperData,

  ...systemData,

  // 根据咨询ID获取病人的症状列表
  getSymptomListByConsult: createApi(`${userData}/api/Data_User_ZhengZhuang/GetByAdviceID/{userId}/{consultId}`),

  // 获取指定医院的所有疾病基本信息列表  http://sysdataapi.kecoretest.com:81/
  getIllnessList: createApi(`${system}/api/Sys_Illness_Info/Get/{hospitalId}`),


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


  // 医院 -获取全部医院信息
  getHospitalList: createApi(`${system}/api/Sys_Mer_Info/Get`),


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
  getHospital: createApi(`${system}/api/Sys_Mer_Info/Get/{hospitalId}`),

  /**
   * 科室
   * hospitalId：医院id
   * deptCode：科室code
   */
  // 根据医院ID获取医院所有科室列表
  getDepartmentList: createApi(`${system}/api/Sys_Dept_Info/Get/{hospitalId}`),
  // 根据医院ID和科室Code获取一条科室信息
  getDepartment: createApi(`${system}/api/Sys_Dept_Info/Get/{hospitalId}/{deptCode}`),

  // 获取指定医院，指定疾病ID的基本信息
  getIllnessInfo: createApi(`${system}/api/Sys_Illness_Info/Get/{hospitalID}/{illnessCode}`),



  // { 科室ID } -> 所有医院医护人员-部门信息列表
  getDivision: createApi(`${system}/api/Sys_User_DeptInfo/GetByDeptCode/{deptCode}`),



  // { 医院ID } -> 医院所有人员列表
  getHospitalDoctorList: createApi(`${system}/api/Sys_User_Info/Get/{hospitalID}`),



  // 上传用户头像文件，一次上传一个，返回文件名
  postUserPortrait: createApi(`${file}/api/UserMainImages/UploadUserHead`),
  // 下载文件，文件流的方式输出
  getFile: createApi(`${file}/api/UserMainImages/DownLoad/{fileName}`),
  // Ajax上传文件,支持批量上传，返回文件名列表
  uploadFiles: createApi(`${file}/api/UserMainImages/UploadFiles`),
  // 上传用户证件照
  uploadUserCredentials: createApi(`${file}/api/UserMainImages/UploadUserCredentials`),
  // 随访记录
  getFullListByUser: createApi(`${file}/api/Data_User_AdvicePaper_Dto/GetFullListByUser/{start}/{end}/{paperType}`),
  // 电话随访
  getByPaperId: createApi(`${file}/api/Data_User_AdvicePaper_Dto/GetByPaperID/{paperId}/{userId}`),

  getListByUser: createApi(`${userData}/api/Data_User_Article_Dto/GetListByUser/{start}/{offSet}/{number}`),

  // 随访详细
  getPaperDetail: createApi(`${cms}/api/Sys_Paper_Template/GetDetailByID/{hospitalId}/{templateId}`),

  // 根据 类型 获取报表
  getTemplateByType: createApi(`${cms}/api/Sys_Paper_Template/GetListByType/{hospitalId}/{templateType}`),

  // { 回执 } 根据患者 ID  获取 回执列表
  getReceiptListByPatientId: createApi(`${userData}/api/Data_Consult_Receipt/GetByUserID`),

  // { 回执 } 根据 咨询ID  获取 当前咨询对应的回执信息
  getReceiptByAdviceId: createApi(`${userData}/api/Data_Consult_Receipt/GetByAdviceID/{adviceId}`),

  // { 回执 } 修改 回执   确认回执信息
  putReceiptByAdviceId: createApi(`${userData}/api/Data_User_Advice/Put/{adviceId}`),

  // 获取 视频预约 列表
  getConsultVideoList: createApi(`${user}/api/Work_Reserve/GetByPatient/{hospital}/{patientId}`),

  // 获取 处方 列表  http://userdata.api.koenn.cn:81/api/Data_User_Prescription/GetListByUser
  getPrescriptionList: createApi(`${userData}/api/Data_User_Prescription/GetListByUser`),

  // 获取 处方 医嘱内容 -> 也就是药单
  getPrescriptionOrder: createApi(`${userData}/api/Data_User_Orders/GetListByUser/{prescriptionId}`),


}


