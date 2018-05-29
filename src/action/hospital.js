import storage from '../storage'
import { HOSPITAL } from '../type'


export default {
  getHospital(path) {
    return async dispatch => {
      try{
        const hospital = await storage.load('hospital.hospital', {path})

        dispatch({
          type: HOSPITAL.MESSAGE,
          data: hospital.Data
        })

      }catch(error){
        console.error(error)
      }
    }

  },
  getHospitalList(path) {
    return async dispatch => {
      try{
        const hospital = await storage.load('hospital.hospitalList', {path})

        dispatch({
          type: HOSPITAL.MESSAGE,
          data: hospital.Data
        })

      }catch(error){
        console.error(error)
      }
    }

  }
}