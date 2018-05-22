import React, { Component } from 'react';
import { Text, FlatList, TextInput, View, Image, TouchableNativeFeedback, Dimensions } from 'react-native';
import styles from './style'
import Icon from 'react-native-vector-icons/dist/EvilIcons';
const { width, height } = Dimensions.get('window');


const listData1 = [
  {key: 'test1', title: '就诊医院', text: '三桥'},
  {key: 'test2', title: '医生姓名', text: '张三医生'},
  {key: 'test3', title: '门诊类型', text: '主任医师'},
  {key: 'test4', title: '就诊日起', text: '2015、12、12'},
  {key: 'test5', title: '挂号费用', text: '￥1254'},
]
const listData2 = [
  {key: 'test6', title: '就诊患者', text: '李四'},
  {key: 'test7', title: '证件号码', text: '61055476285985224885225562'},
  {key: 'test8', title: '联系电话', text: '186524785284'},
  {key: 'test9', title: '手机验证码', text: '1865'},
]
export default class extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    // console.log(navigationOptions)
    return {
      headerTitle: function() {
        return (
          <View style={{width: width - 120, height: 50, alignItems: 'center', justifyContent: 'center',}}>
            <Text>
              专家主页
            </Text>
          </View>
        )
      },
    }
  };
  componentDidMount() {

  }
  _onPressButton() {
    this.props.navigation.navigate('Product', {
      itemId: 87,
      otherParam: 'anything you want here',
    })
  }
  componentWillUnmount() {
    // this._onPressButton.remove();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.aa}>
          <FlatList
            style={{width, marginBottom: 15, paddingTop: 15}}
            data={listData1}
            renderItem={() => this._renderCardItem()}
          />
        </View>
        <View style={styles.contaer}>
          <FlatList
            keyboardShouldPersistTaps="always"
            style={{width, height: height - 200}}
            data={listData2}
            renderItem={() => this._renderItem()}
          />
        </View>
      </View>
    );
  }

  _renderCardItem(option) {
    return (
      <View style={styles.cardList}>
        <View style={styles.label}>
          <Text style={[styles.labelFont, {lineHeight: 40}]}>{option.item.title}</Text>
        </View>
        <View style={styles.content}><Text style={styles.contentFont}>{option.item.text}</Text></View>
      </View>
    )
  }
  _renderItem(option) {
    return (
      <View style={styles.list}>
        <View style={styles.label}>
          <Text style={styles.labelFont}>{option.item.title}</Text>
        </View>
        <View style={styles.content}>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.contentFont}
            placeholder={option.item.text}
          />
        </View>
      </View>
    )
  }
  _sectionComp() {
    return (
      <View style={{height: 10}}/>
    )
  }
  _extraUniqueKey(option) {
    return option.title
  }
}

