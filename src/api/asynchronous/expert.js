import storage from '../../storage'
import url from '../url'


export default {
  /**
   * 专家详细信息
   */
  expert: {
    url: url.getHospitalDoctor,
    save(option) {
      console.log('post:', option.access_token)

      console.log(option, storage)
    },
  },

  /**
   * 专家列表
   */
  expertList: {
    url: url.getDepartmentDoctorList,
    save(option) {
      console.log('post:', option.access_token)

      console.log(option, storage)
    },
  },
}