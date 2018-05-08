import React, { Component } from 'react';
import DrawerView from './DrawerNavigator'
import Swiper from '../InitSwiper'


type Props = {};
export default class App extends Component<Props> {
  state = {
    init: false,
  }

  _onPressButton() {
    this.setState({init: false})
  }

  _changeIndex(index) {
    var _this = this
    if(index === 2) {
      setTimeout(function() {
        _this.setState({init: false})
      }, 4000)
    }
  }

  render() {
    const { init } = this.state

    if(init) {
      // 如果是第一次，就显示欢迎界面
      return <Swiper
        // 在完成时执行
        afterSwiper={() => this._onPressButton()}
        // 页面变化时执行
        changeIndex={(i) => this._changeIndex(i)}/>
    } else {

      // 否则进入APP
      return <DrawerView/>
    }
  }
}