import React, { Component } from 'react';
import { Text, Image,ScrollView, View, Dimensions  } from 'react-native';
import styles from './style'
import { connect } from 'react-redux'
import { getExpert } from '../../reducers/expert/actions'
import Card from '../../components/Card'


const TITLE = '专家主页'
const { width, height } = Dimensions.get('window');


class ExpertHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  /**
   * 检查是否登录
   * */
  componentWillMount() {
    let { dispatch, expert, token } = this.props
    let UserID = expert.UserID
    console.log(expert)

    getExpert({hospitalId: 1001, userId: UserID})
  }
  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    const { expert } = this.props

    return (

      <ScrollView style={styles.container}>
        <View>
          <View style={styles.doctorCardBox}>
            <Image style={{width: '100%', opacity: .5, height: 200}} source={require('../../../assets/images/a3.jpg')}/>
            <View style={styles.doctorCard}>
              <Image style={styles.doctorImage} source={require('../../../assets/images/a2.jpg')}/>
              <View style={styles.doctorTextContent}>
                <Text style={styles.doctorName}>{expert && expert.UserName}</Text>
                <Text>{expert && expert.UserType}</Text>
              </View>
            </View >
          </View>
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
      </ScrollView>
    );
  }
}


const createState = function(state) {
  return ({
    ...state.appointmentConsultation,
  })
}

export default connect(createState)(ExpertHome)
