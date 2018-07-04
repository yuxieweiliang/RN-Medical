
import { processColor } from 'react-native';

const greenBlue = "rgb(26, 182, 151)";
const petrel = "rgb(59, 145, 153)";
const colors = [processColor('red'), processColor('blue'), processColor('green'), processColor('yellow'), processColor('purple'), processColor('pink')];

export const data = {
  modalVisible: false,
  values: [0],
  label: '血压（高）',
  config: {
    // 边框宽度
    lineWidth: 1,
    // 边框颜色
    color: processColor('blue'),
    // 点击时，坐标线的颜色
    highlightColor: processColor("blue"),
    // 文字大小
    valueTextSize: 10,

    // 贝塞尔曲线
    mode: "CUBIC_BEZIER",

    // 描点 默认 true
    drawCircles: true,
    // 描点值
    drawValues: true,
    // 描点大小
    circleRadius: 5,

    // 区域颜色 默认 false
    drawFilled: false,
    // 填充梯形区域 只有当 drawFilled = true 时， 有作用
    fillGradient: {
      colors: [processColor(petrel), processColor(greenBlue)],
      positions: [0, 0.5],
      angle: 90, // 角
      orientation: "TOP_BOTTOM"
    },
    // 填充透明度
    fillAlpha: 1000,
  }
}

export let xAxis = {
  axisLineWidth: 0,
  drawLabels: true,
  position: 'BOTTOM',
  legend: false,
  drawAxisLine: true,
  drawGridLines: false,
  right: {
    enabled: false
  }
}