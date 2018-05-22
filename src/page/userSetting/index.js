import React, { Component } from 'react';
import { Text, TouchableHighlight, TextInput, View, Image, SectionList, Dimensions, Animated, Keyboard  } from 'react-native';
import styles from './style'
import { connect } from 'react-redux'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ac from './action'
const { width, height } = Dimensions.get('window');


class userSettingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.imageHeight = new Animated.Value(300);
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      drawerLabel: 'Notifications',
    }
  };

  componentDidMount() {

  }

  componentWillMount () {
    this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow.call(this));
    this.keyboardDidHide = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide.call(this));
  }


  _onPressButton() {
    this.props.navigation.navigate('Product', {
      itemId: 87,
      otherParam: 'anything you want here',
    })
  }
  componentWillUnmount() {
    this.keyboardDidShow.remove();
    this.keyboardDidHide.remove();
    // this._onPressButton.remove();
  }
  keyboardWillShow = (event) => {
    let { logo } = this.state

    this.setState({logo})
    Animated.timing(this.imageHeight, {
      duration: 200,
      toValue: 200,
    }).start();
  };

  keyboardWillHide = (event) => {
    let { logo } = this.state
    this.setState({logo})
    Animated.timing(this.imageHeight, {
      duration: 200,
      toValue: 300,
    }).start();
  };

  render() {
    let { listData } = this.props
    console.log(listData)
    return (
      <View style={styles.container}>
        <View
          title="Go to Details"
          onPress={() => this.props.navigation.goBack()}
        >
          <Animated.View style={[styles.userCard, { height: this.imageHeight }]}>
            <Image
              style={{width: 60, height: 60, borderRadius: 30}}
              source={require('../../../assets/images/a1.jpg')}/>
            <Text style={styles.label}>张女士</Text>
          </Animated.View>
        </View>
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
  _renderItem({ index, item, section }) {
    let { dispatch } = this.props
    console.log(item)
    return (
      <View
        title="Go to Details"
        onPress={() => this.props.navigation.goBack()}
      >
        <View style={styles.list}>
          <Text style={styles.label}>{item.title}：</Text>
          <TextInput style={styles.text} underlineColorAndroid="transparent" value={item.value} onChangeText={(text) => dispatch({type: item.title, text, title: item.title})}/>
          <Text style={styles.goto}></Text>
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

export default connect((state) => ({...state.userSetting}))(userSettingPage)