import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const borders = {
  borderWidth: 1,
  borderColor: 'red'
}

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'red',
    height: height - 20,
  },
  // 人物肖像盒子
  photoBox: {
    // height: 140,
    backgroundColor: '#6d9feb',
    paddingVertical: 30,
    /// paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    // ...borders
  },
  // 头像插件的样式 start
  boxStyle: {
    // height: 110,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    // ...borders
  },
  imageStyle: {
    height: 60,
    width: 60,
    borderRadius: 60
  },
  textStyle: {
    height: 40,
    lineHeight: 40,
    color: '#fff'
  },
  // 头像插件的样式 end

  // 中间列表盒子
  scrollBox: {
    flex: 1,
    // ...borders
  },
  listIconContent: {
    flex: 1,
    alignItems: 'flex-end'
  },
  // 按钮
  btnStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderRadius: 0,
    backgroundColor: '#fff',
    // ...borders
  },
  // 文字
  fontStyle: {
    color: '#333',
    fontSize: 16,
  },

  // 底部盒子     文字
  bottomBox: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start'
    // borderTopWidth: 1,
    // borderTopColor: '#ccc',
  },
  // 底部按钮
  bottomBtnStyle: {
    width: 50,
    height: 40,
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingRight: 0
  },
  // 底部文字
  bottomFontStyle: {
    color: '#333',
    fontSize: 14,
  },
});
