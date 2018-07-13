import React from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableHighlight} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

class CollapsingHeader extends React.Component {

  static navigatorStyle = {
    drawUnderTabBar: true,
    navBarButtonColor: '#ffffff',
    navBarTextColor: '#ffffff',
    collapsingToolBarImage: require('../../../img/gyro_header.jpg'),
    collapsingToolBarCollapsedColor: '#0f2362',
    navBarBackgroundColor: '#eeeeee'
  };

  /**
   * 打开相册
   */
  handleImagePicker() {

    ImagePicker.openPicker({
      mediaType: 'photo',
      loadingLabelText: '请稍候...'
    }).then(image => {

      let data = new FormData();
      let file = { uri: image.path, type: "multipart/form-data", name: "image.png" };
      data.append("imgFile", file);

      fetch('http://fileserver.api.koenn.cn:81/api/UserMainImages/UploadUserHead', {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' },
        body: data
      }).then(res => {
        console.log(res, "myImg");
      })
      console.log(image.path, "myName");
    });
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <TouchableHighlight  onPress={this.handleImagePicker.bind(this)}>
          <Text>
            点击
          </Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default CollapsingHeader;
