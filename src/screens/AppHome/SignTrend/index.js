import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, Modal, FlatList, View, Dimensions, processColor } from 'react-native';
import { Container, Content,  Button,  ScrollableTab, Title, Tab, Tabs,  CardItem, Left, Right,  Text } from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import { LineChart } from 'react-native-charts-wrapper'
import update from 'immutability-helper';
import { connect } from 'react-redux'
import moment from 'moment'
import { getSignList } from '../../../reducers/sign/actions'
import Card from '../../../components/Card'
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

    /*Icon.getImageSource('bars', 24).then(icon => {
      this.props.navigator.setButtons({
        rightButtons: [{
          title: '保存',
          id: 'SignTrendMenu',
          icon
        }],
        animated: true
      });
      /!**
       * 点击右上角按钮执行函数
       *!/
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    });*/
  }
  onNavigatorEvent(e) {
    console.log(e)
    if (e.type == 'NavBarButtonPress') {

      if (e.id == 'SignTrendMenu') {
        this.props.dispatch({type: 'SignTrendModel'})
      }
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
    option.map((item, i) => {
      ['HX', 'MB', 'TW', 'XL', 'XYBHD',  'XYH',  'XYL'].map(key => {
        if(!data[key]) {
          data[key] = []
        }
        data[key].push({
          x: i,
          y: item[key],
          marker: item[key] + ' '
        })
      })
    })
    return data
  }
  componentWillReceiveProps(nextProps) {
    const { signList } = nextProps
    if(signList) {
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

    // console.log(this.state, bloodPressure)
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


        {/*<Modal
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
        </Modal>*/}

      </Content>
    );
  }
}


export default connect(state => ({...state.sign}))(SignTrend)
