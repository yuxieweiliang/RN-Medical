import {Container, Icon} from 'native-base';
import React from 'react';
import {
  Clipboard,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  NativeAppEventEmitter,
  NativeModules,
  Alert,
  Animated
} from 'react-native';
import Toast from 'react-native-simple-toast';
import {NimFriend, NimUtils, NimSession} from 'react-native-netease-im';
import ImagePicker from 'react-native-image-crop-picker';
import {MessageList,ChatInput} from 'react-native-imui';
import Svgs from '../../components/Svgs';
const ContainerHeightMax = 800;
const ContainerHeightMin = 800;
const ChatInputHeightMax = 300;
const ChatInputHeightMin = 56;
const ChatInputHeightBg = '#ffffff';
const AuroraIMUIModule = NativeModules.AuroraIMUIModule;
const AnimatedImplementation = require('react-native/Libraries/Animated/src/AnimatedImplementation');
const MessageListView = AnimatedImplementation.createAnimatedComponent(MessageList);
const InputView = AnimatedImplementation.createAnimatedComponent(ChatInput);


class Chat extends React.Component {
  static navigatorStyle = {
    tabBarHidden: true,
    navBarBackgroundColor: "#444",
    navBarButtonColor: "#fff",
    navBarTextColor: "#fff"
  };

  constructor(props) {
    super(props);
    const imagePath = '../../../assets/images'
    this.state = {
      isInitialized: false, // initialization will calculate maxHeight before rendering the chat
      canLoadMoreContent: true,
      currentMetering: 0,
      messages: [],
      lastMessage: undefined,
      showMenuBar: false,
      menuBarOrigin: {},
      menuItems: [],
      isPacketModalOpen: false,
      packetData: {},
      sendUser: {},
      selectMessage: {},
      menuContainerHeight: ContainerHeightMax,
      chatInputStyle: {
        backgroundColor: ChatInputHeightBg,
        width: width
      },
      chatInputheight:new Animated.Value(48),
      level: '', time: '', status: '',
      isDismissMenuContainer: false,
      initList: [],
    };
    this._loadMoreContentAsync = this._loadMoreContentAsync.bind(this);
    this.onSend = this.onSend.bind(this);
    this.props.navigator.setButtons({
      rightButtons: [{
        id: 'setting_team',
        icon: require(`${imagePath}/session_team.png`)
      }]
    });
    if (props.session && props.session.sessionType === '1') {
      this.props.navigator.setButtons({
        rightButtons: [{
          id: 'setting_team',
          icon: require(`${imagePath}/session_team.png`)
        }]
      });
    } else {
      this.props.navigator.setButtons({
        rightButtons: [{
          id: 'setting_user',
          icon: require(`${imagePath}/session_user.png`)
        }]
      });
    }
    this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
  }

