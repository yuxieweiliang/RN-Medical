import React, { Component } from 'react';
import { Text, ScrollView, TouchableOpacity, View, processColor, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import styles from './style'
import signAction from '../../action/sign'
import update from 'immutability-helper';
import Card from '../../../components/Card'
import {LineChart} from 'react-native-charts-wrapper';


const greenBlue = "rgb(26, 182, 151)";
const petrel = "rgb(59, 145, 153)";
const colors = [processColor('red'), processColor('blue'), processColor('green'), processColor('yellow'), processColor('purple'), processColor('pink')];

const { width, height } = Dimensions.get('window');


class SignTrend extends React.Component {
  constructor(props) {
    super(props);
    let data = {
      values: [0],
      label: '血压（高）',
      config: {
        // 边框宽度
        lineWidth: 1,
        // 边框颜色
        color: processColor('blue'),
        // 点击时，坐标线的颜色
        highlightColor: processColor("blue"),
        // 文字大小
        valueTextSize: 10,

        // 贝塞尔曲线
        mode: "CUBIC_BEZIER",

        // 描点 默认 true
        drawCircles: true,
        // 描点值
        drawValues: true,
        // 描点大小
        circleRadius: 5,

        // 区域颜色 默认 false
        drawFilled: false,
        // 填充梯形区域 只有当 drawFilled = true 时， 有作用
        fillGradient: {
          colors: [processColor(petrel), processColor(greenBlue)],
          positions: [0, 0.5],
          angle: 90, // 角
          orientation: "TOP_BOTTOM"
        },
        // 填充透明度
        fillAlpha: 1000,
      }
    }
    let xAxis = {
      axisLineWidth: 0,
      drawLabels: true,
      position: 'BOTTOM',
      legend: false,
      drawAxisLine: true,
      drawGridLines: false,
      right: {
        enabled: false
      }
    }

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
    dispatch(signAction.signList())
    dispatch(signAction.sign(3))
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
  componentDidMount() {}
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
          data: {
            dataSets: [{
              ...dataStructure,
              values: data.TW
            }]
          },
          xAxis
        }
      })
      this.setState({
        breathing: {
          data: {
            dataSets: [{
              ...dataStructure,
              values: data.HX
            }]
          },
          xAxis
        }
      })
      // 脉搏
      this.setState({
        pulse: {
          data: {
            dataSets: [{
              ...dataStructure,
              values: data.MB
            }]
          },
          xAxis
        }
      })
      // 血氧饱和度
      this.setState({
        bloodOxygenSaturation: {
          data: {
            dataSets: [{
              ...dataStructure,
              values: data.XYBHD
            }]
          },
          xAxis
        }
      })
    }
  }
  componentWillUnmount() {}

  render() {
    const {
      bloodPressure,
      temperature,
      breathing,
      pulse,
      bloodOxygenSaturation
    } = this.state;

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


      </ScrollView>
    );
  }
}

SignTrend.navigationOptions = ({ navigation, navigationOptions }) => {
  const { params } = navigation.state;
  return {
    title: '体征趋势',
  }
};
export default connect(state => ({...state.user.sign}))(SignTrend)
