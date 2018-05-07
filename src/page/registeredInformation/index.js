import React, { Component } from 'react';
import { Text, SectionList, StatusBar, View, Image, TouchableNativeFeedback, Dimensions } from 'react-native';
import styles from './style'
import Icon from 'react-native-vector-icons/dist/EvilIcons';
const { width, height } = Dimensions.get('window');


const listData = [
  {key: 'test', data: [
    {title: '就诊医院', text: '三桥'},
    {title: '医生姓名', text: '张三医生'},
    {title: '门诊类型', text: '主任医师'},
    {title: '就诊日起', text: '2015、12、12'},
    {title: '挂号费用', text: '￥1254'},
  ]},
  {key: 'history', data: [
    {title: '就诊患者', text: '李四'},
    {title: '证件号码', text: '61055476285985224885225562'},
    {title: '联系电话', text: '186524785284'},
    {title: '手机验证码', text: '1865'},
  ]},

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
        <SectionList
          style={{width, height: height - 200}}
          sections={listData}
          renderItem={(o) => this._renderItem(o)}
          renderSectionHeader={(o) => this._sectionComp(o)}
          keyExtractor = {(o) => this._extraUniqueKey(o)}
          ItemSeparatorComponent={(o) => this._renderSeparator(o)/*   列表每项间隔    */}
          SectionSeparatorComponent={(o) => this._renderSectionSeparator(o)/*   列表分类间隔    */}

          ListHeaderComponent={() => this._renderHeader()}

          ListFooterComponent={() => this._renderFooter()}
        />

      </View>
    );
  }
  // 列表每一项之间的间隔
  _renderSeparator(option) {
    return (
      <View key="f"/>
    )
  }
  // 列表头部
  _renderHeader(option) {
    return (
      <View/>
    )
  }
  // 列表底部
  _renderFooter(option) {
    return (
      <View/>
    )
  }
  // 列表分组上下间隔
  _renderSectionSeparator(option) {
    return (
      <View key="f"/>
    )
  }
  _renderItem(option) {
    console.log(option.item.icon)

    return (
      <TouchableNativeFeedback
        title="Go to Details"
        onPress={() => this.props.navigation.goBack()}
      >
        <View style={styles.list}>
          <Text style={styles.label}>{option.item.title}</Text>
          {
            option.item.icon ? option.item.icon : <Icon name="chevron-right" style={{fontSize: 40}}/>
          }
        </View>
      </TouchableNativeFeedback>
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

