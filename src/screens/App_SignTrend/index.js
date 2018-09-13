import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, Modal, FlatList, View, Dimensions, processColor } from 'react-native';
import { Container, Content,  Button,  ScrollableTab, Title, Tab, Tabs,  CardItem, Left, Right,  Text } from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { LineChart } from 'react-native-charts-wrapper'
import update from 'immutability-helper';
import { connect } from 'react-redux'
import moment from 'moment'
import { getSignList, changeSign } from '../../reducers/signTrend/actions'
import Card from '../../components/Card'
import { option, config } from './dataConfig'
import styles from './style'


const greenBlue = "rgb(26, 182, 151)";
const petrel = "rgb(59, 145, 153)";
const TITLE = '体征趋势'
const { width, height } = Dimensions.get('window');


class SignTrend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bloodPressure: null,
      temperature: null,
      breathing: null,
      pulse: null,
      bloodOxygenSaturation: null,
    }
  }

  componentWillMount() {
    const { dispatch } = this.props
    dispatch(getSignList())
    // dispatch(signAction.sign(3))
  }

  handleSelect(event, e) {
    let entry = event.nativeEvent;
    let { TimePoint } = entry.data
    let { signList, dispatch } = this.props

    if (entry === null) {
      this.setState({ ...this.state, selectedEntry: null });
    } else {
      this.setState({ ...this.state, selectedEntry: JSON.stringify(entry) });
    }


    signList.map(item => {
      if(item.TimePoint === TimePoint) {
        dispatch(changeSign(item))
      }
    })

    //
    // console.log(entry, e, this.props)
    this.props.navigator.push({screen: 'Koe.SignTrendEdit'})
  }

  createSignData(option) {
    let data = {}
    option.map((item, i) => {
      ['HX', 'MB', 'TW', 'XL', 'XYBHD',  'XYH',  'XYL'].map(key => {
        if(!data[key]) {
          data[key] = []
        }

        // console.log(moment(item.TimePoint).format('YYYY-MM-DD'))
        data[key].push({
          x: moment(item.TimePoint).format('DD')*1-1,
          y: item[key],
          marker: item[key] + ' ',
          key,
          TimePoint: item.TimePoint,
        })
      })
    })
    return data
  }
  componentWillReceiveProps(nextProps) {
    const { signList } = nextProps

    // console.log(nextProps)

    if(signList && signList.length > 0) {
      let data = this.createSignData(signList)

      this.setState({
        bloodPressure: {
          dataSets: [{
            config: {
              ...config,
              color: processColor('red'),
              circleColor: processColor('red'),
            },
            label: "血压（高）",
            values: data.XYH,
          },{
            config: config,
            label: "血压（低）",
            values: data.XYL,
          }]
        },

        // 体温
        temperature: {
          dataSets: [{
            config: config,
            label: "体温",
            values: data.TW,
          }]
        },

        // 呼吸
        breathing: {
          dataSets: [{
            config: config,
            label: "呼吸",
            values: data.HX,
          }]
        },

        // 脉搏
        pulse: {
          dataSets: [{
            config: config,
            label: "脉搏",
            values: data.MB,
          }]
        },
        // 血氧饱和度
        bloodOxygenSaturation: {
          dataSets: [{
            config: config,
            label: "血氧饱和度",
            values: data.XYBHD,
          }]
        },
      })
    }
  }
  componentWillUnmount() {}

  componentDidMount() {
  }

  render() {
    const { bloodPressure, temperature, breathing, pulse, bloodOxygenSaturation } = this.state;
    const { navigator, dispatch } = this.props;

    // console.log(this.state)
    return (
      <Content style={styles.container}>

        <Card title="血压" style={styles.card}>
          {
            bloodPressure && (
              <LineChart
                style={styles.bloodPressure}
                data={bloodPressure}
                {...option}
                onSelect={this.handleSelect.bind(this)}
              />
            )
          }
        </Card>

        <Card title="体温" style={styles.card}>
          {
            temperature && (
              <LineChart
                style={styles.temperature}
                data={temperature}
                {...option}
                onSelect={this.handleSelect.bind(this)}
              />
            )
          }

        </Card>

        <Card title="呼吸" style={styles.card}>
          {
            breathing && (
              <LineChart
                style={styles.breathing}
                data={breathing}
                {...option}
                onSelect={this.handleSelect.bind(this)}
              />
            )
          }
        </Card>

        <Card title="脉搏" style={styles.card}>
          {
            pulse && (
              <LineChart
                style={styles.pulse}
                data={pulse}
                {...option}
                onSelect={this.handleSelect.bind(this)}
              />
            )
          }
        </Card>

        <Card title="血氧饱和度" style={styles.card}>
          {
            bloodOxygenSaturation && (
              <LineChart
                style={styles.bloodOxygenSaturation}
                data={bloodOxygenSaturation}
                {...option}
                onSelect={this.handleSelect.bind(this)}
              />
            )
          }
        </Card>
      </Content>
    );
  }
}


export default connect(state => ({...state.signTrend}))(SignTrend)
