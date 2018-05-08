'use strict';
import { system } from '../../type'
// 初始状态

const initialState = {
  routers: {
    '历时指标': 'HistoryMedical',
    '生活数据': 'HistoryIndicators',
    '体征趋势': 'SignTrend',
    '体征填写': 'SignOut',
    '就医状况': 'MedicalStatus',
  },
  // 健康指南
  healthGuide: {
    headerStyle: {
      height: 50,
      backgroundColor: '#fafafa',
    },
    containerStyle: {
      height: 300
    },
    dataSource: [
      {
        active: true,
        title: '健康指标',
        context: {
          text: `(1) [article;essay]∶原指文辞,现指篇幅不很长而独立成篇的文字你看了晨报上的那篇文章了么?
(2) [literary works;writings]∶泛指著作为文章。--唐. 柳宗元《柳河东集》每为文章。
(3) [hidden meaning]∶比喻曲折隐蔽的含义话里有文章
(4) [thing;program]∶事情;程序照例文章总得做好`,
          button: '历时指标'
        }
      },{
        title: '生活指南',
        context: {
          text: '运动运动运动运动运动运动运动运动运动运动运动',
          button: '生活数据'
        }
      },{
        title: '健康状况',
        context: {
          text: '体征体征体征体征体征体征体征体征体征体征',
          button: '体征趋势' // ['体征趋势', '体征填写']
        }
      },{
        title: '就医情况',
        context: {
          text: '就医就医就医就医就医就医就医就医就医就医就医就医就医就医就医就医就医就医',
          button: '就医状况'
        }
      },
    ],
    tabChange(index, item) {
      console.log(index, item)
    }
  },
  list: [
    {
      description: '本组件用于封装视图，使其可以正确响应触摸操作。当按下的时候，封装的视图的不透明度会降低，同时会有一个底层的颜色透过而被用户看到，使得视图变暗或变亮。',
      avatar: require(`../../../assets/images/a1.jpg`),
      title: '本组件用于封装视图',
      key: '本组件用于封装视图',
    },
    {
      description: '本组件用于封装视图，使其可以正确响应触摸操作。当按下的时候，封装的视图的不透明度会降低，同时会有一个底层的颜色透过而被用户看到，使得视图变暗或变亮。',
      avatar: require(`../../../assets/images/a2.jpg`),
      title: '本组件用于封装视图6',
      key: '本组件用于封装视图6',
    },
    {
      description: '本组件用于封装视图，使其可以正确响应触摸操作。当按下的时候，封装的视图的不透明度会降低，同时会有一个底层的颜色透过而被用户看到，使得视图变暗或变亮。',
      avatar: require(`../../../assets/images/a3.jpg`),
      title: '本组件用于封装视图5',
      key: '本组件用于封装视图5',
    },
    {
      description: '本组件用于封装视图，使其可以正确响应触摸操作。当按下的时候，封装的视图的不透明度会降低，同时会有一个底层的颜色透过而被用户看到，使得视图变暗或变亮。',
      avatar: require(`../../../assets/images/a4.jpg`),
      title: '本组件用于封装视图2',
      key: '本组件用于封装视图2',
    },
    {
      description: '本组件用于封装视图，使其可以正确响应触摸操作。当按下的时候，封装的视图的不透明度会降低，同时会有一个底层的颜色透过而被用户看到，使得视图变暗或变亮。',
      avatar: require(`../../../assets/images/a5.jpg`),
      title: '本组件用于封装视图3',
      key: '本组件用于封装视图3',
    },
    {
      description: '本组件用于封装视图，使其可以正确响应触摸操作。当按下的时候，封装的视图的不透明度会降低，同时会有一个底层的颜色透过而被用户看到，使得视图变暗或变亮。',
      avatar: require(`../../../assets/images/a7.jpg`),
      title: '本组件用于封装视图4',
      key: '本组件用于封装视图4',
    },
  ]

}


let func = {
  [system.HOME_LOAD_BEFORE](state, action) {

    console.log('---------------------------home/正在登陆')

    return {
      ...state,
      ...action,
      status: '正在登陆',
      isSuccess: false,
      user: null,
    }
  },
}

// 不同类别的事件使用switch对应处理过程

export default function homeTabCardData(state=initialState, action) {

  if(func[action.type]) {
    return func[action.type].apply(null, arguments)
  } else return state
}
