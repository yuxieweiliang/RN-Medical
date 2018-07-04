import React, { Component } from 'react';
import { Text, ScrollView, Image, View, TextInput, KeyboardAvoidingView, Animated, Dimensions, Keyboard, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/dist/EvilIcons';
import { connect } from 'react-redux'
import styles from './style'
const { width, height } = Dimensions.get('window');

const TITLE = '晒健康'

class HealthExposure extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: new Animated.Value(height - 80),
      opacity: 1,
      focus: false,
    }
  }


  componentDidMount() {}

  _onPressButton() {
    this.props.navigation.navigate('Product', {
      itemId: 87,
      otherParam: 'anything you want here',
    })
  }
  componentWillMount() {
    this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this));

    this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this));
  }


  keyboardDidShow(event) {

    console.log(event)
    if(event && event.endCoordinates) {
      Animated.timing(
        this.state.height,
        {
          toValue: height - event.endCoordinates.height - 130,
        }
      ).start();
    }
  }

  keyboardDidHide(event) {
    this.inputBlur()
  }
  inputBlur() {
    let _this = this

    let timer = setTimeout(() => {
      _this.setState({option: this.state.opacity - 0.1 })
      if(this.state.opacity <= 0 ) {
        clearTimeout(timer)
      }
    }, 100)
    Animated.timing(
      this.state.height,
      {
        toValue: height - 80,
      }
    ).start();
  }
  comment() {
    this.refs.comment.focus()
  }
  componentWillUnmount() {
    this.keyboardDidShowSub.remove();
    this.keyboardDidHideSub.remove();
  }
  render() {

    return (
      <View behavior="padding" style={styles.container}>
        <Animated.View style={[styles.animated, {height: this.state.height}]}>
          <ScrollView keyboardDismissMode="on-drag">

            <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('HealthDailyDetails')}>
              <View style={styles.list}>
                <View style={styles.header}>
                  <View style={styles.headerLeft}>
                    <Image style={styles.avatar} source={require('../../../assets/images/a8.jpg')}/>
                    <Text style={styles.username}>用户名</Text>
                  </View>
                </View>
                <View style={styles.listBody}>
                  <View style={styles.listBodyText}>
                    <Text>这里随便写点啥内容好了，反正也不是真的。</Text>
                  </View>
                  <View style={styles.listBodyImage}>
                    <Image style={styles.listBodyImageItem} source={require('../../../assets/images/a7.jpg')}/>
                    <Image style={styles.listBodyImageItem} source={require('../../../assets/images/a5.jpg')}/>
                    <Image style={styles.listBodyImageItem} source={require('../../../assets/images/a4.jpg')}/>
                    <Image style={styles.listBodyImageItem} source={require('../../../assets/images/a2.jpg')}/>
                  </View>
                </View>
                <View style={styles.listFooter}>
                  <View style={styles.listFooterLeft}>
                    <Text>2018-18-18</Text>
                  </View>
                  <View style={styles.listFooterRight}>

                    <Icon name="like"
                          style={{fontSize: 24}}
                          onPress={() => this.comment()}/>
                    <Text style={{fontSize: 16}}>100</Text>
                    <Icon name="comment"
                          style={{fontSize: 24}}
                          onPress={() => this.comment()}/>
                  </View>
                </View>
              </View>
            </TouchableNativeFeedback>

            <View style={styles.list}>
              <View style={styles.header}>
                <View style={styles.headerLeft}>
                  <Image style={styles.avatar} source={require('../../../assets/images/a8.jpg')}/>
                  <Text style={styles.username}>用户名</Text>
                </View>
              </View>
              <View style={styles.listBody}>
                <View style={styles.listBodyText}>
                  <Text>这里随便写点啥内容好了，反正也不是真的。</Text>
                </View>
                <View style={styles.listBodyImage}>
                  <Image style={styles.listBodyImageItem} source={require('../../../assets/images/a1.jpg')}/>
                  <Image style={styles.listBodyImageItem} source={require('../../../assets/images/a3.jpg')}/>
                  <Image style={styles.listBodyImageItem} source={require('../../../assets/images/a8.jpg')}/>
                </View>
              </View>
              <View style={styles.listFooter}>
                <View style={styles.listFooterLeft}>
                  <Text>2018-18-18</Text>
                </View>
                <View style={styles.listFooterRight}>
                  <Icon name="comment"
                        style={{fontSize: 24}}
                        onPress={() => this.comment()}/>
                </View>
              </View>
            </View>

            <View style={styles.list}>
              <View style={styles.header}>
                <View style={styles.headerLeft}>
                  <Image style={styles.avatar} source={require('../../../assets/images/a8.jpg')}/>
                  <Text style={styles.username}>用户名</Text>
                </View>
              </View>
              <View style={styles.listBody}>
                <View style={styles.listBodyText}>
                  <Text>这里随便写点啥内容好了，反正也不是真的。</Text>
                </View>
                <View style={styles.listBodyImage}>
                  <Image style={styles.listBodyImageItem} source={require('../../../assets/images/a7.jpg')}/>
                  <Image style={styles.listBodyImageItem} source={require('../../../assets/images/a5.jpg')}/>
                  <Image style={styles.listBodyImageItem} source={require('../../../assets/images/a4.jpg')}/>
                  <Image style={styles.listBodyImageItem} source={require('../../../assets/images/a2.jpg')}/>
                </View>
              </View>
              <View style={styles.listFooter}>
                <View style={styles.listFooterLeft}>
                  <Text>2018-18-18</Text>
                </View>
                <View style={styles.listFooterRight}>
                  <Icon name="comment"
                        style={{fontSize: 24}}
                        onPress={() => this.comment()}/>
                </View>
              </View>
            </View>

            <View style={styles.list}>
              <View style={styles.header}>
                <View style={styles.headerLeft}>
                  <Image style={styles.avatar} source={require('../../../assets/images/a8.jpg')}/>
                  <Text style={styles.username}>用户名</Text>
                </View>
              </View>
              <View style={styles.listBody}>
                <View style={styles.listBodyText}>
                  <Text>这里随便写点啥内容好了，反正也不是真的。</Text>
                </View>
                <View style={styles.listBodyImage}>
                  <Image style={styles.listBodyImageItem} source={require('../../../assets/images/a1.jpg')}/>
                  <Image style={styles.listBodyImageItem} source={require('../../../assets/images/a3.jpg')}/>
                  <Image style={styles.listBodyImageItem} source={require('../../../assets/images/a8.jpg')}/>
                </View>
              </View>
              <View style={styles.listFooter}>
                <View style={styles.listFooterLeft}>
                  <Text>2018-18-18</Text>
                </View>
                <View style={styles.listFooterRight}>
                  <Icon name="comment"
                        style={{fontSize: 24}}
                        onPress={() => this.comment()}/>
                </View>
              </View>
            </View>
          </ScrollView>
        </Animated.View>
        <View style={styles.inputField}>
          <TextInput
            ref="comment"
            style={[styles.textInput, {opacity: this.state.opacity}]}
            multiline={true}
            onBlur={() => this.inputBlur()}/>
        </View>
      </View>



    );
  }
}


HealthExposure.navigationOptions = ({ navigation, navigationOptions }) => {
  const { params } = navigation.state;
  return {
    title: TITLE,
  }
}


export default connect(state => ({}))(HealthExposure)
