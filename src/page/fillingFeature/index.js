import React, { Component } from 'react';
import { Text, TouchableHighlight, TextInput, View, Image, TouchableNativeFeedback, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import behavior from './behavior'
import signAction from '../../action/sign'
import styles from './style'


const EditInput = ({title, value, placeholder, onPress}) => (
  <View style={styles.list}>
    <Text style={styles.label}>{title}：</Text>
    <TextInput
      style={styles.text}
      underlineColorAndroid="transparent"
      defaultValue={value}
      placeholder={placeholder}
      onChangeText={onPress}
    />
    <Text style={styles.goto}>*</Text>
  </View>
)

class FillingFeature extends React.Component {
  componentDidMount() {}

  _onPressButton() {
    this.props.navigation.navigate('Product', {
      itemId: 87,
      otherParam: 'anything you want here',
    })
  }
  componentWillUnmount() {
    // this._onPressButton.remove();
  }
  addSign() {
    const { dispatch } = this.props
    dispatch(signAction.postSign())
  }
  signItemChange(value, key) {
    const { dispatch } = this.props
    dispatch({
      type: 'SIGN_ITEM_CHANGE',
      data: { key, value }
    })
  }
  render() {
    console.log(this.props)
    return (

      <View style={styles.container}>

        <EditInput
          title="血压（高）"
          value=""
          placeholder="请输入"
          onPress={(e) => this.signItemChange(e, 'XYH')}
        />
        <EditInput
          title="血压（低）"
          value=""
          placeholder="请输入"
          onPress={(e) => this.signItemChange(e, 'XYL')}
        />

        <EditInput
          title="血氧"
          value=""
          placeholder="请输入"
          onPress={(e) => this.signItemChange(e, 'XY')}
        />

        <EditInput
          title="呼吸"
          value=""
          placeholder="请输入"
          onPress={(e) => this.signItemChange(e, 'HX')}
        />

        <EditInput
          title="心率"
          value=""
          placeholder="请输入"
          onPress={(e) => this.signItemChange(e, 'XL')}
        />

        <EditInput
          title="体温"
          value=""
          placeholder="请输入"
          onPress={(e) => this.signItemChange(e, 'TW')}
        />

        <EditInput
          title="脉搏"
          value=""
          placeholder="请输入"
          onPress={(e) => this.signItemChange(e, 'MB')}
        />
        <TouchableHighlight onPress={() => this.addSign()}><Text>添加</Text></TouchableHighlight>
      </View>
    );
  }
}

FillingFeature.navigationOptions = ({ navigation, navigationOptions }) => {
  const { params } = navigation.state;
  return {
    title: '体征填写',
  }
};

export default connect(state => ({}))(FillingFeature)