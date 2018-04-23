import routes from '../routes'
// tab nav
import TabNavigator from './../TabNavigator'


export default {
  TabNavigator: {
    screen: TabNavigator,
  },

  Product: {
    screen: routes.Product,
  },

  Login: {
    screen: routes.Login,
    navigationOptions: {
      header: null
    },
  },

  Register: {
    screen: routes.Register,
    navigationOptions: {
      header: null
    },
  },

  Consult: {
    screen: routes.Consult,
  },

  DefaultRecommend: {
    screen: routes.DefaultRecommend,
  },

  Recommend: {
    screen: routes.Recommend,
  },

  User: {
    screen: routes.User,
  },

  HistoryMedical: {
    screen: routes.HistoryMedical,
  },

  HistoryIndicators: {
    screen: routes.HistoryIndicators,
  },
}