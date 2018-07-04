import React, { Component } from 'react'
import { Text, ScrollView, TouchableOpacity, Modal, FlatList, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { LineChart } from 'react-native-charts-wrapper'
import update from 'immutability-helper';
import { connect } from 'react-redux'
import { getSignList } from '../../../reducers/sign/actions'
import Card from '../../../components/Card'
import { data, xAxis } from './dataConfig'
import styles from './style'


const TITLE = '体征趋势'
const { width, height } = Dimensions.get('window');

class SignTrend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataStructure: data,
      xAxis,
      bloodPressure: {
        data: {dataSets: [data, data]},
        xAxis,
        // 触控 默认 false  有值时， 交叉线不显示
        // touchEnabled: true,
        // 放大缩小
        autoScaleMinMaxEnabled: false,
        // chartDescription: { text: "" },
        dragDecelerationEnabled: true,
        /**
         * 对数据有特殊要求，{x: 0, y: 0, marker: 'show 0'}
         */
        /*marker: {
          enabled: true,
          markerColor: processColor("white"),
          textColor: processColor("black")
        },*/


        onSelect: this.handleSelect.bind(this),
        onChange: event => console.log(event.nativeEvent),
      },
      temperature: {data: {dataSets: [data]}, xAxis},
      breathing: {data: {dataSets: [data]}, xAxis},
      pulse: {data: {dataSets: [data]}, xAxis},
      bloodOxygenSaturation: {data: {dataSets: [data]}, xAxis},
    }
  }
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(getSignList())
    // dispatch(signAction.sign(3))
  }
  handleSelect(event) {
    let entry = event.nativeEvent;
    if (entry == null) {
      this.setState({ ...this.state, selectedEntry: null });
    } else {
      this.setState({ ...this.state, selectedEntry: JSON.stringify(entry) });
    }

    console.log(event.nativeEvent);
  }
  createSignData(option) {
    let data = {}
    option.map(item => {
      ['HX', 'MB', 'TW', 'XL', 'XYBHD',  'XYH',  'XYL'].map(key => {
        if(!data[key]) {
          data[key] = []
        }
        data[key].push(item[key])
      })
    })
    return data
  }
  componentWillReceiveProps(nextProps) {
    const { signList } = nextProps
    const { dataStructure, xAxis } = this.state
    if(signList) {
      let data = this.createSignData(signList)

      console.log('nextProps', nextProps)

      this.setState({
        bloodPressure: {
          data: {
            dataSets: [{
              ...dataStructure,
              values: data.XYH
            },{
              ...dataStructure,
              values: data.XYL
            }]
          },
          xAxis
        }
      })
      this.setState({
        temperature: {
          data: {dataSets: [{...dataStructure, values: data.TW}]},
          xAxis
        }
      })
      this.setState({
        breathing: {
          data: {dataSets: [{...dataStructure, values: data.HX}]},
          xAxis
        }
      })

      // 脉搏
      this.setState({
        pulse: {
          data: {dataSets: [{...dataStructure, values: data.MB}]},
          xAxis
        }
      })
      // 血氧饱和度
      this.setState({
        bloodOxygenSaturation: {
          data: {dataSets: [{...dataStructure, values: data.XYBHD}]},
          xAxis
        }
      })
    }
  }
  componentWillUnmount() {}

  componentDidMount() {
    const { navigator, dispatch } = this.props;

    /**
     * 点击右上角按钮执行函数
     */
    navigator.setOnNavigatorEvent((e) => {
      if (e.type == 'NavBarButtonPress') { // this is the event type for button presses

        if (e.id == 'SignTrendMenu') { // this is the same id field from the static navigatorButtons definition
          dispatch({type: 'SignTrendModel'})
        }
      }
    });
  }
  signTrendMenuItem(item) {
    const { dispatch, navigator } = this.props;

    if(item.key === '添加') {
      navigator.push({screen: 'Koe.SignTrendEdit'})
    }

    dispatch({type: 'SignTrendModel'})
  }

  render() {
    const { bloodPressure, temperature, breathing, pulse, bloodOxygenSaturation } = this.state;
    const { SignTrendModel, navigator, dispatch } = this.props;

    console.log(this.state)
    return (
      <ScrollView style={styles.container}>
        <Card title="血压" style={styles.card}>
          <LineChart
            {...bloodPressure}
            style={styles.bloodPressure}
          />
        </Card>

        <Card title="体温" style={styles.card}>
          <LineChart
            {...temperature}
            style={styles.temperature}
          />
        </Card>

        <Card title="呼吸" style={styles.card}>
          <LineChart
            {...breathing}
            style={styles.breathing}
          />
        </Card>

        <Card title="脉搏" style={styles.card}>
          <LineChart
            {...pulse}
            style={styles.pulse}
          />
        </Card>

        <Card title="血氧饱和度" style={styles.card}>
          <LineChart
            {...bloodOxygenSaturation}
            style={styles.bloodOxygenSaturation}
          />
        </Card>


        <Modal
          transparent={true}
          animationType={"fade"}
          onRequestClose={() => {console.log(false)}}
          visible={SignTrendModel}>
          <TouchableOpacity
            onPress={() => dispatch({type: 'SignTrendModel'})}
            style={{
              top: 55,
              width,
              height: height - 60,
              backgroundColor: 'rgba(0, 0, 0, .2)',
            }}>
            <Icon name="sort-asc" style={{position: 'absolute',top: 0, right: 20, fontSize: 24, color: '#fafafa'}}/>
            <View style={{
              width: width/3,
              position: 'absolute',
              top: 10, right: 5,
              backgroundColor: '#fafafa',
              borderWidth: 1,
              borderColor: '#eee',
              borderRadius: 10,
              paddingLeft: 20,
              paddingRight: 20,
            }}>
              <FlatList
                data={[{key: '编辑'}, {key: '添加'}]}
                style={{}}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={{
                      width: '100%',
                      paddingTop: 10,
                      paddingBottom: 10,
                    }}
                    onPress={() => this.signTrendMenuItem(item)}>
                    <Text>{item.key}</Text>
                  </TouchableOpacity>
                )}/>
            </View>
          </TouchableOpacity>
        </Modal>

      </ScrollView>
    );
  }
}

SignTrend.navigatorButtons = {
  rightButtons: [
    { id: 'SignTrendMenu', icon: require('../../../../img/one.png') }
  ],
};


export default connect(state => ({...state.sign}))(SignTrend)
