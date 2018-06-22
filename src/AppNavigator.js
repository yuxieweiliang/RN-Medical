import React from 'react';
import { BackHandler, StatusBar } from "react-native";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions, StackNavigator } from 'react-navigation';
import AppNavigator from './router/DrawerNavigator'

import { addListener } from './utils/redux';

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigator: PropTypes.object.isRequired,
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, navigator } = this.props;
    if (navigator.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { dispatch, navigator } = this.props;

    const navigation = addNavigationHelpers({
      dispatch,
      state: navigator,
      addListener,
    });
    return (
      <AppNavigator
        navigation={navigation}
      />

    );
  }
}

const mapStateToProps = state => {

  // console.log(state)
  return ({
    navigator: state.navigator,
  });
}

export default connect(mapStateToProps)(AppWithNavigationState);
