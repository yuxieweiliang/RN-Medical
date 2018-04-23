//////////////////////////////////   系统   ////////////////////////////////////////

// 登陆
import Login from '../page/login';
// 注册
import Register from '../page/register';
// 设置
import Setting from '../page/system'

//////////////////////////////////   用户   ////////////////////////////////////////

// 用户
import User from '../page/user'
// 咨询
import Consult from '../page/consult';
// 历史就医
import HistoryMedical from '../page/historyMedical';
// 历史指标
import HistoryIndicators from '../page/historyIndicators';

//////////////////////////////////   医院   ////////////////////////////////////////

// 产品
import Product from '../page/products';

//////////////////////////////////   平台   ////////////////////////////////////////

// 推荐
import Recommend from '../page/recommend'

// 咨询详情
import DefaultRecommend from '../page/recommend-details'

// 主页
import Home from '../page/home'

export default {
  Home,
  Login,
  Register,
  Setting,
  User,
  Consult,
  Product,

  // 推荐
  Recommend,
  DefaultRecommend,

  // 就医历史
  HistoryMedical,

  // 历史指标
  HistoryIndicators,
}