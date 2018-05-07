'use strict';
import { system } from '../../type'
// 初始状态

const initialState = {
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
          text: 'fdsafda生活生活生活生活sfdsafdsafdsafdsafdsa',
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
          button: ['体征趋势', '体征填写']
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
  status: '点击登录',

  isSuccess: false,

  user: null,

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
