
  /**
   * 获取当前值的类型
   * @param obj
   * @param target
   * @returns {*}
   */
  function typeOf(obj, target) {
    var _obj = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

    if (target) {
      return _obj === target
    }
    return _obj
  }

  /**
   * 将字符串转换为 base64    -> 不支持  encodeURIComponent
   * @param str
   * @returns {string}
   */
  function b64Encode(str) {
    return btoa(encodeURIComponent(str)
      .replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
      })
    );
  }
  /**
   * 将base64转为中文    -> 不支持  decodeURIComponent
   * @param str
   * @returns {string}
   */
  function b64Decode(str) {
    return decodeURIComponent(atob(str)
      .split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
  }

  /**
   * 组装查询字符串 &key=value&key=value
   * @param params
   * @returns {string}
   */
  function createParams(params) {
    var string = ''
    if(typeOf(params, 'object')) {
      // 如果是 对象
      for(var key in params) {
        string += `${key}=${params[key]}&`
      }
    } else {
      console.log('params is no string or object')
    }
    return string.substring(0, string.length -1)
  }

  /**
   * 复制
   * @param object
   * @param methods
   */
  function extend(object, methods) {
    for(var i in methods) {
      object[i] = methods[i]
    }
  }

  /**
   * 字母大写
   * @param str
   * @param start
   * @param end
   * @returns {string}
   */
  function toUppercase(str, start, end) {
    if(end) {
      return str.substring(0, start) + str.substring(start, end).toUpperCase() + str.substring(end);
    } else if(start){
      return str.substring(0, start).toUpperCase() + str.substring(start);
    } else {
      return str.substring(0,1).toUpperCase() + str.substring(1);
    }
  }

module.exports = {
  extend: extend,
  typeOf: typeOf,
  b64Encode: b64Encode,
  b64Decode: b64Decode,
  createParams: createParams,
  toUppercase: toUppercase,
};


