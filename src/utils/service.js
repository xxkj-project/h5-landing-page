import axios from 'axios'
import { Toast, Dialog } from 'vant'
import store from '@/store'

const service = axios.create({
  baseURL: process.env.VUE_APP_SERVER_URL,
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    config.method = config.method || 'post'
    if (config.method === 'post') {
      config.data = config.data || {}
    } else if (config.method === 'get') {
      // console.log(111111)
      console.log('-config-', config)
      config.params = config.data || config.params
    }

    // console.log(store.state.app.locale)
    config.headers['language'] = store.state.app.locale === 'zh' ? 0 : 2
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// respone interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    console.log(response)
    if (res.code === 5000) {
      // window.location.href = '/h5/getCode?backUrl=' + window.location.href
    } else if (res.code === 1000) {
      // Dialog.alert({
      //   // title: '未登录',
      //   message: '系统内部错误，请联系管理员维护'
      // }).then(() => {
      //   // window.location.href = '/h5/getCode'
      // })
      // return Promise.reject(new Error('error'))
    } else if (res.code === 1004) {
      Dialog.alert({
        // title: '未登录',
        message: '请求业务目前未支持'
      }).then(() => {
        // window.location.href = '/h5/getCode'
      })
      return Promise.reject(new Error('error'))
    } else {
      return response
    }
  },
  error => {
    console.log('err' + error) // for debug
    Toast({
      message: '系统内部错误',
      duration: 2000
    })
    return Promise.reject(error)
  }
)

export default service
