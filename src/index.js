import React, {Component} from 'react'
import {registerScreens, registerScreenVisibilityListener} from './screens'
import {Navigation} from 'react-native-navigation'
import {Theme} from "native-base-shoutem-theme" // 主题
import getTheme from '../native-base-theme/components'
import platform from '../native-base-theme/variables/platform'
import {Provider} from "react-redux"
import * as appActions from "./reducers/app/actions"
import store from './reducers'
import { router } from './config'

registerScreens(store, Provider);


let icon = null
export default class App extends Component {
  constructor(props) {
    super(props);

    appActions.populateIcons()
      .then(icons => {
        if (icons) {
          icon = icons
          store.subscribe(this.onStoreUpdate.bind(this));
          store.dispatch(appActions.appInitialized());
          Theme.setDefaultThemeStyle(getTheme(platform));
        }
      })
  }

  onStoreUpdate() {
    const {root} = store.getState().app;
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
            screen: 'Koe.App.Login', // Login Register
            title: '登录',
            // APP 底部菜单的配置
            navigatorStyle: router.navigatorStyle,
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
              label: '我的',
              screen: 'Koe.Self',
              icon: icon.user,
              title: "用户中心",
              navigatorStyle: {
                navBarHidden: true
              },
            },
            {
              label: '咨询',
              screen: 'Koe.Consult',
              icon: icon.consult,
              title: '咨询',
              navigatorStyle: {
                navBarHidden: true
              },
            },
            {
              label: '主页',
              screen: 'Koe.App', // App Consult 'Koe.Self.UserMessages
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
              navigatorStyle: {
                navBarHidden: true
              },
            },
          ],
          // animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
          // type: 'TheSideBar',
          tabsStyle: router.tabsStyle,
          appStyle: router.appStyle,
          drawer: {
            left: {
              screen: 'Koe.Drawer.Left',
              passProps: {},
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
