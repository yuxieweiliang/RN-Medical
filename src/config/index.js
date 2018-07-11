import * as color from './color'
import * as component from './component'

const root = 'koenn.cn'
const port = 81
const server = {
  // 注册
  register: `http://reg.${root}:${port}`,
  // 登陆
  auth: `http://auth.${root}:${port}`,
  // 用户
  user: `http://usermgr.api.${root}:${port}`,
  // 用户体征信息
  userData: `http://userdata.api.${root}:${port}`,
  // 系统
  system: `http://sysdata.api.${root}:${port}`,
  // 文件
  file: `http://fileserver.api.${root}:${port}`,
  // 模板
  cms: `http://cms.api.${root}:${port}`,
}

let koe = null
export default {
  server,
  color,
  component,
}