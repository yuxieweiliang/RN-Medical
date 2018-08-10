import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['cn'] = {
  monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
  monthNamesShort: ['1.','2.','3','4','5','6','7.','8','9.','10.','11.','12.'],
  dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
  dayNamesShort: ['日','一','二','三','四','五','六']
};
LocaleConfig.defaultLocale = 'cn';
<CalendarList
 horizontal={true}
 // 每次滑动一页
 pagingEnabled={true}
 // 是否有选中的日期
 markedDates={{[appointTime]: {selected: true, selectedColor: 'blue'}}}
 // 月份的格式
 monthFormat={'yyyy/MM'}
 // 当日期改变时
 onDayPress={(e) => this.calendarDayChange(e)}
 />



