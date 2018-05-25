import Storage from './storage';
import { AsyncStorage } from 'react-native'
import syncAction from '../api'


let oldStorage
let newStorage
let size = 1000
let defaultExpires = 1000 * 3600 * 24

console.log(syncAction)
let NewStorage = function() {
  this._init.apply(this, arguments)
}
// http://47.94.97.210:8011/Common/GetLoginToken?token=&loginName=user%7C0132&psw=a
async function getItem() {
  try{
    console.log('1-------------', AsyncStorage)
    // AsyncStorage.setItem('system.token', 'fdsafdsafdsafdsa')
    let allKey =  await AsyncStorage.getAllKeys();
    console.log('2-------------', allKey)
  }catch (err) {
    console.log(err)
  }
}
getItem()
NewStorage.prototype = {
  _init() {

    oldStorage = new Storage({
      size: size,
      storageBackend: AsyncStorage,
      defaultExpires: defaultExpires,
      enableCache: true,
      sync: syncAction
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
