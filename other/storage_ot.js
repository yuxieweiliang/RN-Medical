import Storage from 'react-native-storage'
import { AsyncStorage } from 'react-native'
import sync from './api'

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
   * @param key { key, ...params }
   * @param data { key, ...params }
   */
  save(key, data) {
    console.log(key, data)
    oldStorage.save({
      expires: defaultExpires,
      key,
      data
    })
  },

  /**
   * 通过key取数据
   * @param key
   * @param option
   * @param sync
   * @returns {*|Promise.<T>}
   */
  load(key, option) {

    console.log('remove token------------------------', key)
    return oldStorage.load({
      key,
      // 默认为true
      // 在没有找到数据或数据过期时自动调用相应的sync方法
      autoSync: false,
      // 默认为true
      // 意味着如果数据过期，在调用sync方法的同时先返回已经过期的数据。
      // 否则始终强制返回最新数据。
      syncInBackground: true,
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

  async get(url) {
    let token = await this.load('token')

    console.log('get: rul -> ', url)
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': "Bearer " + token,
      }
    })
      .catch(this.error)
      .then(res => {
        console.log('get: res ->', res)
        return res.json()
      })
  },

  async post(url, data, type) {
    let token = null
    let headers = {}

    if(type === 'token') {
      headers['Content-Type'] = "application/x-www-form-urlencoded; charset=UTF-8"
    } else if(!token){
      token = await this.load('token')
      headers['Authorization'] = "Bearer " + token
      headers['Content-Type'] = "application/json; charset=UTF-8"
    }

    console.log('post: url ->', url, data, headers)
    return fetch(url, {
      method: 'POST',
      headers,
      body: data
    })
      .catch(this.error)
      .then(res => {
        console.log('post: res ->', res)
        if(res.ok) {
          return res.json()
        } else {
          return res
        }
    })
  },
  error(err) {
    console.warn(err)
  }
}


export default newStorage ? newStorage : newStorage = new CreateNewStorage