/**
 * loading插件
 */
import LoadingComp from './index.vue'

let $vm

export default {
  install: function(Vue, options) {
    // 当$vm不存在的时候，需要创建一个实例
    // console.log(Vue, options)
    if (!$vm) {
      const LoadingPlugin = Vue.extend(LoadingComp)
      $vm = new LoadingPlugin({ el: document.createElement('div') })
      // console.log($vm)
      document.body.appendChild($vm.$el)
    }
    const loading = {
      // 显示loading, text:文字描述（可选）
      show(text) {
        $vm.isShow = true
        $vm.text = text
      },
      // 关闭loading
      hide() {
        $vm.isShow = false
        $vm.text = ''
      }
    }
    // 给vue实例注册loading
    Vue.prototype.$loading = loading
    return Vue
  }
}
