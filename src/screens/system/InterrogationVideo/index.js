import React, {Component, PureComponent} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Modal
} from 'react-native';
import {RtcEngine, AgoraView} from 'react-native-agora'


const {width} = Dimensions.get('window');


export default class RNAgoraExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      remotes: [],
      isJoinSuccess: false,
      isSpeaker: true,
      isMute: false,
      isCameraTorch: false,
      disableVideo: true,
      isHideButtons: false,
      visible: false,
      selectUid: undefined
    };
  }

  componentWillMount() {
    //初始化Agora
    const options = {
      appid: 'a0e6c9eb98d147329f9e61237e38eae0',
      channelProfile: 1,
      videoProfile: 40,
      clientRole: 1,
      swapWidthAndHeight: true
    };
    RtcEngine.init(options);

  }

  componentDidMount() {

    // 当前版本号
    RtcEngine.getSdkVersion((version) => {
      // console.log(version)
    });

    //加入房间
    RtcEngine.joinChannel();

    // 启用说话者音量提示
    RtcEngine.enableAudioVolumeIndication(500,3);

    //所有的原生通知统一管理
    RtcEngine.eventEmitter({

      // 有远程视频加入 返回重要的  uid  AgoraView 根据uid 来设置remoteUid值
      onFirstRemoteVideoDecoded: (data) => {
        // console.log(data);
        const {remotes} = this.state;
        const newRemotes = [...remotes];

        // 存在断网重连导致回调多次该方法的情况，已加入过的远程视频不再重复添加
        if (!remotes.find(uid => uid === data.uid)) {
          newRemotes.push(data.uid);
        }
        this.setState({remotes: newRemotes});
      },

      // 有人离开房间
      onUserOffline: (data) => {
        // console.log(data);
        // 有人离开了！
        const {remotes} = this.state;
        const newRemotes = remotes.filter(uid => uid !== data.uid);
        this.setState({remotes: newRemotes});
      },

      // 加入房间成功
      onJoinChannelSuccess: (data) => {
        // console.log(data);
        // 开启摄像头预览
        RtcEngine.startPreview();

        this.setState({
          isJoinSuccess: true
        });
      },

      // 声音回调
      onAudioVolumeIndication: (data) => {
        // console.log(data, '-----');
      },

      // 有人加入房间
      onUserJoined: (data) => {
        // console.log(data);
        // 有人来了!
      },

      // 错误!
      onError: (data) => {
        // console.log(data);

        if (data.err === 17) {
          // 离开频道
          RtcEngine.leaveChannel();
          // 销毁引擎实例
          RtcEngine.destroy();
        }

        const { onCancel } = this.props;

        this.props.navigator.pop()
        //
        // this.onCancel(data.err)
      }
    })
  }

  // 注销
  componentWillUnmount() {
    RtcEngine.removeEmitter()
  }

  // 退出视频聊天
  handlerCancel = () => {
    const { navigation } = this.props;
    // console.log('handlerCancel')
    // 离开频道
    RtcEngine.leaveChannel();
    // 销毁引擎实例
    RtcEngine.destroy();

    navigation.goBack()
  };

  // 切换摄像头
  handlerSwitchCamera = () => {
    // console.log('handlerSwitchCamera')
    RtcEngine.switchCamera();
  };

  // 是否静音
  handlerMuteAllRemoteAudioStreams = () => {
    // console.log('handlerMuteAllRemoteAudioStreams')
    this.setState({
      isMute: !this.state.isMute
    }, () => {
      RtcEngine.muteAllRemoteAudioStreams(this.state.isMute);
    })
  };

  // 启用扩音扬声器
  handlerSetEnableSpeakerphone = () => {
    // console.log('handlerSetEnableSpeakerphone')
    this.setState({
      isSpeaker: !this.state.isSpeaker
    }, () => {
      RtcEngine.setDefaultAudioRouteToSpeakerphone(this.state.isSpeaker);
    });
  };

  // 闪光灯开关
  handlerChangeCameraTorch = () => {
    // console.log('handlerChangeCameraTorch')
    this.setState({
      isCameraTorch: !this.state.isCameraTorch
    }, () => {
      RtcEngine.setCameraTorchOn(this.state.isCameraTorch);
    });
  };

  // 摄像头开关
  handlerChangeVideo = () => {
    // console.log('handlerChangeVideo')
    this.setState({
      disableVideo: !this.state.disableVideo
    }, () => {
      this.state.disableVideo ? RtcEngine.enableVideo() : RtcEngine.disableVideo()
    })
  };

  // 隐藏/显示视频上的操作按钮
  handlerHideButtons = () => {
    // console.log('handlerHideButtons')
    this.setState({
      isHideButtons: !this.state.isHideButtons
    })
  };

  onPressVideo = (uid) => {
    // console.log('onPressVideo')
    this.setState({
      selectUid: uid
    }, () => {
      this.setState({
        visible: true
      })
    })
  };

  render() {
    const {isMute, isSpeaker, isCameraTorch, disableVideo, isHideButtons, remotes, isJoinSuccess, visible} = this.state;

    if (!isJoinSuccess) {
      return (
        <View style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}}>
          <Text>正在创建视频会议...</Text>
        </View>
      )
    }

    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={this.handlerHideButtons}
        style={styles.container}
      >
        <AgoraView style={styles.localView} showLocalVideo={true}/>
        <View style={styles.absView}>
          {!visible ?
            <View style={styles.videoView}>
              {remotes.map((v, k) => {
                return (
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => this.onPressVideo(v)}
                    key={k}
                  >
                    <AgoraView
                      style={styles.remoteView}
                      zOrderMediaOverlay={true}
                      remoteUid={v}
                    />
                  </TouchableOpacity>
                )
              })}
            </View> : <View style={styles.videoView}/>
          }

          {!isHideButtons &&
          <View>
            <OperateButton
              style={{alignSelf: 'center', marginBottom: -10}}
              onPress={() => this.handlerCancel()}
              imgStyle={{width: 60, height: 60}}
              source={require('./images/btn_endcall.png')}
            />
            <View style={styles.bottomView}>
              <OperateButton
                onPress={this.handlerChangeCameraTorch}
                imgStyle={{width: 40, height: 40}}
                source={isCameraTorch ? require('./images/闪光灯打开.png') : require('./images/闪光灯关闭.png')}
              />
              <OperateButton
                onPress={this.handlerChangeVideo}
                source={disableVideo ? require('./images/摄像头打开.png') : require('./images/摄像头关闭.png')}
              />
            </View>
            <View style={styles.bottomView}>
              <OperateButton
                onPress={this.handlerMuteAllRemoteAudioStreams}
                source={isMute ? require('./images/icon_muted.png') : require('./images/btn_mute.png')}
              />
              <OperateButton
                onPress={this.handlerSwitchCamera}
                source={require('./images/btn_switch_camera.png')}
              />
              <OperateButton
                onPress={this.handlerSetEnableSpeakerphone}
                source={!isSpeaker ? require('./images/icon_speaker.png') : require('./images/btn_speaker.png')}
              />
            </View>
          </View>
          }
        </View>

        <Modal
          visible={visible}
          presentationStyle={'fullScreen'}
          animationType={'slide'}
          onRequestClose={() => {}}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={{flex: 1}}
            onPress={() => this.setState({
              visible: false
            })}
          >
            <AgoraView
              style={{flex: 1}}
              zOrderMediaOverlay={true}
              remoteUid={this.state.selectUid}
            />
          </TouchableOpacity>
        </Modal>
      </TouchableOpacity>
    );
  }
}

class OperateButton extends PureComponent {
  render() {

    const {onPress, source, style, imgStyle = {width: 50, height: 50}} = this.props;

    return (
      <TouchableOpacity
        style={style}
        onPress={onPress}
        activeOpacity={.7}
      >
        <Image
          style={imgStyle}
          source={source}
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4'
  },
  absView: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
  },
  videoView: {
    padding: 5,
    flexWrap: 'wrap',
    flexDirection: 'row',
    zIndex: 100
  },
  localView: {
    flex: 1
  },
  remoteView: {
    width: (width - 40) / 3,
    height: (width - 40) / 3,
    margin: 5
  },
  bottomView: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});