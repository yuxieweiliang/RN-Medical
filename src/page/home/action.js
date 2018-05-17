import { system } from '../../type'
import storage from '../../storage'
// 模拟用户信息

/**
 * 处理同步
 * @returns {{type: *}}
 */
function beforeHomeLoad() {
  return {
    type: system.HOME_LOAD_BEFORE
  }
}

/**
 * 处理异步
 * @returns {{type: *}}
 */
function homeLoad() {

  return async dispatch => {
    try{
      let user,  hospital, department
      // storage.remove('user')
      user =  await storage.load('user')
      console.log(user)

      if(user) {
        hospital = await storage.load('hospital')
        console.log(hospital)
      }

      if(hospital) {
        // department = await storage.load('department', hospital.id)
        console.log(department)
      }

    }catch(error) {
      console.log(error)
    }
  }
}

/**
 * 处理同步
 * @returns {{type: *}}
 */
function afterHomeLoad() {
  return {
    type: system.HOME_LOAD_FAIL
  }
}

function onPressTabCardButton(option) {
  const routers = {
    '历时指标': 'HistoryMedical',
    '生活数据': 'HistoryIndicators',
    '体征趋势': 'SignTrend',
    '体征填写': 'SignOut',
    '就医状况': 'MedicalStatus',
  }
  this.props.navigation.navigate(routers[option])
}

export default {
  beforeHomeLoad,
  homeLoad,
  afterHomeLoad,
  onPressTabCardButton,
}