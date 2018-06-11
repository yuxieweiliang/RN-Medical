import storage from '../../storage'
import url from '../url'




export default {
  /**
   * 添加体征
   */
  postSign: {
    url: url.postUserInfo,
    method: 'post'
  },
  /**
   * 体征列表
   */
  sign: {
    url: url.getUserInfo,
    save: function(data) {
      console.log(data)
      // storage.save()
    }
  },
  /**
   * 体征列表
   */
  signList: {
    url: url.getUserInfoList,
    save: function(data) {
      console.log(data)
      // storage.save()
    }
  },

}