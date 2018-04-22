属性介绍
基本属性
属性	默认	类型	描述

horizontal	true	bool	如果为true，内容往水平方向滚动

loop	true	bool	如果为false，当滚动到最后一张时，继续滚动无法回到第一张（即不可循环）

index	0	number	设置初始页面的索引

showsButtons	false	bool	如果为true，显示左右箭头按钮

autoplay	false	bool	设置是否自动切换

onIndexChanged	(index) => null	func	当用户滑动页面到新的页面时触发调用


自定义样式

属性	默认	类型	描述

width	-	number	如果未设置，则默认flex:1全屏显示

height	-	number	如果未设置，则默认flex:1全屏显示

style	{…}	style	设置页面样式

loadMinimal	false	bool	是否进行预加载

loadMinimalSize	1	number	预加载的数量

loadMinimalLoader		element	自定义预加载的样式

Pagination分页

属性	默认	类型	描述

showsPagination	true	bool	设置是否显示分页器（通常为页面下面的小圆点）

paginationStyle	{…}	style	设置分页器的样式

renderPagination	-	function	通过 (index, total, context) 这三个参数控制分页器渲染, 具体为(this.state.index / this.state.total / this)，例如分页器渲染为数字而不是小圆点。

dot	<View style= />	element	可以自定义圆点元素

activeDot	<View style= />	element	可以自定义当前选中圆点元素

dotStyle	{…}	style	可以自定义圆点样式

activeDot	{…}	style	可以自定义当前选中圆点样式

dotColor	-	string	设置圆点颜色

activeDotColor	-	string	设置当前选中圆点颜色

autoPlay自动切换

属性	默认	类型	描述

autoplay	true	boolean	设置是否自动切换

autoplayTimeout	2.5	number	延迟时间（秒)

autoplayDirection	true	boolean	设置循环方向

控制按钮

属性	默认	类型	描述

showsButtons	true	bool	是否显示左右控制箭头按钮

buttonWrapperStyle	{position: ‘absolute’, paddingHorizontal: 15, paddingVertical: 30, top: 70, left: 0, alignItems:’flex-start’}	style	设置默认箭头按钮的样式

nextButton	<Text style=>‹</Text>	element	自定义右箭头按钮样式

prevButton	<Text style=>›</Text>	element	自定义左箭头按钮样式

根据上面各属性的介绍，在前面引导页的基础上，隐藏左右箭头按钮，设置自动播放，调整页面的大小，即可实现广告栏的效果。