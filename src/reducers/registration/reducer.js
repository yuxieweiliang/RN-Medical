import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import storage from '../../utils/storage'

const data = new Date()
const today = data.toISOString().split('T')[0]
const initialState = Immutable({
  // 预约时间
  appointTime: today,
  // 预约挂号
  registrationList: null,
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
});



const func = {
  // 预约挂号
  [types.REGISTRATION_LIST](state, action) {
    return state.merge({
      registrationList: action.data
    });
  },
}


export default (state = initialState, action = {}) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)
