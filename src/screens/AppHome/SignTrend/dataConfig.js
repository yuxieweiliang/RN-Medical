
import { processColor } from 'react-native';

const greenBlue = "rgb(26, 182, 151)";
const petrel = "rgb(59, 145, 153)";
const colors = [processColor('red'), processColor('blue'), processColor('green'), processColor('yellow'), processColor('purple'), processColor('pink')];
/*const config = {

 }*/
export const config = {
  // 边框宽度
  lineWidth: 2,
  // 边框颜色
  color: processColor(petrel),
  // 点击时，坐标线的颜色
  highlightColor: processColor("transparent"),
  // 文字大小
  valueTextSize: 10,

  // 贝塞尔曲线
  mode: "CUBIC_BEZIER",

  // 描点 默认 true
  drawCircles: true,
  drawCircleHole: false,// 原点为实心
  // 描点值
  drawValues: false,
  // 描点大小
  circleRadius: 5,
  circleColor: processColor(petrel),
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

export const data = {
  values: [{x: '01', y: '01', marker: '01'}],
  label: '血压（高）',
  config
}

export let xAxis = {
  axisLineWidth: 2, // X轴线的宽度
  granularity: 1, // 一个秒点对应一个X轴的值
  drawLabels: true,
  textSize: 12,
  textColor: processColor("gray"),
  position: 'BOTTOM',
  fontWeight: "bold",
  fontFamily: "HelveticaNeue-Medium",
  legend: false,
  drawAxisLine: true,
  drawGridLines: false,
  valueFormatter: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],

}
export let yAxis = {
  left: {
    enabled: true
  },
  right: {
    enabled: false
  }
}

export let option = {
  xAxis,
  yAxis,
  // 显示弹出值
  touchEnabled: true,
  // 弹出框以及文字颜色
  marker: {
    enabled: true,
    markerColor: processColor("white"),
    textColor: processColor("black")
  },


  // 描述信息
  chartDescription: {
    text: ""
  },


  legend: {
    enabled: true
  },

  autoScaleMinMaxEnabled: true,
  animation: {
    durationX: 0,
    durationY: 1500,
    easingY: "EaseInOutQuart"
  },

// 添加灰色背景
  drawGridBackground: false,
  drawBorders: false,
  dragEnabled: false,
  scaleEnabled: false,
  scaleXEnabled: false,
  scaleYEnable: true,
  pinchZoom: false,
  doubleTapToZoomEnabled: false,
  dragDecelerationEnabled: true,
  dragDecelerationFrictionCoef: 0.99,
  keepPositionOnRotation: false,
}