'use strict';
import { SYSTEM } from '../../type'

const data = new Date()
const today = data.toISOString().split('T')[0]
// 初始状态
const initialState = {
  markedDates: today,
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
        context: {
          text: 'fdsafda生活生活生活生活sfdsafdsafdsafdsafdsa',
          button: '历时指标'
        }
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
}

let func = {
  ['CALENDAR'](state, action) {
    let { markedDates } = state
    markedDates = action.data.dateString

    return {
      ...state,
      ...{markedDates}
    }
  },
}

// 不同类别的事件使用switch对应处理过程

export default function appointmentTabCardData(state=initialState, action) {

  if(func[action.type]) {
    return func[action.type].apply(null, arguments)
  } else return state
}
