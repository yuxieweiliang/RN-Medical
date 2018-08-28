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
      height: 500
    },
    bodyStyle: {
      height: 450
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
      // console.log(index, item)
    }
  },
  status: '点击登录',

  isSuccess: false,

  user: null,

}

const LOGIN_IN_DOING = 'login/正在登陆'


let func = {
  [LOGIN_IN_DOING](state, action) {
    // console.log(system)
    return {
      ...state,
      status: '正在登陆',
      isSuccess: false,
      user: null,
    }
  },
}

// 不同类别的事件使用switch对应处理过程

export default function appointmentTabCardData(state=initialState, action) {

  if(func[action.type]) {
    func[action.type].apply(null, arguments)
  } else return state
}
