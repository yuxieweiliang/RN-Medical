import StackNavigator from'../StackNavigator'
import routes from '../routes'


export default {
  Home: {
    screen: StackNavigator,
  },
  Login: {
    screen: routes.Login,
  },
  Register: {
    screen: routes.Register,
  },
  Setting: {
    screen: routes.Setting,
  },
}