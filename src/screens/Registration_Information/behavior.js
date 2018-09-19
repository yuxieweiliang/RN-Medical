export default {
  // 创建预约医院信息
  createRegistration(doctor, time) {
    return [
      {key: '就诊医院', title: '就诊医院：', text: doctor.MerchantName},
      {key: '医生姓名', title: '医生姓名：', text: doctor.UserName},
      {key: '门诊类型', title: '门诊类型：', text: doctor.UserType},
      {key: '预约时间', title: '预约时间：', text: time},
      {key: '视频费用', title: '视频费用：', text: '￥0.5/分'},
    ]
  },
  // 创建人物信息
  createUserMessage(user) {
    return [
      {key: '就诊患者', title: '就诊患者：', text: user.UserName},
      {key: '证件号码', title: '证件号码：', text: user.IDCard},
      {key: '联系电话', title: '联系电话：', text: user.Fhone},
      // {key: '手机验证码', title: '手机验证码：', text: user.Visibility},
    ]
  }
}