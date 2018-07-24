import React, { Component } from 'react';
import { Text, Dimensions,StatusBar, View, FlatList, TouchableOpacity } from 'react-native';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
import { connect } from 'react-redux'
import { userCredentials } from '../../reducers/user/actions'
import Button from '../../components/Button'


const { width, height } = Dimensions.get('window');


/**
 * 我的账户
 */
class Authorization extends React.Component {

  componentDidMount() {}

  _onPressButton() {
    this.props.navigation.navigate('Product', {
      itemId: 87,
      otherParam: 'anything you want here',
    })
  }
  componentWillUnmount() {
    // this._onPressButton.remove();
  }
  updateImageForAuthentication() {

    ImagePicker.openPicker({
      mediaType: 'photo',
      loadingLabelText: '请稍候...'
    }).then(image => {

      this.props.dispatch(userCredentials(image))
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, width, paddingTop: 100 }}>

          <Button
            onPress={this.updateImageForAuthentication.bind(this)}>
            认证
          </Button>

        </View>
      </View>
    );
  }
}

export default connect(state => ({...state.user}))(Authorization)
