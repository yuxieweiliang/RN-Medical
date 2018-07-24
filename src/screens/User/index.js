import React, { Component } from 'react'
import { Text, SectionList, StatusBar, View, Image, TouchableNativeFeedback, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, List, ListItem , Left , Right, Icon  } from 'native-base';
import behavior from './behavior'
import { getUser } from '../../reducers/user/actions'
import { registerForWY } from '../../reducers/app/actions'
import styles from './style'


const { width, height } = Dimensions.get('window');

class UserPage extends React.Component {
  componentDidMount() {}

  componentWillMount() {
      this.props.dispatch(getUser())/*.then(res => {
        // this.props.dispatch(registerForWY())
      })*/
  }
  render() {
    const { user } = this.props
    const messageStructure = user && behavior.createStructure(user)

    return (
      <View style={styles.container}>
        {
          user && (
            <SectionList
              style={{width, height: height - 200}}
              sections={messageStructure}
              renderItem={(o) => this._renderItem(o)}
              renderSectionHeader={(o) => (<View style={{height: 10}}/>)}
              ItemSeparatorComponent={(o) => (<View key="f"/>)/*   列表每项间隔    */}
              SectionSeparatorComponent={(o) => (<View key="f"/>)/*   列表分类间隔    */}
            />
          )
        }
      </View>
    );
  }
  _renderItem({ index, item, section }) {
    let { navigator } = this.props
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
                style={{fontSize: 40}}
              />
            )
          }
        </View>
      </TouchableNativeFeedback>
    )
  }
}
export default connect((state) => ({
  ...state.user
}))(UserPage)