import Icon from 'react-native-vector-icons/dist/FontAwesome';

// init Router 是一个主导航
import HomeScreen from './StackNavigator';
// 登陆
import LoginScreen from '../page/login';
// 注册
import RegisterScreen from '../page/register';
// 设置
import SettingScreen from '../page/system'


const config = {
  headerMode: 'screen',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}


export default {
  Home: {
    screen: HomeScreen,
    // 这里可以设置所有的
    navigationOptions: {
      ...config,
      drawerLabel: 'Home',
    },
  },
  Login: {
    screen: LoginScreen,
    // 这里可以设置所有的
    navigationOptions: {
      ...config,
    },
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      ...config,
      drawerLabel: 'Home',
    }
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      ...config,
      drawerLabel: 'Home',
      //header: null
    }
  },
}