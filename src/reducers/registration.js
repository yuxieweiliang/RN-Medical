'use strict';
import { USER } from '../type'

const data = new Date()
const today = data.toISOString().split('T')[0]
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
        title: '预约挂号',
      },{
        title: '视频问诊',
        context: {
          text: '运动运动运动运动运动运动运动运动运动运动运动',
          button: '生活数据'
        }
      },{
        title: '预约床位',
        context: {
          text: '体征体征体征体征体征体征体征体征体征体征',
          button: ['体征趋势', '体征填写']
        }
      },
    ],
    tabChange(index, item) {
      console.log(index, item)
    }
  },
  registration: {
    // 预约时间
    appointTime: today,
  },
  registrationList: null
}

let func = {
  /**
   * 预约详细信息查询
   * @param state
   * @param action
   */
  [USER.REGISTRATION]: (state, action) =>  ({
    ...state,
    registration: {
      appointTime: action.data.dateString
    }
  }),

  /**
   * 新建预约挂号
   * @param state
   * @param action
   */
  [USER.REGISTRATION_NEW]: (state, action) =>  ({
    ...state,
    registration: {
      ...state.registration,
      ...action.data
    }
  }),

  /**
   * 预约列表
   * @param state
   * @param action
   */
  [USER.REGISTRATION_LIST]: (state, action) =>  ({
    ...state,
    registrationList: action.data
  }),
}

// 不同类别的事件使用switch对应处理过程

export default (state = initialState, action) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)

