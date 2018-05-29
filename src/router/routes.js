//////////////////////////////////   平台   ////////////////////////////////////////

// 主页
import Home from '../page/home'
// 登陆
import Login from '../page/login'
// 注册
import Register from '../page/register'
// 系统
import System from '../page/system'
// 系统
import Setting from '../page/setting'
// 系统设置
import SystemSetting from '../page/systemSetting'
// 推荐
import Recommend from '../page/recommend'
// 推荐详情
import RecommendDefault from '../page/recommend-details'
// 健康日报-列表页
import HealthDaily from '../page/healthDaily'
// 健康日报-文章页
import HealthDailyDetails from '../page/healthDailyDetails'
// 编辑文本页面
import EditTextView from '../page/editTextView'
// 病种列表
import IllnessTypeList from '../page/illnessTypeList'

//////////////////////////////////   用户   ////////////////////////////////////////

// 用户
import User from '../page/user'
// 用户设置
import UserSetting from '../page/userSetting'
// 用户设置
import UserMessages from '../page/userMessages'
// 咨询
import Consult from '../page/consult'
// 历史就医
import HistoryMedical from '../page/historyMedical'
// 历史指标
import HistoryIndicators from '../page/historyIndicators'
// 健康指标
import HealthIndicators from '../page/healthIndicators'
// 健康状况
import HealthStatus from '../page/healthStatus'
// 生活指南
import GuideToLife from '../page/guideToLife'
// 体征趋势
import SignTrend from '../page/signTrend'
// 体征填写
import FillingFeature from '../page/fillingFeature'
// 就医状况
import MedicalStatus from '../page/medicalStatus'
// 晒健康
import HealthExposure from '../page/healthExposure'
// 身体部位
import BodyParts from '../page/bodyParts'
// 症状
import Symptom from '../page/symptom'
// 病理
import Pathological from '../page/symptom/pathological'
  // 并发症
import Complication from '../page/symptom/complication'
  // 即时资讯聊天室
import GiftedChat from '../page/giftedChat'

//////////////////////////////////   医院   ////////////////////////////////////////

// 产品
import Product from '../page/products'
// 医院
import Hospital from '../page/hospital'
// 医院列表
import HospitalList from '../page/hospitalList'
// 预约挂号
import Registration from '../page/registration'
// 预约挂号信息
import RegistrationInformation from '../page/registrationInformation'
// 专家列表
import ExpertList from '../page/expertList'
// 科室
import Department from '../page/department'
// 科室列表
import DepartmentList from '../page/departmentList'
// 专家主页
import ExpertHome from '../page/expertHome'
// 电话访谈
import TelephoneInterview from '../page/telephoneInterview'



export default {

  //////////////////////////////////   平台
  // 主页
  Home,
  // 登录
  Login,
  // 系统
  System,
  // 系统设置
  SystemSetting,
  // 注册
  Register,
  // 设置
  Setting,
  // 推荐
  Recommend,
  // 推荐详情
  RecommendDefault,
  // 健康日报-列表页
  HealthDaily,
  // 健康日报-文章页
  HealthDailyDetails,
  // 编辑文本页面
  EditTextView,
  // 病种列表
  IllnessTypeList,

  //////////////////////////////////   用户
  // 用户
  User,
  // 用户设置
  UserSetting,
  // 用户设置
  UserMessages,
  // 咨询
  Consult,
  // 体征趋势
  SignTrend,
  // 体征填写
  FillingFeature,
  // 就医情况
  MedicalStatus,
  // 就医历史
  HistoryMedical,
  // 历史指标
  HistoryIndicators,
  // 健康指标
  HealthIndicators,
  // 健康指标
  HealthStatus,
  // 生活指南
  GuideToLife,
  // 晒健康
  HealthExposure,
  // 挂号信息
  RegistrationInformation,
  // 身体部位
  BodyParts,
  // 症状
  Symptom,
  // 病理
  Pathological,
  // 并发症
  Complication,

  ///////////////////////////// 医院
  // 产品
  Product,
  // 医院
  Hospital,
  // 医院列表
  HospitalList,
  // 预约
  Registration,
  // 专家列表
  ExpertList,
  // 科室
  Department,
  // 科室列表
  DepartmentList,
  // 专家主页
  ExpertHome,
  // 电话访谈
  TelephoneInterview,
  // 电话访谈
  GiftedChat,

}