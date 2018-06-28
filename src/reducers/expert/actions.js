import * as types from './actionTypes';
import fetch from '../../../utils/fetch'
import storage from '../../../utils/storage'
import url from '../../../api/url'

/**
 * 医护人员列表
 * @returns {{type}}
 */
export function getHospitalDoctor() {
  let url = url.getHospitalDoctor()

  fetch.post(url)

  return {type: types.LOGIN};
}

/**
 * 专家详细信息
 * @returns {{type}}
 */
export function getDepartmentDoctorList() {
  let url = url.getDepartmentDoctorList()

  fetch.post(url)

  return {type: types.LOGIN};
}
