import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, Image, TouchableOpacity, StyleSheet, Platform, Alert } from 'react-native'
import { Container, Content, Header, Button, Tab, Tabs, Card, CardItem, Left, Right, Icon, Text } from 'native-base';
import { appInitialized } from '../../reducers/app/actions'
import { themes } from '../../config'
import { initState, JPushAlert } from '../../reducers/video/actions'

const uri = "http://fileserver.api.koenn.cn:81/UploadImages/UserCredentials/2018/07-27/877554311095878178/51a6eaf0-99e6-48d5-b136-ecc8e105553d.png";

class UserScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}

  _navToConsult = () => {
    const { patient, expert } = this.props;
    /*this.props.navigator.popToRoot({
     animated: true,
     animationType: 'fade',
     });*/


    this.props.dispatch(appInitialized('app'));
    this.props.dispatch(JPushAlert(patient.UserID, expert.UserID, true)).then(res => {
      console.log(res);
      if(res) {

        this.props.navigator.push({
          screen: 'Koe.Telephone.Video',
          passProps: {
            dial: true, // 拨打
            onCancel:(err) => {

              this.props.navigator.pop();

              // 不是异常的时候，打开回执页面
              if(!err) {
                this.props.navigator.push({screen: 'Koe.Receipt'})
              }
            }
          }
        })
        // 跳转到视频页面
        // navigator.push({screen: 'Koe.InterrogationVideo'})
      }
    })
    // this.props.navigator.switchToTab({ tabIndex: 1 });
  };

  _navToVideo = () => {
    this.props.navigator.push({
      screen: 'Koe.Telephone.Video',
      navigatorStyle: {
        navBarHidden: true,
      },
      passProps: {
        user: this.props.user,
        onCancel:(err) => {
          // this.props.navigator.pop()
          this.props.navigator.push({
            screen: 'Koe.Receipt',
            navigatorStyle: {
              navBarHidden: true,
            },
          })
        }
      }
    });
  };


  render() {
    const { dial } = this.props;

    console.log(this.props);
    return (
      <Container style={styles.container}>
        <View style={styles.portraitBox}>
          <Image style={styles.portrait} source={{uri}} />
        </View>
        <View style={styles.btnBox}>
          <TouchableOpacity
            style={styles.cancel}
            onPress={() => this._navToConsult()}
          >
            <Icon type="FontAwesome" name="phone" style={styles.phone}/>
          </TouchableOpacity>

          {
            !dial && (
              <TouchableOpacity
                style={styles.confirm}
                onPress={() => this._navToVideo()}
              >
                <Icon type="FontAwesome" name="phone"  style={styles.phone}/>
              </TouchableOpacity>
            )
          }


        </View>
      </Container>
    );
  }
}

export default connect(store => ({
  ...store.patient,
  ...store.expert,
}))(UserScreen);

const styles = StyleSheet.create({
  container: {
    // ...themes.Components.Container,
    backgroundColor: '#1b70f2'
  },
  portraitBox: {
    height: '50%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  portrait: {
    width: 100,
    height: 100,
  },
  btnBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '25%'
  },
  cancel: {
    backgroundColor: '#d64146',
    width: 50,
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotate:'135deg'}]
  },
  phone: {
    color: 'white',
    fontSize: 26
  },
  confirm: {
    backgroundColor: '#12b522',
    width: 50,
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
