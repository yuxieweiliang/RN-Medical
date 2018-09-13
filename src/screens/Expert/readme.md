
let customDatesStyles = [];
let startDate = moment();
for (let i = -7; i<12; i++) {
  customDatesStyles.push({
    startDate: startDate.clone().add(i, 'days'), // Single date since no endDate provided
    dateNameStyle: styles.someDateNameStyle,
    dateNumberStyle: styles.someDateNumberStyle, // Random color...
    dateContainerStyle: {backgroundColor: '#'+('#00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6)},
  });
}

<Card title="预约时间">
  <CalendarStrip
    // 每个按钮 从左到右依次出现的动画
    calendarAnimation={{type: 'sequence', duration: 30}}
    //
    daySelectionAnimation={{type: 'background', duration: 300, highlightColor: '#9265DC'}}
    // 头部年月的样式
    calendarHeaderStyle={{color: 'white'}}
    // 日期数字的颜色
    dateNumberStyle={{color: 'white'}}

    // 日历插件的背景色
    calendarColor={'#7743CE'}
    // 日期数字的颜色
    dateNameStyle={{color: 'white'}}
    // 两侧按钮的宽度
    iconContainer={{flex: 0.1}}
    maxDayComponentSize={40}
    innerStyle={{height: 120}}
    style={{paddingTop: 10, paddingBottom: 10}}
    // 不现实每一天的名字
    // showDayName={false}
    // 定义每一个日期按钮的颜色
    // customDatesStyles={customDatesStyles}
    onDateSelected={(e) => this.onDateSelected(e)}
  />
</Card>