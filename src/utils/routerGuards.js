// 路由守卫
import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import glg from './globalGuards'

NProgress.configure({ showSpinner: false }) // 禁用进度环

router.beforeEach((to, from, next) => {
  console.log('-before-router', to, from)
  // first progress bar
  NProgress.start()

  // 存储登录状态(setLoginStatus)
  // glg.setLoginStatus(to, from)

  // 判断用户是否需要登录访问(jumpNeedLogin)
  // glg.jumpNeedLogin(to, from)

  // 路由改变修改页面title(setDocumentTitle)
  glg.setDocumentTitle(to, from)

  next()
})

router.afterEach((to, from) => {
  // finish progress bar
  NProgress.done()
  // console.log(to,from)
})
