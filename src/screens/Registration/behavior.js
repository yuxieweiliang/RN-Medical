// 访问登录接口 根据返回结果来划分action属于哪个type,然后返回对象,给reducer处理


export default {
  _verifyRegistration(appointDate, hospital, department) {
    if (!appointDate) {
      alert('请选择预约时间')
      return false;
    }

    if (!hospital) {
      alert('请选择医院')
      return false;
    }

    if (!department) {
      alert('请选择科室')
      return false;
    }

    return true;
  }
}