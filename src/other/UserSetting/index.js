import React, { Component } from 'react';
import { Text, TouchableHighlight, TextInput, View, Image, SectionList, Dimensions, Animated, Keyboard  } from 'react-native';
import styles from './style'
import { connect } from 'react-redux'


const { width, height } = Dimensions.get('window');


class userSettingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.imageHeight = new Animated.Value(300);
  }

  componentDidMount() {

  }

  componentWillMount () {
    this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow.call(this));
    this.keyboardDidHide = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide.call(this));
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
    // console.log(listData)
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
          ItemSeparatorComponent={(o) => (<View key="f"/>)/*   列表每项间隔    */}
          SectionSeparatorComponent={(o) => (<View key="f"/>)/*   列表分类间隔    */}
        />
      </View>
    );
  }
  _renderItem({ index, item, section }) {
    let { dispatch } = this.props
    // console.log(item)
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
}

export default connect((state) => ({...state.userSetting}))(userSettingPage)