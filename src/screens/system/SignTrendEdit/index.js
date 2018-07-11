import React, { Component } from 'react';
import { Text, TouchableHighlight, TextInput, View, Image, TouchableNativeFeedback, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import signAction from '../../../reducers/sign/actions'
import styles from './style'
import moment from 'moment'


const EditInput = ({title, value, placeholder, onPress, onFocus, onBlur}) => (
  <View style={styles.list}>
    <Text style={styles.label}>{title}：</Text>
    <TextInput
      style={styles.text}
      underlineColorAndroid="transparent"
      defaultValue={value}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholder={placeholder}
      onChangeText={onPress}
    />
    <Text style={styles.goto}>*</Text>
  </View>
)

class SignTrendEdit extends React.Component {
  constructor(props) {
    super(props)
    const { navigator, dispatch } = this.props;
    /**
     * 点击右上角按钮执行函数
     */
    navigator.setOnNavigatorEvent((e) => {
      if (e.type === 'NavBarButtonPress') {
        if (e.id === 'save') {
          this.addSign()
        }
      }
    });
  }

  componentDidMount() {
  }
  componentWillUnmount() {
    // this._onPressButton.remove();
  }
  addSign() {
    const { dispatch, sign } = this.props
    dispatch(signAction.postSign(sign))
  }
  signItemChange(value, key) {
    const { dispatch, navigator } = this.props

    dispatch({
      type: 'SIGN_ITEM_CHANGE',
      data: { key, value }
    })
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
  render() {

    return (

      <View style={styles.container}>

        <EditInput
          title="血压（高）"
          value=""
          placeholder="请输入"
          onFocus={this.inputFocus.bind(this)}
          onBlur={this.inputBlur.bind(this)}
          onPress={(e) => this.signItemChange(e, 'XYH')}
        />
        <EditInput
          title="血压（低）"
          value=""
          placeholder="请输入"
          onFocus={this.inputFocus.bind(this)}
          onBlur={this.inputBlur.bind(this)}
          onPress={(e) => this.signItemChange(e, 'XYL')}
        />

        <EditInput
          title="血氧"
          value=""
          placeholder="请输入"
          onFocus={this.inputFocus.bind(this)}
          onBlur={this.inputBlur.bind(this)}
          onPress={(e) => this.signItemChange(e, 'XY')}
        />

        <EditInput
          title="呼吸"
          value=""
          placeholder="请输入"
          onFocus={this.inputFocus.bind(this)}
          onBlur={this.inputBlur.bind(this)}
          onPress={(e) => this.signItemChange(e, 'HX')}
        />

        <EditInput
          title="心率"
          value=""
          placeholder="请输入"
          onFocus={this.inputFocus.bind(this)}
          onBlur={this.inputBlur.bind(this)}
          onPress={(e) => this.signItemChange(e, 'XL')}
        />

        <EditInput
          title="体温"
          value=""
          placeholder="请输入"
          onFocus={this.inputFocus.bind(this)}
          onBlur={this.inputBlur.bind(this)}
          onPress={(e) => this.signItemChange(e, 'TW')}
        />

        <EditInput
          title="脉搏"
          value=""
          placeholder="请输入"
          onFocus={this.inputFocus.bind(this)}
          onBlur={this.inputBlur.bind(this)}
          onPress={(e) => this.signItemChange(e, 'MB')}
        />
      </View>
    );
  }
}

export default connect(state => ({...state.user.sign}))(SignTrendEdit)