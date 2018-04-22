export default {
  // 组件状态
  state: {},

  // 组件数据
  defaultProps: {},

  // 组件数据检查
  propTypes: {},

  // 组件渲染之前调用
  componentWillMount() {},

  getParams() {},
  findOne() {},
  // render ...

  // 组件渲染之后调用
  componentDidMount() {},

  // props 改变时调用，可以在这里修改 state
  componentWillReceiveProps() {},


  // 组件即将更新
  componentWillUpdate() {},
  // 组件已经更新
  componentDidUpdate() {},

  // 判断是否需要更新 如果返回true 则更新， 否则不更新
  // shouldComponentUpdate(nextProps, nextState) {},

  // 组件将要被卸载
  componentWillUnmount() {},

};
