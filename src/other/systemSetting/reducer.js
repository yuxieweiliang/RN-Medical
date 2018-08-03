import { setting } from '../../type'

let initialState = {

}

let func = {

}

export default () => (
  state = initialState,
  action
) => (
  func[action.type]
    ? func[action.type].apply(this, arguments)
    : state
)