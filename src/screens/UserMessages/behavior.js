export default {
  createStructure(option = {}) {
    let structure =  [
      {title: '姓名', key: 'UserName', value: null, show: true},
      {title: 'ID', key: 'ID', value: null, show: false},
      {title: 'UserID', key: 'UserID', value: null, show: false},
      {title: '年龄', key: 'Age', value: null, show: true},
      {title: '性别', key: 'Sex', value: null, show: true},
      {title: '身高', key: 'ShenGao', value: null, show: true},
      {title: '证件号码', key: 'IDCard', value: null, show: true},
      {title: '关注医院', key: null, value: null, show: true},
      {title: '关注病种', key: null, value: null, show: true},
      {title: '手机号码', key: null, value: null, show: true},
    ]
    return structure.map((item, i) => {
      if(!item.key || !option[item.key]) {
        return false
      }

      return {
        ...item,
        value: option[item.key] + ''
      }
    }).filter(item => item)
  }
}