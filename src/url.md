/**
 * ********************************       咨询
 * userId：用户id
 * start：起始时间
 * end：结束时间
 * consultId：咨询adviceId
 * messageType：咨询adviceId
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




  // 新增一个科室，只能增加当前用户所在医院的科室
  postDepartment: createApi(`${system}/api/Sys_Dept_Info/Post`),
  // 修改...
  putDepartmentInfo: createApi(`${system}/api/Sys_Dept_Info/Put/{deptCode}`),
  // 删除...
  deleteDepartmentInfo: createApi(`${system}/api/Sys_Dept_Info/Delete/{deptCode}`),


  // { UserID } -> 人员所有科室关系列表
  getDeptRelationship: createApi(`${system}/api/Sys_User_DeptInfo/GetByUserID/{id}`),




  // 新增一个症状列表
  postSymptom: createApi(`${userData}/api/Data_User_ZhengZhuang/Post`),







