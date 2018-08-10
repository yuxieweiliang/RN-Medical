import React, { Component } from 'react';
import {  TextInput, View, Image, ScrollView,  KeyboardAvoidingView, Keyboard, findNodeHandle } from 'react-native';
import { Container, Content, Button, Icon, Text, Item, Input, Left, Right, Label } from 'native-base';
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import behavior from './behavior'
import { postUser } from '../../reducers/user/actions'
import styles from './style'

const InputList = ({title, onChangeText, value, placeholder, isRequest, onFocus, onBlur}) => {
  return (
    <View
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

class UserMessagePage extends Component {
  constructor(props) {
    super(props)
    /*Icon.getImageSource('plus', 24).then(res => {

      // 添加 保存 按钮
      this.props.navigator.setButtons({
        rightButtons: [{
          title: '保存',
          id: 'saveUserMessage'
        }],
        animated: true
      });

      // 为保存按钮添加点击事件
      this.props.navigator.setOnNavigatorEvent(
        this.onNavigatorEvent.bind(this)
      );
    });*/
  }

  /**
   * 点击右上角保存按钮 -》 保存用户信息
   * @param event
   */
  onNavigatorEvent(event) {
    const { dispatch, user } = this.props
    if(event.id === 'saveUserMessage') {

      // 保存数据
      dispatch(postUser(user))

      // 返回
      this.props.navigator.pop();
    }
  }
  componentDidMount() {}

  /**
   * 组件渲染之前，添加键盘事件
   */
  componentWillMount() {

    // 当键盘收起之后，显示底部导航
    this.keyboardDidHideSub = Keyboard
      .addListener('keyboardDidHide',
        this.keyboardDidHide.bind(this));
  }

  /**
   * 显示底部导航
   */
  keyboardDidHide() {
    this.timer = setTimeout(() => {
      this.props.navigator.toggleTabs({
        to: 'show',
        animated: false
      })
    })
    this.scroll.scrollTo({
      x:0,
      y: 0
    })
  }

  /**
   * 组件即将卸载
   */
  componentWillUnmount() {
    this.keyboardDidHideSub.remove();
  }

  /**
   * 改变组件内容
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
   * 当input获取焦点的时候，隐藏底部菜单
   */
  inputFocus() {
    clearTimeout(this.timer)
    this.props.navigator.toggleTabs({
      to: 'hidden',
      animated: false
    })
  }
  _scrollToInput (reactNode: any) {
    // Add a 'scroll' ref to your ScrollView

    // console.log(this.scroll, reactNode)
    this.scroll.scrollTo({
      x:0,
      y: reactNode
    })
  }
  render() {
    const { user } = this.props
    const userStructure = behavior.createStructure(user)


    return (
      <Container
        behavior="padding">

        <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          scrollEnabled={false} // 不允许用户滑动
          innerRef={ref => {this.scroll = ref}}
          onKeyboardWillShow={(frames: Object) => {
            console.log('Keyboard event', frames)
          }}
        >
          <View>
            <View style={styles.userCard}>
              <Image
                style={{width: 60, height: 60, borderRadius: 30}}
                source={require('../../../assets/images/a1.jpg')}/>
              <Text style={styles.label}>{user && user.UserName}</Text>
            </View>
          </View>
          {
            userStructure && (
              userStructure.map((items, key) => {
                console.log(items.key)
                return (
                <Item key={items.key+ key} style={{paddingLeft: 10, paddingRight: 10}}>
                  <Text style={{width: 100}}>{items.title}：</Text>
                  <Input
                    style={{flex: 1}}
                    onFocus={(event: Event) => this._scrollToInput(findNodeHandle(event.target))}
                    title={items.title}
                    value={items.value}
                    onChangeText={(text) => this.onChangeText(text, key)}
                    placeholder="请输入"
                  />
                </Item>

                )
              })
            )
          }
        </KeyboardAwareScrollView>
      </Container>
    );
  }
}

const createState = state => {
  return {
    ...state.user
  }
}
export default connect(createState)(UserMessagePage)