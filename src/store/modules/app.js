import Cookies from 'js-cookie'

export default {
  state: {
    locale: Cookies.get('locale') || 'zh' //国际化
  },
  mutations: {
    //切换语言
    setLanguage(state, language) {
      state.locale = language
      Cookies.set('locale', language)
    }
  },
  getters: {},
  actions: {}
}
