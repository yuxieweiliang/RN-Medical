import React, { Component } from 'react';
import { Text, TouchableHighlight, TouchableOpacity, View, ScrollView, Image, Dimensions } from 'react-native';
import styles from './style'
const { width, height } = Dimensions.get('window');

type Props = {};
class List extends Component<Props> {
  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    const {
      avatar,
      activeOpacity=.95,
      listStyle,
      underlayColor,
      title,
      description,
      horizontal= true, // 这里的横竖是指卡片与文字的关系，不是列表的关系
      listTextStyle,
      children
    } = this.props
    let listTextBox = horizontal ? styles.listTextBox_row : styles.listTextBox_column
    let list = horizontal ? styles.list_row : styles.list_column
    // console.log(horizontal)
    function createTitle(text) {
      return (
        <Text style={styles.listTextTitle}>
          {text}
        </Text>
      )
    }
    return (
      <TouchableOpacity
        activeOpacity={activeOpacity}
        style={[styles.list, listStyle, list]}
        underlayColor={underlayColor}>
        { avatar && <Image source={avatar} style={styles.avatar}/> }
        <View style={[styles.listTextBox, listTextBox]}>
          {
            title ? createTitle(title) : <View/>
          }
          <Text style={[styles.listText, listTextStyle]}>
            {description}
          </Text>
        </View>
        {children}
      </TouchableOpacity>
    );
  }
}
export default List