/**
 * js与原生交互基础方法
 */
import tools from '@/utils/tools'
/**
 * @param 设置js桥接
 * @param callback 回调
 */
function setWebViewJsBridge(callback) {
  if (window.WebViewJavascriptBridge) {
    return callback(window.WebViewJavascriptBridge)
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback)
  }
  window.WVJBCallbacks = [callback]
  var WVJBIframe = document.createElement('iframe')
  WVJBIframe.style.display = 'none'
  WVJBIframe.src = 'https://__bridge_loaded__'
  document.documentElement.appendChild(WVJBIframe)
  setTimeout(function() {
    document.documentElement.removeChild(WVJBIframe)
  }, 0)
}

/**
 * @param 调用ios客户端原生的方法
 * @param {String} fnName 客户端方法名
 * @param params 传递给客户端的参数
 * @param {Function} callback 回调
 */
function callNativeBridge(fnName, params, callback) {
  params = params || {}
  callback = callback || (() => {})
  setWebViewJsBridge(bridge => {
    console.log('-native-fnName-', fnName, '-params-', params)
    bridge.callHandler(fnName, params, callback)
  })
}

/**
 * @param 注册js方法给ios原生调用
 * @param {String} fnName js方法名,提供ios调用
 * @param {Function} callback 回调
 */
function registerIosBridge(fnName, callback) {
  setWebViewJsBridge(bridge => {
    bridge.registerHandler(fnName, (data, responseCallback) => {
      callback(data, responseCallback)
    })
  })
}

// 跳转原生页面并作节流处理
const toNativePage = tools.throttle(toNativeFn, 1000)
function toNativeFn(fnName, params, callback) {
  callNativeBridge(fnName, params, callback)
}

export default {
  // 设置webview桥接
  setWebViewJsBridge,
  // 调用ios客户端原生的方法
  callNativeBridge,
  // 注册js方法给ios原生
  registerIosBridge,
  // 跳转ios原生页面并作节流处理
  toNativePage
}
