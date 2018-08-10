export default {
  createStructure(option = {}) {
    let structure =  [
      {title: '姓名', key: 'UserName', value: null, show: true},
      {title: '年龄', key: 'Age', value: null, show: true},
      {title: '性别', key: 'Sex', value: null, show: true},
      {title: '身高', key: 'ShenGao', value: null, show: true},
      {title: '证件号码', key: 'IDCard', value: null, show: true},
      {title: '关注病种', key: 'fd', value: null, show: true},
      {title: '关注医院', key: 'fas', value: null, show: true},
      {title: '关注医生', key: 'ee', value: null, show: true},
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