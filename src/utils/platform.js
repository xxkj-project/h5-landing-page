/**
 * 判断运行平台
 */
const ua = window.navigator.userAgent.toLowerCase()

const isAndroid = (() => {
  return /Android|Adr/i.test(ua)
})()

const isIos = (() => {
  return /iPhone|iPod|iPad/i.test(ua)
})()

const isWechat = (() => {
  // console.log(ua)
  return /MicroMessenger/i.test(ua)
})()

const isWxmp = (() => {
  // console.log(ua, window.__wxjs_environment)
  return /miniProgram/i.test(ua) || window.__wxjs_environment === 'miniprogram'
})()

// TODO 需要客户端添加一个唯一识别码 （dianyidian）
// const isInnerAndroid = (() => {
//   return isAndroid && /dianyidian/i.test(ua)
// })()

// const isInnerIos = (() => {
//   if (isIos && /baichuan/i.test(ua)) {
//     // 兼容ios客户端跳转阿里百川授权后再打开webview的userAgent被百川覆盖的问题
//     return true
//   }
//   return isIos && /dianyidian/i.test(ua)
// })()

const isIphoneX = (() => {
  return /iPhone/i.test(ua) && screen.height === 812 && screen.width === 375
})()

const isInnerApp = (() => {
  //   return isInnerAndroid || isInnerIos
  return isAndroid || isIos
})()

export default {
  // android平台
  isAndroid,
  // ios平台
  isIos,
  // 微信生态
  isWechat,
  // 微信小程序
  isWxmp,
  //   // android客户端
  //   isInnerAndroid,
  //   // ios客户端
  //   isInnerIos,
  // iphoneX
  isIphoneX,
  // 客户端
  isInnerApp
}
