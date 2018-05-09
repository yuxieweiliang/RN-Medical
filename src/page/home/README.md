tab 切换路由:
健康指标: HealthIndicators
生活指南: GuideToLife
健康状况: HealthStatus
就医情况: MedicalStatus
晒 健 康: HealthExposure
健康日报: HealthDaily



健康指标: HealthIndicators
生活数据: HistoryIndicators
体征趋势: SignTrend
体征填写: SignOut
就医状况: MedicalStatus


let router = {
  avatar: 图片
  activeOpacity: 点击时的透明度
  listStyle: 列表的样式
  underlayColor: 底色 -> 点击时，透明显露出来的底色
  title: 标题
  description: 详细信息
  horizontal: 是否水平 默认 true
  listTextStyle: 详细信息样式
  children: 子组件
}

// 调用组件
<List {...data}>
  <View>tab 1</View>
</TabCardView>