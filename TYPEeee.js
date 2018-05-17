const createType = function(com) {
  return function(child) {
    console.log(child ? `${com}/${child}` : com)
    return child ? `${com}/${child}` : com
  }
}

const userInit = createType('用户')
export const user = {
  login: userInit('登陆')
}

