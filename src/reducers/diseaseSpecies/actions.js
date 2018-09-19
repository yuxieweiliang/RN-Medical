import * as types from './actionTypes';
import fetch from '../../utils/fetch'
import storage from '../../utils/storage'
import { createParams } from '../../utils'
import api from '../../url'




/**
 * 病种 { 列表 }
 * @returns {{type}}
 */
export function getDiseaseSpeciesList(option) {
  let url = api.getIllnessList(option)

  return (dispatch => {
    fetch.get(url)
      .then(function (res) {

        // console.log(res)

        if(res) {
          dispatch({
            type: types.DISEASE_SPECIES_LIST,
            data: res.Data
          })
        }
      })
  })
}


export const diseaseSpeciesChange = (data) => {
  storage.setItem('diseaseSpecies', data)
  return ({
    type: types.DISEASE_SPECIES,
    data,
  })
}


