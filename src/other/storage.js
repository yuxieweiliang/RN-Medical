let defaultExpires = 1000 * 3600 * 24 // one day
export default class Storage {
  constructor(options = {}) {
    this._SIZE = options.size || 1000;   // maximum capacity 最大容量
    this.sync = options.sync || {};      // remote sync method 远程同步方法
    this.defaultExpires = options.defaultExpires ? // 过期时间
      options.defaultExpires : defaultExpires;
    this.enableCache = options.enableCache !== false; // 使用缓存
    this._storage = options.storageBackend || null;
    this._innerVersion = 1;
    this.cache = {}; // 缓存


    if (this._storage && this._storage.setItem) {
      try {
        let promiseTest = this._storage.setItem('__react_native_storage_test', 'test');
        this.isPromise = !!(promiseTest && promiseTest.then);
      }
      catch (e) {
        console.warn(e);
        delete this._storage;
        throw e;
      }
    } else {
      console.warn(`Data would be lost after reload cause there is no storageBackend specified!
      \nEither use localStorage(for web) or AsyncStorage(for React Native) as a storageBackend.`)
    }
  }
  toPromise(item) {
    let _this = this
    return function(key, value) {
      let data = { ok: true }
      let promise = null

      if(value) {
        data.Data = value.data
        promise = _this._storage[item](key, value)
      } else {
        promise = _this._storage[item](key)
        data.Data = promise ? JSON.parse(promise).Data : promise
      }

      return _this.isPromise ? promise : Promise.resolve(JSON.stringify(data))
    }
  }
  getItem(key) {
    return this.toPromise('getItem')(key)
  }
  setItem(key, value) {
    return this.toPromise('setItem')(key, JSON.stringify(value))
  }
  removeItem(key) {
    return this.toPromise('removeItem')(key)
  }

  /**
   * 保存
   * @param key 保存的 key
   * @param data 保存的 数据
   * @param expires 时间戳
   * @returns {*}
   */
  save(key, data, expires = this.defaultExpires) {
    // 组装数据
    let dataToSave = { data: data };
    // 获取当前时间
    let now = new Date().getTime();

    if (key.toString().indexOf('_') !== -1) {
      console.error('Please do not use "_" in key!');
    }

    if (data === undefined) {
      console.error('"data" is required in save()!');
    }

    // 添加时间戳
    if(expires !== null) {
      dataToSave.expires = now + expires;
    }

    // 添加内存缓存
    if(this.enableCache) {
      this.cache[key] = dataToSave;
    }
    return this.setItem(key, dataToSave);
  }
  remove(key) {
    return this.removeItem(key)
  }

  /**
   *
   * @param key 获取的键
   * @param autoSync 是否强制异步获取
   * @param syncInBackground 是否数据过期时，先显示过期内容，再更新
   * @param option 参数
   * @returns {Promise}
   */
  load({ key, autoSync = true, syncInBackground = true, option }) {

    if(autoSync) {// 同步
      return this.getItem(key).then(res => {
        let data = JSON.parse(res).Data
        console.log('同步:', res)
        if(data) {
          return data
        } else { // 没有数据时，异步获取
          return this.fetch(key, option)
        }
      })
    } else {// 异步
      console.log('异步:', this.sync)
      return this.fetch(key, option)
    }
  }
  fetch(key, option) {

    if(key.indexOf('.') > -1) {
      let keys = key.split('.')
      if(keys.length > 2) {
        console.warn('最多支持两级！')
      }
      return this.sync[keys[0]][keys[1]](option)
    } else {
      return this.sync[key](option)
    }
  }
  clear(key) {
    this._storage.clear()
  }

}
