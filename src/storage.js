import Storage from 'react-native-storage'
import { AsyncStorage } from 'react-native'
import { sync } from './sync'
import config from './config'

let root = config.server.api
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
function createSearch(data) {
  let str = ''
  for(let key in data) {
    str +=  `${key}=${data[key]}&`
  }
  return str
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
  load(key, option, sync = true) {
    return oldStorage.load({
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

  async get({api, syncParams, resolve, reject}) {
    let _this = this
    let url = root + api + createSearch(syncParams)
    let token = await this.load('token')

    return fetch(url, {
      method: 'GET',
      headers: {
        // 'Accept': '*!/!*',
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': "Bearer " + token,
        // 'Content-Type': 'text/plain',
      }
    })
      .catch(this.error)
      .then(this.json)
      .then(response => {
        console.log('get: -----------------------------------------------------')
        resolve(response)
        return response
      })
  },

  post({api, query, resolve, reject}, data) {

    // 如果时获取token
    if (api.indexOf('token') > -1) {
      root = config.server.auth
    }

    console.log(arguments)
    return fetch(root + api + createSearch(query), {
      method: 'POST',
      headers: {
        // 'Accept': '*/*',
        // 'Content-Type': 'application/json; charset=UTF-8',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        // 'Content-Type': 'text/plain',
      },
      body: createSearch(data)
    })
      .catch(this.error)
      .then(this.json)
      .then(res => {
        console.log('post: -----------------------------------------------------', res)
      if (res.Data) {
        resolve(res.Data)
        return res.Data
      }
      return res
    })
  },
  json(response) {
    return response.json()
  },
  error(err) {
    console.warn(err)
  }
}


export default newStorage ? newStorage : new CreateNewStorage