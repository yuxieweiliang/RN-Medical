import React, { Component } from 'react'
import { Text, FlatList, ScrollView, View, Dimensions, TouchableHighlight, TextInput } from 'react-native'
import styles from './style'
import { connect } from 'react-redux'
const { width, height } = Dimensions.get('window')
import ac from './action'

class Appointment extends React.Component {
  static navigationOptions = ({ navigation : nav, navigationOptions: option }) => {
    const { headerLeft, headerRight, headerTitle } = option;
    return {
      headerTitle: function() {
       return (
         <View style={{width: width - 120, height: 50, alignItems: 'center', justifyContent: 'center',}}>
           <Text style={{fontSize: 20}}>医院列表</Text>
           {/*<TextInput underlineColorAndroid="transparent"
                      style={{fontSize: 20, width: width - 120, height: 40, alignItems: 'center', justifyContent: 'center',backgroundColor: '#ccc', borderRadius: 8}}
                      placeholder="医院列表"/>*/}
         </View>
       )
      },
      headerRight: <View style={{width: 60, height: 50, alignItems: 'center', justifyContent: 'center',}}>
        <Text>搜索</Text>
      </View>
    }
  };

  componentWillMount() {
    const { dispatch } = this.props
    dispatch(ac.getHospitalList())
  }
  componentDidMount() {}

  _onPressButton() {
    this.props.navigation.navigate('Product', {
      itemId: 87,
      otherParam: 'anything you want here',
    })
  }
  _onPressTabCardButton() {
    this.props.navigation.navigate('ExpertList', {
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
                     style={{fontSize: 20, width: width - 120, height: 40, alignItems: 'center', justifyContent: 'center',backgroundColor: '#ccc', borderRadius: 8}}
                     placeholder="医院列表"/>
        </View>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}, {key: 'g'}, {key: 'h'}, {key: 'i'}]}
          renderItem={({item}) => (
            <TouchableHighlight onPress={() => this._onPressTabCardButton()}>
              <View style={styles.list}>
                <View style={{flex: 1}}>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: '#333'}}>医院名称</Text>
                </View>
                <View style={{flex: 3, flexDirection: 'row', }}>
                  <View>
                    <Text>医院地址: 西安市/陕西省/霸王区/菜市场</Text>
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
