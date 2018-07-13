import React, { Component } from 'react'
import { Text, FlatList, ScrollView, View, Dimensions, TouchableHighlight, TextInput } from 'react-native'
import styles from './style'
import { connect } from 'react-redux'
const { width, height } = Dimensions.get('window')
import ac from './action'
class Department extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(ac.getHospitalList())
  }
  componentDidMount() {}

  _onPressTabCardButton(item) {

    this.props.navigator.push({screen: 'Koe.ExpertList'})
  }
  componentWillUnmount() {
    const { dispatch } = this.props
    // this._onPressButton.remove();

  }
  render() {
    return (

      <ScrollView style={styles.container}>
        {/*<View style={{width, height: 60, justifyContent: 'center', alignItems: 'center'}}>
          <TextInput underlineColorAndroid="transparent"
                     style={{fontSize: 20, width: width - 120, height: 40, alignItems: 'center', justifyContent: 'center',backgroundColor: '#ccc', borderRadius: 8}}
                     placeholder="医院列表"/>
        </View>*/}
        <FlatList
          data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}, {key: 'g'}, {key: 'h'}, {key: 'i'}]}
          renderItem={({item}) => (
            <TouchableHighlight onPress={() => this._onPressTabCardButton(item)}>
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

export default connect(createState)(Department)
