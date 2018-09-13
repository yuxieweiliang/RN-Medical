import * as types from './actionTypes';
import Immutable from 'seamless-immutable';
import storage from '../../utils/storage'

const initialState = Immutable({
  // 病害
  diseaseSpecies: null,
  // 病害种类
  diseaseSpeciesList: [],
});

const func = {
  // 病种
  [types.DISEASE_SPECIES](state, action) {
    return state.merge({
      diseaseSpecies: action.data
    });
  },
  // 病种列表
  [types.DISEASE_SPECIES_LIST](state, action) {
    return state.merge({
      diseaseSpeciesList: action.data
    });
  },

}


export default (state = initialState, action = {}) => (
  func[action.type]
    ? func[action.type](state, action)
    : state
)
