import config from '../../src/config'
const {
  color: { APP }
} = config


export default {
  btnStyle: {
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: APP.THEME,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnContent: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    // borderColor: 'red',
    // borderWidth: 1
  },
  fontStyle: {
    // ...title.font,
    color: '#fff'
  },
};
