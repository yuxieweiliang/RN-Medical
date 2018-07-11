import React, { Component } from 'react';
import { Text, TouchableHighlight, TextInput, View, Image, ScrollView, Dimensions, KeyboardAvoidingView, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import behavior from './behavior'
import styles from './style'
const { width, height } = Dimensions.get('window');


const InputList = ({title, onChangeText, value, placeholder, isRequest, onFocus, onBlur}) => {
  return (
    <View
      title="Go to Details"
      onPress={() => this.props.navigation.goBack()}
    >
      <View style={styles.list}>
        <Text style={styles.label}>{title}：</Text>
        <TextInput
          style={styles.text}
          onFocus={onFocus}
          onBlur={onBlur}
          onChangeText={onChangeText}
          placeholder={placeholder}
          underlineColorAndroid="transparent"
          defaultValue={value}/>
        <Text style={styles.goto}>
          {
            isRequest ? '*' : ''
          }
        </Text>
      </View>
    </View>
  )
}

class UserMessagePage extends React.Component {
  constructor(props) {
    super(props)
    Icon.getImageSource('plus', 24).then(res => {
      this.props.navigator.setButtons({
        rightButtons: [{
          title: '保存',
          id: 'saveUserMessage'
        }],
        animated: true
      });
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    });

  }
  onNavigatorEvent(event) {
    const { dispatch, user } = this.props
    if(event.id === 'saveUserMessage') {
      // 保存数据
      dispatch(behavior.saveUserMessage(user))
      // 返回
      this.props.navigator.pop();
      console.log('fffffffffffffffff', event)
    }
  }
  componentDidMount() {

  }

  componentWillMount() {
    const { dispatch } = this.props

    // 当键盘收起之后，显示底部导航
    this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this));
  }

  /**
   * 显示底部导航
   */
  keyboardDidHide() {
    this.timer = setTimeout(() => this.props.navigator.toggleTabs({
      to: 'show',
      animated: false
    }))
  }

  /**
   * 组件即将卸载
   */
  componentWillUnmount() {
    this.keyboardDidHideSub.remove();
  }

  /**
   * 改变组件内容
   * @param text
   * @param key
   */
  onChangeText(text, key) {
    const { dispatch } = this.props
    dispatch({
      type: 'CHANGE_USER_MESSAGE',
      text,
      key
    })
  }

  /**
   * 保存组件数据
   */
  saveUserMessage() {

/*    if (!this._contextualMenu) {
      this.props.navigator.showContextualMenu({
        leftButtons: [],
        rightButtons: [{
          title: 'Edit',
          icon: require('../../../img/edit.png')
        }, {
          title: 'Delete',
          icon: require('../../../img/delete.png')
        }],
        onButtonPressed: (index) => console.log(`Button ${index} tapped`)
      });
      this._contextualMenu = true;
    } else {
      this.props.navigator.dismissContextualMenu();
      this._contextualMenu = false;
    }*/

    //
  }

  /**
   * 当input获取焦点的时候，隐藏底部菜单
   */
  inputFocus() {
    clearTimeout(this.timer)
    this.props.navigator.toggleTabs({
      to: 'hidden',
      animated: false
    })
  }

  render() {
    const { user = {} } = this.props
    const userStructure = behavior.createStructure(user)

    return (
      <KeyboardAvoidingView
        behavior="padding">
        <ScrollView
          keyboardShouldPersistTaps="handled"
          onScroll={(e) => console.log(e.nativeEvent)}>

          <View
            title="Go to Details"
            onPress={() => this.props.navigation.goBack()}
          >
            <View style={styles.userCard}>
              <Image
                style={{width: 60, height: 60, borderRadius: 30}}
                source={require('../../../assets/images/a1.jpg')}/>
              <Text style={styles.label}>{user.UserName}</Text>
            </View>
          </View>
          {
            userStructure && (
              userStructure.map((items, key) => {
                return (
                  <InputList
                    key={items.key+ key}
                    onFocus={this.inputFocus.bind(this)}
                    title={items.title}
                    value={items.value}
                    onChangeText={(text) => this.onChangeText(text, key)}
                    placeholder="请输入"
                  />
                )
              })
            )
          }
          <TouchableHighlight
            onPress={() => this.saveUserMessage()}>
            <Text>保存</Text>
          </TouchableHighlight>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const createState = state => {
  return {
    ...state.user
  }
}
export default connect(createState)(UserMessagePage)