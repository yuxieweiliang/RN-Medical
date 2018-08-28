// @flow

const type = {
  base: 'HelveticaNeue',
  bold: 'HelveticaNeue-Bold',
  emphasis: 'HelveticaNeue-Italic'
}

const size = {
  h1: 18, // 大
  h2: 17, // 大
  h3: 16, // 中
  h4: 15, // 中
  h5: 14, // 小
  h6: 13, // 小
  font_bg: 12, // 大
  font_md: 11, // 中
  font_sm: 10, // 小
  font_ty: 8, // 非常小 tiny
  input: 14,
  regular: 12,
  medium: 10, // 详细信息
}

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3
  },
  h4: {
    fontFamily: type.emphasis,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.emphasis,
    fontSize: size.h5
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  },
  text: {
    fontFamily: type.base,
    fontSize: size.font_sm
  }
}

export default {
  type,
  size,
  style
}

