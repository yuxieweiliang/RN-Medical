import React, { Component } from 'react';
import { Text, TouchableHighlight, TextInput, View, Image, TouchableNativeFeedback, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import { postUserInfo, changeSignItem } from '../../../reducers/sign/actions'
import styles from './style'
import { typeOf } from '../../../utils'
import moment from 'moment'


const EditInput = ({title, defaultValue, placeholder = '请输入', onChangeText, onFocus, onBlur}) => (
  <View style={styles.list}>
    <Text style={styles.label}>{title}：</Text>
    <TextInput
      style={styles.text}
      underlineColorAndroid="transparent"
      defaultValue={defaultValue}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
    <Text style={styles.goto}>*</Text>
  </View>
)

class SignTrendEdit extends React.Component {
  constructor(props) {
    super(props)
    const { navigator, dispatch } = this.props;
    this.props.navigator.setButtons({
      rightButtons: [{
        title: '保存',
        id: 'saveTrend'
      }],
      animated: true
    });
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }
  /**
   * 点击右上角按钮执行函数
   */
  onNavigatorEvent(e) {
    const { dispatch, sign, user } = this.props
    let keys = ['HX', 'MB', 'TW', 'XL', 'XY', 'XYH', 'XYL'] // 'XYBHD',
    if (e.type === 'NavBarButtonPress') {
      if (e.id === 'saveTrend') {

        if(!sign) {
          return;
        }


        for(let i in keys) {
          let key = keys[i]
          console.log(sign[key])
          if((sign[key] * 1) !== (sign[key] * 1)) {
            alert('必须是数值')
            return
          }
        }

        dispatch(postUserInfo(sign, user))
      }
    }

  }
  componentDidMount() {
  }
  componentWillUnmount() {
    // this._onPressButton.remove();
  }

  signItemChange(value, key) {
    const { dispatch, navigator } = this.props

    dispatch(changeSignItem({ key, value }))
  }
  inputFocus() {
    this.props.navigator.toggleTabs({
      to: 'hidden', // required, 'hidden' = hide tab bar, 'shown' = show tab bar
      animated: true // does the toggle have transition animation or does it happen immediately (optional)
    })
    /**
     *
     */
  }
  inputBlur() {
    this.props.navigator.toggleTabs({
      to: 'show', // required, 'hidden' = hide tab bar, 'shown' = show tab bar
      animated: true // does the toggle have transition animation or does it happen immediately (optional)
    })
  }

  _toString(string) {
    return string ? string + '' : ''
  }
  render() {
    const { sign } = this.props
    console.log(sign)

    return (

      <View style={styles.container}>

        <EditInput
          title="血压（高）"
          defaultValue={this._toString(sign.XYH)}
          onFocus={this.inputFocus.bind(this)}
          onBlur={this.inputBlur.bind(this)}
          onChangeText={(text) => this.signItemChange(text, 'XYH')}
        />
        <EditInput
          title="血压（低）"
          defaultValue={this._toString(sign.XYL)}
          onFocus={this.inputFocus.bind(this)}
          onBlur={this.inputBlur.bind(this)}
          onChangeText={(text) => this.signItemChange(text, 'XYL')}
        />

        <EditInput
          title="血氧"
          defaultValue={this._toString(sign.XY)}
          onFocus={this.inputFocus.bind(this)}
          onBlur={this.inputBlur.bind(this)}
          onChangeText={(text) => this.signItemChange(text, 'XY')}
        />

        <EditInput
          title="呼吸"
          defaultValue={this._toString(sign.HX)}
          onFocus={this.inputFocus.bind(this)}
          onBlur={this.inputBlur.bind(this)}
          onChangeText={(text) => this.signItemChange(text, 'HX')}
        />

        <EditInput
          title="心率"
          defaultValue={this._toString(sign.XL)}
          onFocus={this.inputFocus.bind(this)}
          onBlur={this.inputBlur.bind(this)}
          onChangeText={(text) => this.signItemChange(text, 'XL')}
        />

        <EditInput
          title="体温"
          defaultValue={this._toString(sign.TW)}
          onFocus={this.inputFocus.bind(this)}
          onBlur={this.inputBlur.bind(this)}
          onChangeText={(text) => this.signItemChange(text, 'TW')}
        />

        <EditInput
          title="脉搏"
          defaultValue={this._toString(sign.MB)}
          onFocus={this.inputFocus.bind(this)}
          onBlur={this.inputBlur.bind(this)}
          onChangeText={(text) => this.signItemChange(text, 'MB')}
        />
      </View>
    );
  }
}

export default connect(state => ({...state.sign, ...state.user}))(SignTrendEdit)