
selectItem(item) {
  this.setState({visible: false})
}

<Select
  dataStructure={['上午', '下午']}
  visible={this.state.visible}
  onClose={() => this.setState({visible: false})}
  selectItem={this.selectItem.bind(this)}
/>