/*import moment from 'moment';
require('moment/locale/zh-cn.js');*/


/**
 * 获取当前值的类型
 * @param obj
 * @param target
 * @returns {*}
 */
export function typeOf(obj, target) {
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
export function b64Encode(str) {
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
export function b64Decode(str) {
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
export function createParams(params) {
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
export function extend(object, methods) {
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
export function toUppercase(str, start, end) {
  if(end) {
    return str.substring(0, start) + str.substring(start, end).toUpperCase() + str.substring(end);
  } else if(start){
    return str.substring(0, start).toUpperCase() + str.substring(start);
  } else {
    return str.substring(0,1).toUpperCase() + str.substring(1);
  }
}

/**
 * 按照英文字母排序
 * @param a
 * @param b
 * @param lang
 * @returns {number}
 */
export function locale(a, b, lang = 'zh-Hans-CN') {
  return a.localeCompare(b, lang, {sensitivity: 'accent'})
}

export function pySegSort(arr) {
  let sort = arr.sort(locale)
  if(!String.prototype.localeCompare){
    return null;
  }
  let letters = "*abcdefghjklmnopqrstwxyz".split('');
  let zh = "阿八嚓哒妸发旮哈讥咔垃麻拏噢妑七呥扨它穵夕丫帀".split('');

  let segments = [];
  let curr;
  letters.map(function(items, key){
    curr = {letter: items, data:[]};

    sort.map(function(item) {
      /**
       * 当前值大于等于 zh 中的值，也就是排位相同或者更靠后
       * 并且 必须小于后一个，就是比后一个靠前
       */
      if((locale(item, zh[key-1]) >= 0) && (locale(item, zh[key]) === -1)) {
        curr.data.push(item);
      }
    });

    // 只返回有值的
    if(curr.data.length) {
      segments.push(curr);
    }
  });
  return segments;
}
