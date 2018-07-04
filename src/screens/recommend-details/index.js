import React, { Component } from 'react';
import { Text, SectionList, Dimensions, View, Button, TouchableNativeFeedback } from 'react-native';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const { width, height } = Dimensions.get('window');


export default class extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: '推荐s',
    }
  };

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
  render() {
    var sections = [
      { key: "A", data: [{ title: "阿童木" }, { title: "阿玛尼" }, { title: "爱多多" }] },
      { key: "B", data: [{ title: "表哥" }, { title: "贝贝" }, { title: "表弟" }, { title: "表姐" }, { title: "表叔" }] },
      { key: "C", data: [{ title: "成吉思汗" }, { title: "超市快递" }] },
      { key: "W", data: [{ title: "王磊" }, { title: "王者荣耀" }, { title: "往事不能回味" },{ title: "王小磊" }, { title: "王中磊" }, { title: "王大磊" }] },
    ];
    return (

      <View style={styles.slide1}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{height: 40}}>这里是推荐详情……</Text>
          <SectionList
            style={{width, height}}
            renderItem={this._renderItem}
            renderSectionHeader={this._sectionComp}
            keyExtractor = {this._extraUniqueKey}
            sections={sections}
            ItemSeparatorComponent={() => (
              <View key="f"><Text>ffff</Text></View>
            )}

            ListHeaderComponent={() => (
              <View key="aea" style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}>
                <Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录</Text>
              </View>
            )}

            ListFooterComponent={() => (
              <View key="sa" style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}>
                <Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录尾部</Text>
              </View>
            )}
          />

          <View style={{margin: 10}}>
            <Button
              title="点击返回首页"
              onPress={() => {
                console.log(this.props.navigation)
                this.props.navigation.popToTop()
              }}
            />
          </View>


        </View>
      </View>

    );
  }
  _renderItem = (info) => {
    var txt = '  ' + info.item.title;
    console.log(info.index + '-' + info.section.key)
    return <Text
      key={info.index + '-' + info.section.key}
      style={{ height: 60, textAlignVertical: 'center', backgroundColor: "#ffffff", color: '#5C5C5C', fontSize: 15 }}>{txt}</Text>
  }
  _extraUniqueKey = (option) => {
    console.log()
    return option.title
  }

  _sectionComp = (info) => {
    var txt = info.section.key;
    return <Text
      key={txt}

      style={{ height: 50, textAlign: 'center', textAlignVertical: 'center', backgroundColor: '#9CEBBC', color: 'white', fontSize: 30 }}>{txt}</Text>
  }

}

