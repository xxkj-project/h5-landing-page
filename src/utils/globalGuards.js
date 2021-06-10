// 全局守卫
import store from '@/store'

// 存储登录状态
function setLoginStatus(to, from) {
  //   console.log(from)
  // let accessToken = ''
  // if (to.query && to.query.access_token !== 'undefined') {
  //   accessToken = to.query.access_token
  //   console.log('-accessToken-', accessToken)
  //   // 通知store更改状态
  //   store.commit('user/setAccessToken', accessToken)
  // }
  // console.log(to, from)
  // if (to.path == '/index' || from.path == '/index') {
  //   // setProductionEnv()
  //   console.log(window.location.search)
  //    // 线上正式环境
  // }
  if (to.query.key) {
    window.localStorage.setItem('locationSearch', window.location.search)
    console.log('-query-', to.query)
    let accessToken = to.query.key
    // let accessToken = to.query.access_token
    console.log('-accessToken-', accessToken)
    // 通知store更改状态
    store.commit('user/setAccessToken', accessToken)
    window.localStorage.setItem('accessToken', accessToken)
  }
}

// 修改页面title
function setDocumentTitle(to, from) {
  document.title = 'Usee - 视频交友' // TODO 根据具体的项目自行更改
  console.log(to, from)
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
    console.log(document.title)
  }
}

// 跳转登录页
function jumpNeedLogin(to, from) {
  if (to.query && to.query.need_login) {
    if (store.getters && !store.getters['/user/accessToken']) {
      this.toast({
        message: '去登录页',
        duration: '3000'
      })
    }
  }
}

export default {
  setLoginStatus,
  setDocumentTitle,
  jumpNeedLogin
}
