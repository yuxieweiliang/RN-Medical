import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, View, Image, TouchableNativeFeedback, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Content, List, ListItem , Item, Left , Right, Icon, Thumbnail  } from 'native-base';
import behavior from './behavior'
import HeaderView from '../../components/HeaderView'
import { getPatient } from '../../reducers/patient/actions'
import { registerForWY } from '../../reducers/app/actions'
import { server } from '../../config'
import styles from './style'


const borderWidth = StyleSheet.hairlineWidth;
const { width, height } = Dimensions.get('window');

class UserPage extends React.Component {
  componentDidMount() {}

  componentWillMount() {


    this.props.dispatch(getPatient())


    /*.then(res => {
        // this.props.dispatch(registerForWY())
      })*/
  }

  navigate(router, title) {

    this.props.navigator.push({
      screen: `Koe.${router}`,
      title
    })
  }

  render() {
    const { patient } = this.props
    const messageStructure = patient && behavior.createStructure(patient)
    const portrait = patient ? {uri: server.file + patient.ImageUrl} : require('../../../assets/images/a3.jpg')

    return (
      <Container style={{backgroundColor: '#eee'}}>
        <HeaderView
          {...this.props}
          avatar={ portrait }
          title="我的"
        />

        <Content>
          <List>
            <Item style={[styles.listItem, {marginTop: 20}]}>
              <TouchableOpacity onPress={() => this.navigate('Self.QRCode')}>
                <Left style={{flex: 1, flexDirection: 'row'}}>
                  <Thumbnail square source={ portrait } />
                  <View style={{paddingLeft: 10}}>
                    <Text style={{
                      fontSize: 16,
                      color: '#333',
                      height: 30,
                      lineHeight: 30
                    }}>{ patient.UserName }</Text>
                    <Text style={{color: '#888'}}>账号ID：{ patient.UserID }</Text>
                  </View>
                </Left>
              </TouchableOpacity>
              {/*<Icon
                type="EvilIcons"
                name="chevron-right"
                style={{fontSize: 30}}
              />*/}
            </Item>

            <Item
              style={[styles.listItem, {marginTop: 20}]}
              onPress={() => this.navigate('Self.Examination', '检查')}
            >
              <Left style={styles.listItemLeft}>
                <Icon
                  type="FontAwesome"
                  name="stethoscope"
                  style={{fontSize: 20}}
                />
                <Text style={styles.listItemLeftText}>检查</Text>
              </Left>
            </Item>

            <Item
              style={[styles.listItem, {marginTop: 20}]}
              onPress={() => this.navigate('Self.Follow', '关注')}
            >
              <Left style={styles.listItemLeft}>
                <Icon
                  type="FontAwesome"
                  name="heart-o"
                  style={{fontSize: 20}}
                />
                <Text style={styles.listItemLeftText}>关注</Text>
              </Left>
            </Item>

            <Item
              style={[styles.listItem, {marginTop: 20}]}
              onPress={() => this.navigate('Receipt.List', '回执')}
            >
              <Left style={styles.listItemLeft}>
                <Icon
                  type="FontAwesome"
                  name="file-movie-o"
                  style={{fontSize: 20}}
                />
                <Text style={styles.listItemLeftText}>回执</Text>
              </Left>
            </Item>

            <Item
              style={[styles.listItem, {marginTop: 20}]}
              onPress={() => this.navigate('Prescription.List', '处方列表')}
            >
              <Left style={styles.listItemLeft}>
                <Icon
                  type="FontAwesome"
                  name="file-text-o"
                  style={{fontSize: 20}}
                />
                <Text style={styles.listItemLeftText}>处方列表</Text>
              </Left>
            </Item>

            <Item
              style={[styles.listItem, {marginTop: 20}]}
              onPress={() => this.navigate('Self.Registration', '预约')}
            >
              <Left style={styles.listItemLeft}>
                <Icon
                  type="Ionicons"
                  name="time"
                  style={{fontSize: 24}}
                />
                <Text style={styles.listItemLeftText}>预约</Text>
              </Left>
            </Item>

            <Item
              style={[styles.listItem, {marginTop: 20}]}
              onPress={() => this.navigate('Self.Record', '记录')}
            >
              <Left style={styles.listItemLeft}>
                <Icon
                  type="FontAwesome"
                  name="hourglass-1"
                  style={{fontSize: 20}}
                />
                <Text style={styles.listItemLeftText}>记录</Text>
              </Left>
            </Item>

            <Item
              style={[styles.listItem, {marginTop: 20}]}
              onPress={() => this.navigate('Self.Follow')}
            >
              <Left style={styles.listItemLeft}>
                <Icon
                  type="FontAwesome"
                  name="share-alt"
                  style={{fontSize: 20}}
                />
                <Text style={styles.listItemLeftText}>推荐[智护康]给好友</Text>
              </Left>
            </Item>
            <Item
              style={[styles.listItem, {marginTop: 20}]}
              onPress={() => this.props.navigator.push({screen: 'Koe.Telephone.Answer'})}
            >
              <Left style={styles.listItemLeft}>
                <Icon
                  type="FontAwesome"
                  name="share-alt"
                  style={{fontSize: 20}}
                />
                <Text style={styles.listItemLeftText}>推荐[智护康]给好友</Text>
              </Left>
            </Item>
          </List>
        </Content>



      </Container>
    );
  }
 /* _renderItem({ index, item, section }) {
    return (
      <TouchableNativeFeedback
        title="Go to Details"
        onPress={() => item.type && navigator.push({screen: `Koe.${item.type}`})}
      >
        <View style={styles.list}>
          <Text style={styles.label}>{item.title}</Text>
          {
            item.icon
              ? item.icon
              : (
              <Icon
                type="EvilIcons"
                name="chevron-right"
                style={{fontSize: 30}}
              />
            )
          }
        </View>
      </TouchableNativeFeedback>
    )
  }*/
}
export default connect((state) => ({
  ...state.consult,
  ...state.patient
}))(UserPage)