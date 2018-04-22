import React, { Component } from 'react';
import { Text, SectionList, StatusBar, View, Image, TouchableNativeFeedback, Dimensions } from 'react-native';
import styles from './style'
import Icon from 'react-native-vector-icons/dist/EvilIcons';
const { width, height } = Dimensions.get('window');

const iconTemp  = ()=> (
  <Image style={{width: 30, height: 30, borderRadius: 15, marginRight: 6}}source={require('../../../assets/images/a1.jpg')}/>
)

const listData = [
  {key: 'user', data: [
    {title: '张女士',icon: iconTemp() },
  ]},
  {key: 'test', data: [
    {title: '检查',},
    {title: '检验',},
  ]},
  {key: 'history', data: [
    {title: '预约床位',},
    {title: '咨询记录',},
    {title: '随访记录',},
    {title: '宣教记录',},
  ]},
  {key: 'myself', data: [
    {title: '我的账户',},
    {title: '推荐[智护康]给好友',},
    {title: '帮助中心',},
  ]},
]
export default class extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    // console.log(navigationOptions)
    return {
      headerLeft: navigationOptions.headerLeft(navigation, navigationOptions),
      headerRight: navigationOptions.headerRight(navigation, navigationOptions),
      headerTitle: navigationOptions.headerTitle(navigation, navigationOptions, '个人'),
      // title: <View><Icon name="home"/><Text>我的</Text></View>,
      // tabBarVisible: false,
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

