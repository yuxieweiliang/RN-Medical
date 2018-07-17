import React, { Component } from 'react';
import propTypes from 'prop-types'
import { Text, TouchableOpacity, View, TextInput, Dimensions } from 'react-native';
import styles from './style'
const { width, height } = Dimensions.get('window');

type Props = {
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  onChangeText: propTypes.func,
  placeholder: propTypes.string,
  style: propTypes.object,
  title: propTypes.string,
  value: propTypes.string,
  children: propTypes.object,
  isRequest: propTypes.bool,
};
class ListInput extends Component<Props> {
  static defaultProps = {
    onFocus: function() {},
    onBlur: function() {},
    onChangeText: function() {},
    placeholder: '请输入',
    style: null,
    title: null,
    value: null,
    children: null,
    isRequest: false,
  }
  createTitle(text) {
    const { title, titleStyle } = this.props
    return (
      <Text style={[styles.listTitle, titleStyle]}>
        {title}
      </Text>
    )
  }

  render() {
    const { onFocus, onBlur, onChangeText, style, value, placeholder, isRequest } = this.props
    return (
      <View
        style={[styles.container, style]}
      >
        {this.createTitle()}
        <View style={styles.list}>
          <TextInput
            style={styles.listInput}
            onFocus={onFocus}
            onBlur={onBlur}
            onChangeText={onChangeText}
            placeholder={placeholder}
            underlineColorAndroid="transparent"
            defaultValue={value}/>
        </View>
        <Text style={styles.request}>
          {
            isRequest ? '*' : ''
          }
        </Text>
      </View>
    );
  }
}
export default ListInput