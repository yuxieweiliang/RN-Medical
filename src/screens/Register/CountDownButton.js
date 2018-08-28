import React,{ Component } from 'react';
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
  ViewPropTypes
} from 'react-native';


/**
 * Example:
 * <CountDownButton
 enable={11}
 style={{width: 110,marginRight: 10}}
 textStyle={{color: 'blue'}}
 timerCount={10}
 timerActiveTitle={['请在（','s）后重试']}
 onClick={(shouldStartCountting)=>{
                            const requestSucc = Math.random() + 0.5 > 1;
                            shouldStartCountting(requestSucc)
                          }}/>
 */
export default class CountDownButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counting: false,
      selfEnable: true,
    };
    this._shouldStartCountting = this._shouldStartCountting.bind(this)
    this._countDownAction = this._countDownAction.bind(this)
  }
  static propTypes = {
    style: ViewPropTypes.style,
    textStyle: Text.propTypes.style,
    onClick: PropTypes.func,
    disableColor: PropTypes.string,
    timerTitle: PropTypes.string,
    timerEnd: PropTypes.func
  };
  static defaultProps = {
    timerTitle: '获取验证码',
    timerCount: 60,
  }

  _countDownAction(){
    const codeTime = this.props.timerCount;
    const now = Date.now()
    const overTimeStamp = now + codeTime * 1000 + 100/*过期时间戳（毫秒） +100 毫秒容错*/
    this.interval = setInterval(() =>{
      /* 切换到后台不受影响*/
      const nowStamp = Date.now()

      // console.log(nowStamp , overTimeStamp)

      if (nowStamp >= overTimeStamp) {
        /* 倒计时结束*/


        this.interval && clearInterval(this.interval);
        this.setState({
          timerCount: codeTime,
          timerTitle: this.props.timerTitle || '获取验证码',
          counting: false,
          selfEnable: true
        })
        if (this.props.timerEnd) {
          this.props.timerEnd()
        }
      }else{
        const leftTime = parseInt((overTimeStamp - nowStamp)/1000)
        this.setState({
          timerCount: leftTime,
          timerTitle: `重新获取(${leftTime}s)`,
        })
      }

    },1000)
  }
  _shouldStartCountting(shouldStart){
    if (this.state.counting) {return}

    // console.log(shouldStart)

    if (shouldStart) {
      this._countDownAction()
      this.setState({counting: true,selfEnable:false})
    }else{
      this.setState({selfEnable:true})
    }
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }
  render(){
    const { onClick, style, textStyle, enable, disableColor } = this.props
    const { counting, timerTitle, selfEnable } = this.state


    // console.log(this.state)
    return (
      <TouchableOpacity
        activeOpacity={counting ? 1 : 0.8}
        onPress={()=>{
        if (!counting && enable && selfEnable) {
          this.setState({selfEnable: false})
          this.props.onClick(this._shouldStartCountting)
        }
      }}>
        <View style={[{width:120, height:44,justifyContent:'center',alignItems:'center'},style]}>
          <Text style={[{fontSize: 16},textStyle,{color: ((!counting && enable && selfEnable) ? (textStyle ? textStyle.color : 'blue') : disableColor || 'gray')}]}>{timerTitle}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}