import React, {Component} from 'react'
import {registerScreens, registerScreenVisibilityListener} from './screens'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Navigation} from 'react-native-navigation'
import {Theme} from "native-base-shoutem-theme" // 主题
import getTheme from '../native-base-theme/components'
import platform from '../native-base-theme/variables/platform'
import {Provider} from "react-redux"
import * as appActions from "./reducers/app/actions"
import store from './reducers'

// redux related book keeping
registerScreens(store, Provider);
registerScreenVisibilityListener();

/**
 * APP 底部菜单的配置
 */
const navigatorStyle = {
  drawUnderNavBar: true,
  // statusBarHidden: true,
  /*navBarTranslucent: true,
   navBarTransparent: true,*/
  navBarTextColor: 'white',
  navBarButtonColor: 'white',
  // statusBarHidden: true,
  statusBarColor:'#03c89b',
  // statusBarTextColorScheme: 'light',
  //statusBarColor:'white',
};
/**
 * APP 用到的图标
 */
let icon = {
  homeIcon: null,
  consultIcon: null,
  registrationIcon: null,
  userIcon: null,
  bars: null,
  plus: null,
  search: null,
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this._populateIcons()
      .then(res => {

        if (res) {
          store.subscribe(this.onStoreUpdate.bind(this));
          store.dispatch(appActions.appInitialized());
          Theme.setDefaultThemeStyle(getTheme(platform));
        }
      })
  }


  _populateIcons = function () {
    return new Promise(function (resolve, reject) {
      Promise.all(
        [
          Icon.getImageSource('home', 24),
          Icon.getImageSource('calendar-check-o', 24),
          Icon.getImageSource('phone', 24),
          Icon.getImageSource('user', 24),
          // Icon.getImageSource('bars', 24),
          // Icon.getImageSource('plus', 24),
          // Icon.getImageSource('search', 24),
        ]
      ).then((values) => {
        icon.home = values[0];
        icon.consult = values[1];
        icon.registration = values[2];
        icon.user = values[3];
        // icon.bars = values[4];
        // icon.plus = values[5];
        // icon.search = values[6];
        resolve(true);
      }).catch((error) => {
        // console.log(error);
        reject(error);
      }).done();
    });
  };

  onStoreUpdate() {
    const {root} = store.getState().app;
    // handle a root change
    // if your app doesn't change roots in runtime, you can remove onStoreUpdate() altogether

    if (this.currentRoot !== root) {
      this.currentRoot = root;
      this.startApp(root);
    }
  }

  startApp(root) {

    switch (root) {
      case 'login':
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'Koe.Login', // Login Register
            title: '登录',
            navigatorStyle: {
              ...navigatorStyle,
              // statusBarTextColorScheme: 'dark',
              // navBarBackgroundColor:'#444',
              navBarHidden: true
            }
          },
          appleStyle: {
            animationType: 'none',
            // statusBarColor:'#fff',
          }
        });
        break;
      case 'app':
        Navigation.startTabBasedApp({
          tabs: [
            {
              label: '主页',
              screen: 'Koe.AppHome', // AppHome Consult 'Koe.Self.UserMessages
              icon: icon.home,
              navigatorStyle: {
                navBarHidden: true
              },
            },
            {
              label: '预约',
              screen: 'Koe.Registration',
              icon: icon.registration,
              title: '预约挂号',
            },
            {
              label: '咨询',
              screen: 'Koe.Consult',
              icon: icon.consult,
              title: '咨询',
            },
            {
              label: '我的',
              screen: 'Koe.Self',
              icon: icon.user,
              title: "用户中心",
            },
          ],
          // animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
          // type: 'TheSideBar',
          tabsStyle: {
            tabBarBackgroundColor: '#3f51b5',
            tabBarButtonColor: '#ffffff',
            tabBarSelectedButtonColor: '#ff505c',
            tabFontFamily: 'BioRhyme-Bold',
          },
          appStyle: {
            animationType: 'none',
            orientation: 'portrait',
            // 强制显示底部菜单上的文字
            forceTitlesDisplay: true,
            // 不现实头部地下的阴影
            topBarElevationShadowEnabled: false,

            // 底部导航条样式
            tabBarBackgroundColor: '#fafafa',
            tabBarButtonColor: '#666',
            tabBarSelectedButtonColor: '#4754bb',
            tabFontFamily: 'BioRhyme-Bold',

            // 头部样式
            navBarButtonColor: '#fff',
            navBarTextColor: '#fff',
            navigationBarColor: '#3f51b5',
            navBarBackgroundColor: '#3f51b5',

            // 手机状态栏背景色
            statusBarColor: '#3f51b5',
          },
          drawer: {
            left: { // optional, define if you want a drawer from the left
              screen: 'Koe.DrawerLeft', // unique ID registered with Navigation.registerScreen
              passProps: {}, // simple serializable object that will pass as props to all top screens (optional),
              // fixedWidth: 200, // a fixed width you want your left drawer to have (optional)
            },
          }
        });
        break;
      case 'video-chat': // 视频通话
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'Koe.Consult',
            navigatorStyle: {
              navBarHidden: true,
            },
          }
        });
        break;
      case 'ConsultVideo': // 视频通话
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'Koe.ConsultVideo',
            navigatorStyle: {
              navBarHidden: true,
            },
          }
        });
        break;
      case 'UserMessages':
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'Koe.Self.UserMessages',
            navigatorStyle: {
              navBarHidden: true,
            },
          }
        });
        break;
      case 'DiseaseSpecies': // 关注病种 DiseaseSpecies
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'Koe.DiseaseSpecies',
            navigatorStyle: {
              navBarHidden: true,
            },
          }
        });
        break;

      default:
        this.startApp('login')
    }

  }
}
