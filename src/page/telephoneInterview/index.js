import React, { Component } from 'react';
import { Text, Dimensions,StatusBar, View, Button, TouchableNativeFeedback } from 'react-native';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const { width, height } = Dimensions.get('window');
import action from './action'
import { connect } from 'react-redux'
import { system } from '../../type'


class TelephoneInterviewData extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: '电话访谈',
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

    console.log(system)
    return (

      <View style={styles.container}>
        <View style={{ width, }}>
          <View style={{ width, padding: 15, borderBottomWidth: 1, borderColor: '#ccc', backgroundColor: '#fafafa', marginTop: 10}}>
            <View style={{ height: 50, width, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{flex: 1}}>姓名</Text>
              <Text style={{flex: 1}}>电话</Text>
              <Text style={{flex: 1}}>日期</Text>
            </View>

            <View style={{ width,  }}>
              <Text style={{ width: width,fontSize: 20 }}>建议的详情页面</Text>
              <View style={{ width, flexDirection: 'row' }}>
                <Text style={{ width: '20%',fontSize: 16 }}>姓名</Text>
                <Text style={{ width: '30%',fontSize: 16 }}>性别</Text>
                <Text style={{ width: '20%',fontSize: 16 }}>类型</Text>
                <Text style={{ width: '30%',fontSize: 16 }}>编号</Text>
              </View>

            </View>

            <View style={{ width,  }}>
              <View style={{ width, flexDirection: 'row' }}>
                <Text style={{ width: '20%',fontSize: 16 }}>基恩情况</Text>
                <Text style={{ width: '80%',fontSize: 16 }}>点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面</Text>
              </View>
              <View style={{ width, flexDirection: 'row' }}>
                <Text style={{ width: '20%',fontSize: 16 }}>点击进入建议的详情页面</Text>
                <Text style={{ width: '80%',fontSize: 16 }}>点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面</Text>
              </View>
              <View style={{ width, flexDirection: 'row' }}>
                <Text style={{ width: '20%',fontSize: 16 }}>点击进入建议的详情页面</Text>
                <Text style={{ width: '80%',fontSize: 16 }}>点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面</Text>
              </View>
              <View style={{ width, flexDirection: 'row' }}>
                <Text style={{ width: '20%',fontSize: 16 }}>点击进入建议的详情页面</Text>
                <Text style={{ width: '80%',fontSize: 16 }}>点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面点击进入建议的详情页面</Text>
              </View>
            </View>

          </View>

        </View>
      </View>



    );
  }
}

const createState = function(state) {
  return ({...state.interview})
}
export default connect(createState)(TelephoneInterviewData)
