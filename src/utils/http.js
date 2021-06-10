import service from './service'

/**
 * 请求拦截 config配置项
 * @params {String} url 接口地址
 * @params {Object} data 传参数据, 默认为空
 * @params {String} method 请求方式，默认为post请求
 * @params {Boolean} isSelf 控制是否自行处理接口响应异常,默认为false
 */
function http(url, data, method, isSelf) {
  let baseURL = `${process.env.VUE_APP_SERVER_URL}/onevideo`
  let headers = {}
  data = data || {}
  method = method || 'post'
  isSelf = isSelf || false
  // 返回promise
  return new Promise((resolve, reject) => {
    service({
      baseURL,
      headers,
      url,
      method,
      data,
      isSelf
    })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default http
