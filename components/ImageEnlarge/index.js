import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import styles from './style'
const { width, height } = Dimensions.get('window');

type Props = {
  originalWidth: React.PropTypes.number.isRequired,
  originalHeight: React.PropTypes.number.isRequired
};
class Card extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      //状态机变量是一个style, 它将被用于定义显示图片的样式
      style: {}
    };
    this.onImageLayout=this.onImageLayout.bind(this);
  }
  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}

  onImageLayout(event) {
    let { width, height } = this.props
    let layout = event.nativeEvent.layout; //获取layout

    //按照如果布局比图片小, 图片不会放大,不处理
    if(layout.width <= width) return;
    if(layout.height <= height) return;

    // 图片宽高比
    let originalAspectRatio = width / height;
    let currentAspectRatio = layout.width / layout.height;

    // 如果比例一样 不处理, 图片会自动放大
    if(originalAspectRatio === currentAspectRatio) return;

    // 图片原宽度相对高略宽
    if(originalAspectRatio > currentAspectRatio) {
      //减少控件高度
      this.setState({
        style:{
          height: layout.width / originalAspectRatio
        }
      });
    } else {
      //图片原宽度相对高略窄 减少控件宽度
      this.setState({
        style:{
          width: layout.height * originalAspectRatio
        }
      });

    }
  }
  render() {
    const { style } = this.props
    return (
      <Image {...this.props}
             style={[style, this.state.style]}
             onLayout={this.onImageLayout}
      />
    );
  }
}
export default Card