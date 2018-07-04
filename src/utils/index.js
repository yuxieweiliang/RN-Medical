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
 * 转码
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
 * 解码
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

export function randomString(len) {
  len = len || 32;
  let $chars = 'ABCDEFGHIJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  let maxPos = $chars.length
  let pwd = '';
  for (i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

/**
 * 将 userId 每两位分割成数组，并且取模32
 * 比如 242500262711 => [24, 25, 0, 0, 1, 11]
 * 然后取当前数字位置对应的英文字母 "yzaabl" 。
 * 密码是先将 userId 反转
 * 117262005242 => "lukaaq"
 * @param option
 * @returns {string}
 */
export function changeIdToString(option) {
  let en = 'ABCDEFGHIJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  let string = ''

  for(let i = 0; i < option.length; i+=2) {
    let item = option.substring(i, i + 2)

    let index = (item < 32 ? item : item % 32) * 1

    string += en[index]
  }
  return string
}

export function establishUsnPsw(userId) {
  let reverseId = userId.split('').reverse().join('')
  return {
    username: changeIdToString(userId),
    password: changeIdToString(reverseId)
  }
}