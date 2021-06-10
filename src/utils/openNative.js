/**
 * js与原生交互方法集合
 * */
import platform from '@/utils/platform'
import iosBridge from '@/utils/bridge'
/**
 * 关闭webview
 */
const closeWebview = () => {
  if (platform.isIos) {
    console.log('-ios-')
    iosBridge.callNativeBridge('navigateBack', '1', null)
    return
  }
  if (platform.isAndroid) {
    console.log('-android-', window.bridge)
    window.bridge && window.bridge.close()
    return
  }
  console.log('-platform-', platform)
}

/**
 * 设置顶部标题栏
 */
const setHeaderBar = params => {
  params = params || '0'
  console.log('-headerbar-params-', params)
  if (platform.isIos) {
    console.log('-ios-', iosBridge)
    // 设置ios顶部标题栏,0使用h5标题栏，1使用ios标题栏
    iosBridge.callNativeBridge('showNavigationBar', params, null)
    iosBridge.callNativeBridge('showBackButton', params, null)
    return
  }
  if (platform.isAndroid) {
    // 设置安卓顶部标题栏,0使用h5标题栏，1使用安卓标题栏
    //   params = params || '0
    console.log('-android-', window.bridge)
    window.bridge && window.bridge.showNavigationBar(params)
    return
  }
  console.log('-platform-', platform)
}

/**
 * js调用客户端 扫码
 */
// const scanCode = () => {
//   console.log('扫码')
//   if (platform.isIos) {
//     iosBridge.callNativeBridge('scan', '', null)
//     return
//   }
//   if (platform.isAndroid) {
//     window.bridge && window.bridge.scanPaymentCode()
//     return
//   }
//   console.log('-platform-', platform)
// }

/**
 * 充值 ==》ios方法recharge
 */
// const recharge = () => {
//   console.log('充值')
//   if (platform.isIos) {
//     iosBridge.callNativeBridge('recharge', '', null)
//     return
//   }
//   if (platform.isAndroid) {
//     const appName = 'cooix.com.ubank' // android包名
//     const downloadUrl = 'https://m.ubex.one/' // 下载地址
//     console.log(window.bridge)
//     window.bridge && window.bridge.gotoOtherApp(appName, downloadUrl)
//     return
//   }
//   console.log('-platform-', platform)
// }

/**
 * 原生调用js
 * @param {String} jsFnName js方法名
 * @params {Object} obj vue实例this
 * @param {Function} callback 回调
 */
const nativeCallJs = (jsFnName, obj, callback) => {
  console.log('原生调用了js')
  let vm = obj
  console.log('-jsFnName-', jsFnName, vm)
  if (platform.isIos) {
    iosBridge.registerIosBridge(jsFnName, data => {
      callback(data)
    })
    return
  }
  if (platform.isAndroid) {
    // 将vue组件的方法绑定到window上，提供给android调用
    window[`${jsFnName}`] = vm[`${jsFnName}`]
    return
  }
  console.log('-platform-', platform)
}

export default {
  // 原生调用js
  nativeCallJs,
  // js 调用原生
  // 关闭webview
  closeWebview,
  // 设置原生标题栏的隐藏
  setHeaderBar
  // 扫码
  // scanCode,
  // 充值
  // recharge,
}
