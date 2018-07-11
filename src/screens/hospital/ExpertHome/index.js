import React, { Component } from 'react';
import { Text, Image,ScrollView, View, Dimensions  } from 'react-native';
import styles from './style'
import { connect } from 'react-redux'
import CalendarStrip  from 'react-native-calendar-strip';
import { getHospitalDoctor } from '../../../reducers/expert/actions'
import moment from 'moment'
import Card from '../../../components/Card'
import Select from '../../../components/Select'


const TITLE = '专家主页'
const { width, height } = Dimensions.get('window');


class ExpertHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    // this.onDayPress = this.onDayPress.bind(this);
  }

  /**
   * 检查是否登录
   * */
  componentWillMount() {
    let { dispatch, doctor, token } = this.props
    let UserID = doctor.UserID

    getHospitalDoctor({hospitalId: 1001, userId: UserID})
  }
  componentDidMount() {}
  componentWillUnmount() {}

  onDateSelected(day) {
    this.setState({visible: true})
    console.log(moment(day).format('YYYY-MM-DD'))
    /*this.setState({
      selected: day.dateString
    });*/
    // alert('上午还是下午')
  }

  selectItem() {
    this.setState({visible: false})
    this.props.navigator.push({screen: 'Registration.Information'})
  }
  render() {
    const { expert } = this.props


    let customDatesStyles = [];
    let startDate = moment();
    for (let i = -7; i<12; i++) {
      customDatesStyles.push({
        startDate: startDate.clone().add(i, 'days'), // Single date since no endDate provided
        dateNameStyle: styles.someDateNameStyle,
        dateNumberStyle: styles.someDateNumberStyle, // Random color...
        dateContainerStyle: {backgroundColor: '#'+('#00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6)},
      });
    }

    return (

      <ScrollView style={styles.container}>
        <View>
          <View style={styles.doctorCardBox}>
            <Image style={{width: '100%', opacity: .5, height: 200}} source={require('../../../../assets/images/a3.jpg')}/>
            <View style={styles.doctorCard}>
              <Image style={styles.doctorImage} source={require('../../../../assets/images/a2.jpg')}/>
              <View style={styles.doctorTextContent}>
                <Text style={styles.doctorName}>{expert && expert.UserName}</Text>
                <Text>{expert && expert.UserType}</Text>
              </View>
            </View >
          </View>


          <Card title="预约时间">
            <CalendarStrip
              // 每个按钮 从左到右依次出现的动画
              calendarAnimation={{type: 'sequence', duration: 30}}
              //
              daySelectionAnimation={{type: 'background', duration: 300, highlightColor: '#9265DC'}}
              // 头部年月的样式
              calendarHeaderStyle={{color: 'white'}}
              // 日期数字的颜色
              dateNumberStyle={{color: 'white'}}

              // 日历插件的背景色
              calendarColor={'#7743CE'}
              // 日期数字的颜色
              dateNameStyle={{color: 'white'}}
              // 两侧按钮的宽度
              iconContainer={{flex: 0.1}}
              maxDayComponentSize={40}
              innerStyle={{height: 120}}
              style={{paddingTop: 10, paddingBottom: 10}}
              // 不现实每一天的名字
              // showDayName={false}
              // 定义每一个日期按钮的颜色
              // customDatesStyles={customDatesStyles}
              onDateSelected={(e) => this.onDateSelected(e)}
            />
          </Card>
          <Card title="预约挂号条款" style={{paddingBottom: 10}}>
            <Text style={{ paddingLeft: 10, paddingRight: 10}}>
              预约挂号条款预约挂号条款预约挂号条款预约挂号条款预约挂号条款预约挂号条款预约挂号条款预约挂号条款
            </Text>
          </Card>
          <Card title="患者评价" style={{paddingBottom: 10}}>
            <Text style={{ paddingLeft: 10, paddingRight: 10}}>
              预约挂号条款预约挂号条款预约挂号条款预约挂号条款预约挂号条款预约挂号条款预约挂号条款预约挂号条款
            </Text>
          </Card>
        </View>

        <Select
          dataStructure={['上午', '下午']}
          visible={this.state.visible}
          onClose={() => this.setState({visible: false})}
          selectItem={this.selectItem.bind(this)}
        />
      </ScrollView>
    );
  }
}


const createState = function(state) {
  return ({
    ...state.expert,
    ...state.system
  })
}

export default connect(createState)(ExpertHome)
