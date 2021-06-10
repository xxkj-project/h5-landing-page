import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from '@/utils/service'
import Loading from '@/components/loading'
import API from './api'
import i18n from '@/i18n/i18n'
// rem 适配
// import '@/utils/flexible'
// vant按需引入
import '@/utils/importVant'
// console调试
import '@/utils/vconsole'
// 路由守卫
import '@/utils/routerGuards'
// 全局样式
import 'normalize.css/normalize.css'
import '@/styles/index.less'

Vue.config.productionTip = false
Vue.prototype.api = API
Vue.prototype.$http = request
Vue.use(Loading)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
