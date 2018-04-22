{
  // 头部样式
  headerStyle: {
    height: 40,
    backgroundColor: '#fafafa',
  },
  // 盒子样式
  containerStyle: {
    height: 400
  },
  // 主体样式
  bodyStyle: {},
  // tab样式
  itemStyle: {},
  // tab数据
  dataSource: [
    {
      active: true,
      title: 'tab one',
      context: {
        text: 'fdsafdasfdsafdsafdsafdsafdsa'
      }
    },{
      title: 'tab two',
      context: {
        text: 'ddddddddddddddddddd'
      }
    },{
      title: 'tab three',
      context: {
        text: 'aaaaaaaaaaaaaaaaaaa'
      }
    },{
      title: 'tab four',
      context: {
        text: 'ffffffffffffffffffffffff'
      }
    },
  ],

  // 每次切换返回数据
  tabChange: function(index, item) {
    console.log(index, item)
  }
}