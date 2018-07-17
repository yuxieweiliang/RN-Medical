调用的数据实例：
let data = {
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