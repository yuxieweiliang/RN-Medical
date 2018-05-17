import React, { Component } from 'react';
import { Text, Image,ScrollView, View, Dimensions, TouchableHighlight, TextInput, FlatList } from 'react-native';
import styles from './style'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { connect } from 'react-redux'
const { width, height } = Dimensions.get('window');
import TabCardView from '../../../components/TabCardView/index'


class Appointment extends React.Component {
  static navigationOptions = ({ navigation : nav, navigationOptions: option }) => {
    const { headerLeft, headerRight, headerTitle } = option;
    return {
      headerTitle: function() {
       return (
         <View style={{width: width - 120, height: 50, alignItems: 'center', justifyContent: 'center',}}>
           <Text style={{fontSize: 20}}>专家列表</Text>
         </View>
       )
      },
      headerRight: <View style={{width: 60, height: 50, alignItems: 'center', justifyContent: 'center',}}>
        <Text>
          搜索
        </Text>
      </View>
    }
  };

  componentDidMount() {}

  _onPressButton() {
    this.props.navigation.navigate('Product', {
      itemId: 87,
      otherParam: 'anything you want here',
    })
  }
  _onPressTabCardButton() {
    this.props.navigation.navigate('ExpertHome', {
      otherParam: 'anything you want here',
    })
  }
  componentWillUnmount() {
    // this._onPressButton.remove();

  }
  render() {
    const { healthGuide }= this.props
    const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
    const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
    const workout = {key:'workout', color: 'green'};
    return (
      <ScrollView style={styles.container}>
        <View style={{width, height: 60, justifyContent: 'center', alignItems: 'center'}}>
          <TextInput underlineColorAndroid="transparent"
                     style={styles.search}
                     placeholder="专家列表"/>
        </View>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}, {key: 'g'}, {key: 'h'}, {key: 'i'}]}
          renderItem={({item}) => (
            <TouchableHighlight onPress={() => this._onPressTabCardButton()}>
              <View style={styles.list}>
                <View style={{flex: 1}}>
                  <Image style={{width: '100%', height: 100}} source={require('../../../assets/images/a3.jpg')}/>
                </View>
                <View style={{flex: 4, paddingLeft: 15 }}>
                  <View>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#111'}}>专家名字</Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 16,color: '#333'}}>
                      下面是一个较复杂的例子，演示了利用Pure，来进一步优化性能和减少bug产生的可能。
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', paddingTop: 10}}>
                    <View style={{flex: 1}}>
                      <View style={{backgroundColor: 'blue', borderRadius: 4, alignItems: 'center', justifyContent: 'center', padding: 4}}>
                        <Text style={{color: '#fff', }}>可预约</Text>
                      </View>
                    </View>
                    <View style={{flex: 4, paddingTop: 4, paddingLeft: 15}}>
                      <Text>医院地址: 西安市/陕西省/霸王区/菜市场</Text>
                    </View>

                  </View>
                </View>
              </View>
            </TouchableHighlight>
          )}
        />
      </ScrollView>



    );
  }
}


const createState = function(state) {
  return ({...state.appointment})
}

export default connect(createState)(Appointment)
