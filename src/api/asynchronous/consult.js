import storage from '../../storage'
import url from '../url'

function save(res, resolve, key) {
  let data = res && res.Data
  console.log(res)
  if(data){
    storage.save(key, data)
    // 成功则调用resolve
    resolve && resolve(data)
  }
}


export default {
  /**
   * 新建咨询留言
   */
  postAdviceMessage: {
    url: url.postAdviceMessage,
    method: 'post',
    save: function(data) {
      console.log(data)
      // storage.save()
    }
  },

  /**
   * 咨询留言
   */
  adviceMessage: {
    url: url.adviceMessage,
    save: function(data) {
      console.log(data)
      // storage.save()
    }
  },

  /**
   * 新建咨询
   */
  postConsult: {
    url: url.postConsult,
    method: 'post',
    save: function(data) {
      console.log(data)
      // storage.save()
    }
  },

  /**
   * 咨询列表
   */
  consultList: {
    url: url.consultList,
    save: function(data) {
      console.log(data)
      // storage.save()
    }
  },

  /**
   * 症状
   */
  postSymptom: {
    url: url.postSymptom,
    method: 'post',
    save: function(data) {
      console.log(data)
      // storage.save()
    }
  },

  /**
   * 咨询列表
   */
  symptomList: {
    url: url.getSymptomListByConsult,
    save: function(data) {
      console.log(data)
      // storage.save()
    }
  },
}