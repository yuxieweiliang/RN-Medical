import React, { Component } from 'react';
import { Text, ScrollView, Image, View, TextInput, KeyboardAvoidingView, Animated, Dimensions, Keyboard, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/dist/EvilIcons';
import styles from './style'
const { width, height } = Dimensions.get('window');

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: new Animated.Value(height - 80),
      opacity: 1,
      focus: false,
    }
  }
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: '晒健康',
    }
  };

  componentDidMount() {}

  _onPressButton() {
    this.props.navigation.navigate('Product', {
      itemId: 87,
      otherParam: 'anything you want here',
    })
  }
  componentWillMount() {
    this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow.bind(this));
  }
  keyboardWillShow(event) {
    Animated.timing(
      this.state.height,
      {
        toValue: event.endCoordinates.height - 50,
      }
    ).start();
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
  }
  render() {

    return (
      <View behavior="padding" style={styles.container}>
        {/*<WebView
          automaticallyAdjustContentInsets={false}
          style={styles.scroll}
          source={{uri: 'http://10.0.0.98:8011/healthExposure/view.html'}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState={true}
        />*/}
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

