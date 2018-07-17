export default {
  // 创建预约医院信息
  createRegistration(doctor) {
    return [
      {key: '就诊医院', title: '就诊医院：', text: '三桥'},
      {key: '医生姓名', title: '医生姓名：', text: 'doctor.UserName'},
      {key: '门诊类型', title: '门诊类型：', text: '主任医师'},
      {key: '就诊日起', title: '就诊日起：', text: '2015、12、12'},
      {key: '挂号费用', title: '挂号费用：', text: '￥1254'},
    ]
  },
  // 创建人物信息
  createUserMessage(user) {
    return [
      {key: '就诊患者', title: '就诊患者：', text: user.UserName},
      {key: '证件号码', title: '证件号码：', text: user.IDCard},
      {key: '联系电话', title: '联系电话：', text: user.Fhone},
      {key: '手机验证码', title: '手机验证码：', text: user.Visibility},
    ]
  }
}