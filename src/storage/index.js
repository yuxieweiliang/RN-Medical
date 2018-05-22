import Storage from './storage';
import syncAction from './syncAction'


let oldStorage
let newStorage
let size = 1000
let defaultExpires = 1000 * 3600 * 24

let NewStorage = function() {
  this._init.apply(this, arguments)
}

NewStorage.prototype = {
  _init() {
    oldStorage = new Storage({
      size: size,
      storageBackend: localStorage,
      defaultExpires: defaultExpires,
      enableCache: true,
      sync: syncAction.data
    })
  },
  load(key, option) {
    return oldStorage.load({
      key,
      autoSync: true,
      syncInBackground: true,
      option
    })
  },
  save(key, data) {
    return oldStorage.save(key, data)
  },
  remove(key) {
    return oldStorage.remove(key)
  }
}


export default new NewStorage()