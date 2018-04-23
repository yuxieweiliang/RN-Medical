function createType(root) {
  return child => root + '/' + child
}


const systemRoot = createType('system')
export const system = {
  beforeLogin: systemRoot('准备登陆'),
  Login: systemRoot('登陆成功'),
  afterLogin: systemRoot('登陆失败'),
}