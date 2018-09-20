export default {
  createStructure(option = {}) {
    let Doctors = '', MerchantName = ''

    if(option.Doctors) {
      option.Doctors.map(item => {
        Doctors += (Doctors ? ',' : '') + item.UserName;
        MerchantName = item.MerchantName
      })
    }

    let structure =  [
      {title: '姓名', key: 'UserName', value: option.UserName, show: true},
      {title: '年龄', key: 'Age', value: null, show: true},
      {title: '性别', key: 'Sex', value: option.Sex, show: true},
      {title: '身高', key: 'ShenGao', value: option.BodyHeight, show: true},
      {title: '证件号码', key: 'IDCard', value: option.IDCard, show: true},
      {title: '关注病种', key: 'fd', value: null, show: true},
      {title: '关注医院', key: 'MerchantName', value: MerchantName, show: true},
      {title: '关注医生', key: 'Doctors', value: Doctors, show: true},
      // {title: '手机号码', key: null, value: null, show: true},
    ]
    if(!option) {
      return structure
    }



    return structure.map((item, i) => {
      if(!item.key || (!option || !option[item.key])) {
        return item
      }

      return {
        ...item,
        value: option[item.key] + ''
      }
    }).filter(item => item)
  }
}