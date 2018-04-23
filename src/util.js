
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

    // 如果是 字符串
    if(typeOf(params, 'string')) {
      string += ('&' + params)
    } else if(typeOf(params, 'object')) {
      // 如果是 对象
      for(var i in params) {
        string += ( '&' + i + '=' + params[i])
      }
    } else {
      console.log('params is no string or object')
    }
    return string
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

module.exports = {
  extend: extend,
  typeOf: typeOf,
  b64Encode: b64Encode,
  b64Decode: b64Decode,
  createParams: createParams,
};