  _onNavigatorEvent(event) {
    const {session, navigator} = this.props;
    let self = this;
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id == 'setting_team') { // this is the same id field from the static navigatorButtons definition
        navigator.push({
          screen: "ImDemo.SessionTeamDetail",
          title: '聊天信息',
          backButtonTitle: '返回',
          passProps: {
            session: session,
            onResult: function () {
              AuroraIMUIModule.clearMessage();
            }
          }
        });
      }
      if (event.id == 'setting_user') {
        navigator.push({
          screen: "ImDemo.SessionUserDetail",
          title: '聊天详情',
          passProps: {
            session: session,
            onResult: function () {
              AuroraIMUIModule.clearMessage();
            }
          }
        });
      }
    }
  }

  componentDidMount() {
    const {session = {}} = this.props;

    // console.log('新消息通知', this.props)
    NimSession.startSession(session.contactId, session.sessionType);
    this.sessionListener = NativeAppEventEmitter.addListener("observeReceiveMessage", (data) => {
      console.info('新消息通知', data);
      if (data && data.length > 0) {
        AuroraIMUIModule.appendMessages(data);
        AuroraIMUIModule.scrollToBottom();
      }

    });
    this.msgStatusListener = NativeAppEventEmitter.addListener("observeMsgStatus", (data) => {
      console.info('消息', data);
      if (data.length > 0) {
        if (data[0].status === 'send_sending') {
          AuroraIMUIModule.appendMessages(data);
        } else {
          for (var i in data) {
            AuroraIMUIModule.updateMessage(data[i]);
          }
        }
        AuroraIMUIModule.scrollToBottom();
      }

    });
    this.deleteMessageListener = NativeAppEventEmitter.addListener("observeDeleteMessage", (data) => {
      if (data.length > 0) {
        for (var i in data) {
          AuroraIMUIModule.deleteMessage(data[i]);
        }
      }
    });


    // 最近会话列表
    NimSession.getRecentContactList().then(res => {
      // console.log('getRecentContactList', res)
    })

    // 获取云端聊天记录
    NimSession.queryMessageListEx("", 20).then((data) => {
      console.info('首次加载', data);
      if (data.length > 0) {
        this._lastMessage = data[0];
        this.setState({initList:data});
        AuroraIMUIModule.scrollToBottom();
      }

    }, (err) => {
      // console.log(err)
    });
  }
  componentWillUnmount() {
    NimSession.stopSession();
    this.sessionListener && this.sessionListener.remove();
    this.msgStatusListener && this.msgStatusListener.remove();
    this.deleteMessageListener && this.deleteMessageListener.remove();
  }
  sendLocationImage(longitude, latitude, address) {
    NimSession.sendLocationMessage(longitude, latitude, address);
  }

  /**
   * 文字聊天内容
   * @param text
   * @param ids
   */
  onSend(text, ids) {
    if (!text || !text.trim()) {
      Toast.show('请输入聊天内容');
      return;
    }
    text = text.trim();
    NimSession.sendTextMessage(text, ids);

    this.forceUpdate();

  }

  /**
   * 打开相册
   */
  handleImagePicker() {
    if(!this.state.action){
      return
    }
    ImagePicker.openPicker({
      mediaType: 'photo',
      loadingLabelText: '请稍候...'
    }).then(image => {
      NimSession.sendImageMessages(image.path, "myName");
    });
  }

  /**
   * 打开相机
   */
  handleCameraPicker() {
    if(!this.state.action){
      return
    }
    ImagePicker.openCamera({
      mediaType: 'photo',
      loadingLabelText: '请稍候...'
    }).then(image => {
      NimSession.sendImageMessages(image.path, "myName");
    });
  }

  onLocation(coordinate) {
    this.sendLocationImage(coordinate.longitude, coordinate.latitude, coordinate.address);
  }

  /**
   * 打开地图
   */
  handleLocationClick() {
    if(!this.state.action){
      return
    }
    this.props.navigator.showModal({
      screen: "ImDemo.LocationPicker",
      title: '位置信息',
      backButtonTitle: '返回',
      passProps: {
        onLocation: this.onLocation.bind(this)
      }
    });
  }

  /**
   * 转账
   */
  handleTransferClick() {
    if(!this.state.action){
      return
    }
    const { navigator, session} = this.props;
    Toast.show('向好友转账');
  }
  /**
   * 发红包
   */
  handlePacketClick() {
    if(!this.state.action){
      return
    }
    Toast.show('发红包');
  }

  /**
   * 打开文字中的url
   * @param url
   */
  onOpenURL(url) {

    Toast.show("打开链接");


  }

  /**
   * 查看消息内容
   * @param message
   */
  onMessagePress(message) {
    const {navigator, session} = this.props;
    if (message.msgType === 'location') {
      navigator.push({
        screen: "ImDemo.LocationView",
        title: '查看位置',
        passProps: {
          region: message.extend
        }
      });
    }

    // 红包详情
    if (message.msgType === "redpacket" && message.extend) {
      Toast.show('红包详情');

    }

    // 转账详情
    if (message.msgType === "transfer" && message.extend) {
      Toast.show('转账详情');

    }

    // 语音
    if (message.msgType === "redpacketOpen" && message.extend) {
      this.onPacketPress(message);
    }
  }
  onTouchMsgList = () => {
    Animated.timing(this.state.chatInputheight,{
      toValue:48,
      duration:200
    }).start();
    this.setState({
      isDismissMenuContainer: true,
      chatInputStyle: {
        backgroundColor: ChatInputHeightBg,
        width: width
      }
    });
  };
  onPacketPress(message) {
    const {navigator} = this.props;
    Toast.show('红包详情');


  }
  onAvatarPress(v) {
    if (v && v.fromUser) {
      NimFriend.getUserInfo(v.fromUser._id).then((data) => {
        this.props.navigator.push({
          screen: 'ImDemo.FriendDetail',
          title: '详细资料',
          backButtonTitle: '返回',
          passProps: {
            friendData: data
          }
        });
      })
    }

  }
  _loadMoreContentAsync = async() => {
    if (!this._lastMessage) {
      return;
    }
    return NimSession.queryMessageListEx(this._lastMessage.msgId, 20).then((data) => {
      if (data.length > 0) {
        this._lastMessage = data[0]
        AuroraIMUIModule.insertMessagesToTop(data);
      }
    }, (err) => {
      this.setState({
        canLoadMoreContent: false
      });
    });
  }
  onSendText = (text) => {
    this.onSend(text, [])
  }
  onSendRecordMessage = (path, duration) => {
    NimSession.sendAudioMessage(path, duration);
  }
  onFeatureView = (inputHeight, showType) => {
    if(showType > 0){
      Animated.timing(this.state.chatInputheight,{
        toValue:323,
        duration:200
      }).start();
    }else{
      Animated.timing(this.state.chatInputheight,{
        toValue:48,
        duration:260
      }).start();
    }
    this.setState({
      action: showType === 2,
      isDismissMenuContainer: false,
      chatInputStyle: {
        backgroundColor: ChatInputHeightBg,
        width: width,
        // height: showType === 0 ? ChatInputHeightMin : ChatInputHeightMax
      },
      menuContainerHeight: ContainerHeightMax,//showType === 0 ? ContainerHeightMin : ContainerHeightMax + showType,
    });
    setTimeout(()=>{
      AuroraIMUIModule.scrollToBottom();
    },500)
  }
  onShowKeyboard = (inputHeight, showType) => {
    console.info('onShowKeyboard', inputHeight, showType);
    setTimeout(()=>{
      AuroraIMUIModule.scrollToBottom();
    },200)
  }
  onEditTextChange = (text) => {
    // console.log("用于做@提醒:",text);
  }
  onStatusViewClick(message,opt){
    console.info('onStatusViewClick',message+'--'+opt);
    if (opt === 'copy'){
      Clipboard.setString(message.text);
    }else if(opt === 'delete'){
      NimSession.deleteMessage(message.msgId);
      AuroraIMUIModule.deleteMessage([message])
    }else  if(opt === 'revoke'){
      NimSession.revokeMessage(message.msgId).then((data)=>{
        AuroraIMUIModule.deleteMessage([message])
      });
    }
  }
  renderChatInput() {
    return (
      <InputView
        style={[this.state.chatInputStyle,{height:this.state.chatInputheight}]}
        menuContainerHeight={this.state.menuContainerHeight}
        isDismissMenuContainer={this.state.isDismissMenuContainer}
        onSendText={this.onSendText}
        onSendVoice={this.onSendRecordMessage}
        onShowKeyboard={this.onShowKeyboard}
        onFeatureView={this.onFeatureView}
        onEditTextChange={this.onEditTextChange}>
        <View style={styles.search}>
          {this.renderActionBar()}
        </View>
      </InputView>
    );
  }
  renderMessages() {
    return (
      <MessageListView
        style={{flex: 1}}
        onMsgClick={this.onMessagePress.bind(this)}
        onLinkClick={this.onOpenURL.bind(this)}
        onAvatarClick={this.onAvatarPress.bind(this)}
        onStatusViewClick={this.onStatusViewClick.bind(this)}
        onTouchMsgList={this.onTouchMsgList}
        onClickChangeAutoScroll={this.onClickChangeAutoScroll}
        onPullToRefresh={this._loadMoreContentAsync}
        sendBubble={{imageName: "send_msg", padding: 10}}
        receiveBubbleTextColor={'#ffffff'}
        sendBubbleTextSize={14}
        receiveBubbleTextSize={14}
        sendBubblePressedColor={'#dddddd'}
        eventMsgTxtColor={'#ffffff'}
        eventMsgTxtSize={12}
        initList={this.state.initList}
      />
    );
  }
  renderActionBar() {
    const {session} = this.props;

    return (
      <View style={styles.iconRow}>
        <View style={styles.actionCol}>
          <TouchableOpacity style={styles.iconTouch} onPress={this.handleCameraPicker.bind(this)}>
            {Svgs.iconCamera}
          </TouchableOpacity>
          <Text style={{marginTop:6, fontSize:12}}>拍照</Text>
        </View>
        <View style={styles.actionCol}>
          <TouchableOpacity style={styles.iconTouch} onPress={this.handleImagePicker.bind(this)}>
            {Svgs.iconImage}
          </TouchableOpacity>
          <Text style={{marginTop:6, fontSize:12}}>相册</Text>
        </View>
      </View>
    );
  }

  render() {

    return (
      <View style={{ flex:1, backgroundColor:"#f7f7f7"}}>
        {this.renderMessages()}
        {this.renderChatInput()}
      </View>
    );
  }
}

const {width, height} = Dimensions.get('window');
const sWidth = width-55*4;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  messageList: {
    // backgroundColor: 'red',
    flex: 1,
    marginTop: 0,
    width: window.width,
    margin:0,
  },
  inputView: {
    backgroundColor: 'green',
    width: window.width,
    height:100,

  },
  btnStyle: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#3e83d7',
    borderRadius: 8,
    backgroundColor: '#3e83d7'
  },
  iconRow: {
    flexDirection: 'row',
    paddingHorizontal:sWidth/5-1,
    flexWrap:'wrap',
    paddingVertical:30,
    flex:1
  },
  actionCol:{
    alignItems:"center",
    marginRight:sWidth/5,
    height:95
  },
  iconTouch: {
    justifyContent:'center',
    alignItems:'center',
  },
  search: {
    //marginTop: 5,
    flex: 1,
    flexDirection: 'column',
    //paddingTop: 10,
    backgroundColor: "#fff",
  },
});

export default Chat;
