import React, { Component } from 'react';
import { Text, TouchableHighlight, TouchableOpacity, View, ScrollView, Image, Dimensions } from 'react-native';
import styles from './style'
const { width, height } = Dimensions.get('window');

class Card extends Component {

  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    const { title, more, children, style = {}} = this.props
    // console.log(children)
    return (
      <View style={[styles.container, style]}>
        {
          title && (
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <Text style={styles.headerFont}>{title}</Text>
              </View>
              {
                more && (
                  <TouchableOpacity
                    style={styles.headerRight}
                    onPress={() => this.props.navigation.navigate('HealthExposure')}>
                    <Text style={styles.headerFont}>更多</Text>
                  </TouchableOpacity>
                )
              }
            </View>
          )
        }

        {/*     主体内容自定义     */}
        { children }
      </View>
    );
  }
}
export default Card