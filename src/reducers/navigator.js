import { NavigationActions as nav } from 'react-navigation';
import AppNavigator from '../router/DrawerNavigator'
import router from '../router/routes'
const { router: {getActionForPathAndParams, getStateForAction } } = AppNavigator

const action = {}
const state = {}
// Start with two routes: The Main screen, with the Login screen on top.
let routes = Object.keys(router)
for(let key in routes) {
  action[routes[key]] = getActionForPathAndParams(routes[key])
  state[routes[key]] = getStateForAction(action[routes[key]])
}


// console.log(action, state)
const initialNavState = getStateForAction(
  action.Login,
  // state.SignTrend,
);

// console.log(initialNavState)
function navigator(state = initialNavState, action) {
  let nextState;
  // console.log(action.type, '--------------------')
  switch (action.type) {
    case 'Login':
      nextState = getStateForAction(
        nav.back(),
        state
      );
      break;
    case 'Logout':

      nextState = getStateForAction(
        nav.navigate({ routeName: 'Login' }),
        state
      );
      break;
    default:
      nextState = getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}


export default navigator;
