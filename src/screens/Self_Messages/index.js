import React, { Component } from 'react';
import {  TextInput, View, Image, ScrollView,  TouchableOpacity, Keyboard, findNodeHandle } from 'react-native';
import { Container, Content, Button, Icon, Text, Item, Input, Left, Right, List } from 'native-base';
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import behavior from './behavior'
import ImagePicker from 'react-native-image-crop-picker';
import { appInitialized } from '../../reducers/app/actions'
import { saveAndUpdateUser, postUserPortrait } from '../../reducers/patient/actions'
import styles from './style'
import { getToken } from '../../utils/_utils'
import { router } from '../../config'


class UserMessagePage extends Component {
  static navigatorStyle = {
    ...router.navigatorStyle,
    statusBarColor: '#3f51b5',
    navBarButtonColor: '#fff',
    navBarTextColor: '#fff',
    navigationBarColor: '#3f51b5',
    navBarBackgroundColor: '#3f51b5',
    navBarHidden: false,
    tabBarHidden: true,
  }
  static navigatorButtons = {
    rightButtons: [
      {
        title: '完成',
        id: 'saveUserMessage',
        buttonColor: 'white',
        buttonFontSize: 14,
        buttonFontWeight: '600',
      },
    ]
  };
  constructor(props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

    this.state = {}
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
    const { dispatch, patient } = this.props
    console.log(global)
    if(event.id === 'saveUserMessage') {
      const user = getToken(global.token.access_token)
      const option = {UserID: user.UserID, MerchantID: user.MID}

      // 保存数据
      dispatch(saveAndUpdateUser({...patient, ...option, ...this.state.user }))
        .then(res => {
          if(patient.ID >= 0) {
            // 返回
            this.props.navigator.pop();
          } else {
            dispatch(appInitialized('app'))
          }
        })

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
    this.setState({
      user: {
        ...this.state.user,
        [key]: text,
      }
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
  /**
   * 打开相册
   */
  handleImagePicker() {
    const { dispatch, patient } = this.props
    // console.log(user)

    ImagePicker.openPicker({
      mediaType: 'photo',
      loadingLabelText: '请稍候...'
    }).then(image => {
      /*let data = new FormData();
      let file = { uri: image.path, type: "multipart/form-data", name: "image.png" };
      data.append("imgFile", file);*/

      console.log('用户头像: ', image.path)
      dispatch(postUserPortrait(image.path))
        .then(res => {
          if(res) {
            console.log('保存用户头像: ', res)
            // 保存用户头像
            dispatch(saveAndUpdateUser({ ...patient, ImageUrl: res, MerchantID: 1001 }))

          }
        })


      /*fetch('http://fileserver.api.koenn.cn:81/api/UserMainImages/UploadUserHead', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1MzE3OTk2MDYsImV4cCI6MTUzMzA5NTYwNiwiaXNzIjoiaHR0cDovL2F1dGgua29lbm4uY246ODEiLCJhdWQiOiJodHRwOi8vYXV0aC5rb2Vubi5jbjo4MS9yZXNvdXJjZXMiLCJjbGllbnRfaWQiOiJBUFBDbGllbnQiLCJzdWIiOiJhZG1pbiIsImF1dGhfdGltZSI6MTUzMTc5OTYwNiwiaWRwIjoibG9jYWwiLCJJRCI6IjEiLCJVc2VySUQiOiI4Nzc1NTQzMTEwOTU4NzgxNzgiLCJNSUQiOiIxMDAxIiwiRW1pYWwiOiIwIiwiTG9naW5OYW1lIjoiYWRtaW4iLCJNb2JpbGVQaG9uZSI6IjAiLCJXWF9JRCI6IjAiLCJOaWNrTmFtZSI6IjAiLCJSb2xlIjpbIkFkbWluIiwiTG9naW4iLCJNZXJBZG1pbiJdLCJzY29wZSI6WyJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsiY3VzdG9tIl19.ON6Jv0VwMzThMqH85CRKHTdonmEgUx42cvWO7HAsbUsLvItExDx62MRbPcpQjoJALq4W7j_RTNXqIdj57Bk2dYfUl4qnU1Ej8Rq-eoiIoUZHfj9VtPXLFvzRpDDHTcvA6UcWVqeWjig5gWzNojmLq7WwQ61EydLwxnOoEKpUjagPdSLooXsEllxRNiH6LpAejQI-_rgcAqa13ttKEMyyXko-QgOhd_8oVD3N4A83XsWAVHqP8EP_DHSuFNVyT3NrShw6j6qIdeltu9mQYlgiLf8JB0WLMD7EfCgj10-QPgnw5tHsiEODATybeRbbQUyhX4ls9063ZkF82lzCU3KhvA',
          'Content-Type': 'multipart/form-data;charset=utf-8',
        },
        body: data
      }).then(res => {
        // console.log(res, "myImg");
      })*/
      // console.log(image.path, "myName");
    });
  }

  render() {
    const { patient } = this.props
    const userStructure = behavior.createStructure(patient)


    console.log(this.props)
    return (
      <Container
        behavior="padding" style={{backgroundColor: '#fafafa'}}>

        <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          scrollEnabled={false} // 不允许用户滑动
          innerRef={ref => {this.scroll = ref}}
          onKeyboardWillShow={(frames: Object) => {
            // console.log('Keyboard event', frames)
          }}
        >
          <View style={styles.userCard}>
            <TouchableOpacity  onPress={() => this.handleImagePicker()}>
              <Image
                style={{width: 60, height: 60, borderRadius: 30}}
                source={require('../../../assets/images/a1.jpg')}/>
              <Text style={styles.label}>{patient && patient.UserName}</Text>
            </TouchableOpacity>
          </View>
         {/* <List>
            <Item key={items.key+ key} style={{paddingLeft: 10, paddingRight: 10}}>
              <Text style={{width: 100}}>姓名：</Text>
              <Input
                style={{flex: 1}}
                onFocus={(event: Event) => this._scrollToInput(findNodeHandle(event.target))}
                title={patient.title}
                value={patient.value}
                onChangeText={(text) => this.onChangeText(text, key)}
                placeholder="请输入"
              />
            </Item>
          </List>*/}

          {
            userStructure && (
              userStructure.map((items, key) => {
                // console.log(items.key)
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
    ...state.patient
  }
}
export default connect(createState)(UserMessagePage)