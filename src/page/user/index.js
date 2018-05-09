import React, { Component } from 'react';
import { Text, SectionList, StatusBar, View, Image, TouchableNativeFeedback, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/dist/EvilIcons';
import styles from './style'


const { width, height } = Dimensions.get('window');

class UserPage extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { headerLeft, headerRight, headerTitle } = navigationOptions;
    const { params } = navigation.state;
    // console.log(navigationOptions)
    return {
      headerLeft: headerLeft && headerLeft(navigation, navigationOptions),
      headerRight: headerRight && headerRight(navigation, navigationOptions),
      headerTitle: headerTitle && headerTitle(navigation, navigationOptions, '个人'),
      // title: <View><Icon name="home"/><Text>我的</Text></View>,
      // tabBarVisible: false,
    }
  };
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
  render() {
    const { userListData } = this.props

    console.log(this.props.navigation)
    console.log(this.props.navigation.getParam('text'))
    return (
      <View style={styles.container}>
        <SectionList
          style={{width, height: height - 200}}
          sections={userListData}
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
  _renderItem({ index, item, section }) {
    let { navigation } = this.props
    return (
      <TouchableNativeFeedback
        title="Go to Details"
        onPress={() => navigation.navigate(item.type)}
      >
        <View style={styles.list}>
          <Text style={styles.label}>{item.title}</Text>
          {
            item.icon
              ? item.icon
              : (
              <Icon
                name="chevron-right"
                style={{fontSize: 40}}
              />
            )
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
export default connect((state) => ({...state.user}))(UserPage)