import React,{ Component } from 'react';
import { View, Text } from 'react-native'
import registerScreens from './screens';
import {Navigation} from 'react-native-navigation';
import { Theme } from "native-base-shoutem-theme"; // 主题
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import { Provider } from "react-redux";
import * as appActions from "./reducers/app/actions";
import store from './reducers'

// redux related book keeping
registerScreens(store, Provider);

const navigatorStyle = {
  drawUnderNavBar:true,
  navBarTextColor: 'white',
  navBarButtonColor: 'white',
  statusBarTextColorScheme: 'light',
  statusBarColor:'#000',
};
export default class App extends Component{
  constructor(props) {
    super(props);
    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch(appActions.appInitialized());
    Theme.setDefaultThemeStyle(getTheme(platform));
  }

  onStoreUpdate() {
    const { root } = store.getState().app;
    // handle a root change
    // if your app doesn't change roots in runtime, you can remove onStoreUpdate() altogether
    if (this.currentRoot !== root) {
      this.currentRoot = root;
      this.startApp(root);
    }
  }
  startApp(root) {

    console.log('-----------------', root, root === 'login')
    if(root === 'login') {
      Navigation.startSingleScreenApp({
        screen: {
          screen: 'Koe.Login',
          title: '登录',
          navigatorStyle: {
            ...navigatorStyle,
            statusBarTextColorScheme: 'dark',
            navBarBackgroundColor:'#444',
            navBarHidden:true
          }
        },
        appleStyle:{
          statusBarColor:'#fff',
        }
      });
    } else {
      Navigation.startTabBasedApp({
        tabs: [
          {
            label: 'One',
            screen: 'Koe.AppHome', // this is a registered name for a screen
            icon: require('../img/one.png'),
            selectedIcon: require('../img/one_selected.png'), // iOS only
            // navigatorButtons: <View><Text>fdsafdsa</Text></View>,
            /*title: (
             <View><Text>fdsafdsa</Text></View>
             ),*/
            title: "主页",
            rightButtons: [
              { id: 'cart', icon: require('../img/one.png') },
              { id: 'account', icon: require('../img/one.png') }
            ]
          },
          {
            label: 'Two',
            screen: 'Koe.Consult',
            icon: require('../img/two.png'),
            selectedIcon: require('../img/two_selected.png'), // iOS only
            title: 'Screen Two',
            rightButtons: [{ id: 'account', icon: require('../img/one.png') }],

          }
        ],
        /*drawer: {
         left: { // optional, define if you want a drawer from the left
         screen: 'Koe.DrawerView', // unique ID registered with Navigation.registerScreen
         passProps: {}, // simple serializable object that will pass as props to all top screens (optional),
         fixedWidth: 200, // a fixed width you want your left drawer to have (optional)
         },
         }*/
      });
    }
  }
}
