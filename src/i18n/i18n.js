import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhCN from './lang/zhCN'
// import zhTW from './lang/znTW'
import en from './lang/en'
import Cookies from 'js-cookie'
Vue.use(VueI18n)

const messages = {
  en: Object.assign(en),
  zh: Object.assign(zhCN),
//   tw: Object.assign(zhTW)
}

const i18n = new VueI18n({
  locale: Cookies.get('locale') || 'zh',
  messages
})

export default i18n
