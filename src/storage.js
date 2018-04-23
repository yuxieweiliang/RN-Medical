import Storage from 'react-native-storage'
import { AsyncStorage } from 'react-native'
import { sync } from './sync'

let oldStorage
let newStorage
let size = 1000
let defaultExpires = 1000 * 3600 * 24


/**
 * 封装 storage
 * @constructor
 */
function CreateNewStorage(){
  this.init.apply(this, arguments)
}

CreateNewStorage.prototype = {
  /**
   * 初始化原先的 storage
   */
  init() {
    // console.log('initStorage')

    if (!oldStorage) {
      oldStorage = new Storage({
        // 最大容量
        size: size,
        // 存储引擎
        storageBackend: AsyncStorage,
        // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
        defaultExpires: defaultExpires,
        // 读写时在内存中缓存数据。默认启用。
        enableCache: true,
        // 如果storage中没有相应数据，或数据已过期，则会调用相应的sync方法，无缝返回最新数据。
        sync: sync
      })
    }
  },

  /**
   * 使用key来保存数据。
   * 除非你手动移除，这些数据会被永久保存，而且默认不会过期。
   * @param option { key, ...params }
   */
  save(option) {

    console.log('save', option)
    oldStorage.save({
      expires: defaultExpires,
      ...option
    })
  },

  /**
   * 通过key取数据
   * @param key
   * @param option
   * @param sync
   * @returns {*|Promise.<T>}
   */
  load(key, option, sync = true) {
    let data = oldStorage.load({
      key,
      // 默认为true
      // 在没有找到数据或数据过期时自动调用相应的sync方法
      autoSync: true,
      // 默认为true
      // 意味着如果数据过期，在调用sync方法的同时先返回已经过期的数据。
      // 否则始终强制返回最新数据。
      syncInBackground: sync,
      // 你还可以给sync方法传递额外的参数
      syncParams: {
        /*extraFetchOptions: { },// 各种参数
        someFlag: false,*/
        ...option,
      }
    })
      .catch(err => {
      //如果没有找到数据且没有sync方法，
      //或者有其他异常，则在catch中返回
      console.warn('message:', err);
      switch (err) {
        case 'NotFoundError':  // 数据找不到
          // TODO
          return err
          break
        case 'ExpiredError': // 过期错误
          // TODO
          return err
          break
        default:
          return err
      }
    })

    console.log(key, data)
    return data
  },

  // 获取某个key下的所有id(仅key-id数据)
  getIdsForKey(id, callback) {
    oldStorage.getIdsForKey(id).then(ids => {
      callback && callback(ids)
    })
  },

  // 获取某个key下的所有数据(仅key-id数据)
  getAllDataForKey(key, callback) {
    oldStorage.getAllDataForKey(key).then(users => {
      callback && callback(users)
    })
  },

  // !! 清除某个key下的所有数据(仅key-id数据)
  clearMapForKey(key) {
    oldStorage.clearMapForKey(key)
  },

  // 删除单个数据
  remove(key) {
    oldStorage.remove({
      key: key
    })
  },

  // !! 清空map，移除所有"key-id"数据（但会保留只有key的数据）
  clearMap() {
    oldStorage.clearMap()
  },

  get(option) {
    let url = 'http://47.94.97.210:8011/' + option
    console.log(url)
    return fetch(url).then(response => (response.status === 200) ? response.json() : {})
  },

  post(url, data) {
    return fetch(url, {
      method: 'POST',
      headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data)
    }).then(response => (response.status === 200) ? response.json() : {})
  }
}


export default newStorage ? newStorage : new CreateNewStorage