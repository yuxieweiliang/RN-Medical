import { AsyncStorage } from 'react-native'
let defaultExpires = 1000 * 3600 * 24 // one day
class Storage {
  constructor(options = {}) {
    this._SIZE = options.size || 1000;   // maximum capacity 最大容量
    this.defaultExpires = options.defaultExpires || defaultExpires;// 过期时间
    this.enableCache = options.enableCache !== false; // 使用缓存
    this._storage = AsyncStorage;
    this._innerVersion = 1;
    this.cache = {}; // 缓存
  }

  /**
   * 读取key字段并将结果作为第二个参数传递给callback。
   * 如果有任何错误发生，则会传递一个Error对象作为第一个参数。
   * 返回一个Promise对象。
   * @param key
   * @returns {*|Promise.<TResult>}
   */
  getItem(key) {
    // 获取当前时间
    let now = new Date().getTime();
    return this._storage.getItem(key).then(res => {
      try {
        let data = JSON.parse(res)
        // 如果已经过期 则删除掉里面的数据， 然后异步获取
        if(data.expires <= now) {
          this.removeItem(key)
          return null
          // return this.sync[key](option)
        }
        return data.data
      } catch(err) {

        this.removeItem(key)
        return null
      }
    })
  }

  /**
   * 将key字段的值设置成value，并在完成后调用callback函数。
   * 如果有任何错误发生，则会传递一个Error对象作为第一个参数。
   * 返回一个Promise对象。
   * @param key 保存的 key
   * @param data 保存的 数据
   * @param expires 时间戳
   * @returns {*}
   */
  setItem(key, data, expires = this.defaultExpires) {
    // 组装数据
    let dataToSave = { data: data };
    // 获取当前时间
    let now = new Date().getTime();

    if (key.toString().indexOf('_') !== -1) {
      console.error('Please do not use "_" in key!');
    }

    if (typeof data === 'undefined') {
      console.error('"data" is required in setItem()!');
    }

    // 添加时间戳
    if(expires !== null) {
      dataToSave.expires = now + expires;
    }

    // 添加内存缓存
    if(this.enableCache) {
      this.cache[key] = dataToSave;
    }
    return this._storage.setItem(key, JSON.stringify(dataToSave))
  }

  /**
   * 删除一个字段。返回一个Promise对象。
   * @param key
   * @returns {*}
   */
  removeItem(key) {
    return this._storage.removeItem(key)
  }

  /**
   * 假设已有的值和新的值都是字符串化的JSON，则将两个值合并。
   * 返回一个Promise对象。
   * 还没有被所有原生实现都支持。
   * @param key
   * @param data
   * @returns {*}
   */
  mergeItem(key, data) {
    return this._storage.mergeItem(key, JSON.stringify({ data }))
  }

  /**
   * 删除全部的AsyncStorage数据，不论来自什么库或调用者。
   * 通常不应该调用这个函数——使用removeItem或者multiRemove来清除你自己的key。
   * 返回一个Promise对象。
   * @returns {*}
   */
  clear(key) {
    this._storage.clear()
  }

  /**
   * 获取所有本应用可以访问到的数据，不论来自什么库或调用者。
   * 返回一个Promise对象。
   * @returns {*}
   */
  getAllKeys() {
    return this._storage.getAllKeys()
  }

  /**
   * 清除所有进行中的查询操作。
   * @returns {*}
   */
  flushGetRequests() {
    return this._storage.flushGetRequests()
  }

  /**
   * multiSet和multiMerge都接受一个与multiGet输出值一致的key-value数组的数组。
   * 返回一个Promise对象。
   * multiSet([['k1', 'val1'], ['k2', 'val2']], cb);
   * multiGet(['k1', 'k2'], cb) -> cb([['k1', 'val1'], ['k2', 'val2']])
   * @param array
   * @returns {*}
   */
  multiSet(array) {
    for(let i = 0; i< array.length; i ++) {
      if(array[i].length !== 2) {
        console.warn(`array[ ${i} ] length must be two`)
      }
    }
    return this._storage.multiSet(array)
  }

  /**
   * 获取keys所包含的所有字段的值，
   * 调用callback回调函数时返回一个key-value数组形式的数组。
   * 返回一个Promise对象。
   * multiGet(['k1', 'k2'], cb) -> cb([['k1', 'val1'], ['k2', 'val2']])
   * @param array
   * @returns {*}
   */
  multiGet(array) {
    return this._storage.multiGet(array)
  }

  /**
   * 将多个输入的值和已有的值合并，要求都是字符串化的JSON。
   * 返回一个Promise对象。
   * 还没有被所有原生实现都支持。
   * @param array
   * @returns {*}
   */
  multiMerge(array) {
    return this._storage.multiGet(array)
  }

  /**
   * 删除所有键在keys数组中的数据。返回一个Promise对象。
   * @param array
   * @returns {*}
   */
  multiRemove(array) {
    return this._storage.multiRemove(array)
  }

}
export default new Storage()