'use strict';
import { SYSTEM } from '../../type'
// 初始状态

const initialState = {
  routers: {
    '健康指标': 'HealthIndicators',
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
        type: 'healthIndicators',
        active: true,
        title: '健康指标',
        context: {
          text: [
            {name: '(1) [article;essay]∶原指文辞,现指篇', size: 125, default: '(幅不很长而独立成篇)'},
            {name: '(2) [literary works;writings]∶泛指', size: 1235, default: '(著作为文章)'},
            {name: '(3) [hidden meaning]∶比喻曲折隐蔽的', size: 235, default: '(文字)'},
            {name: '(1) [article;essay]∶原指文辞,现指篇得', size: 43, default: '(柳宗元《柳河东集》)'},
          ],
          // button: '历时指标'
        }
      },{
        type: 'guideToLife',
        title: '生活指南',
        context: {
          text: '运动运动运动运动运动运动运动运动运动运动运动',
          // button: '生活数据'
        }
      },{
        type: 'healthStatus',
        title: '健康状况',
        context: {
          text: [
            {time: '1日', temperature: 38.2, breathing: 38, bloodOxygen: 97, bloodPressure: '122/85'},
            {time: '2日', temperature: 37, breathing: 30, bloodOxygen: 102, bloodPressure: '122/102'},
            {time: '3日', temperature: 38, breathing: 28, bloodOxygen: 82, bloodPressure: '122/82'},
            {time: '4日', temperature: 37, breathing: 34, bloodOxygen: 96, bloodPressure: '122/96'},
          ],
          // button: ['体征趋势', '体征填写'] //
        }
      },{
        type: 'medicalStatus',
        title: '就医情况',
        context: {
          text: '就医就医就医就医就医就医就医就医就医就医就医就医就医就医就医就医就医就医',
          // button: '就医状况'
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
  [SYSTEM.HOME_LOAD_BEFORE](state, action) {

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
