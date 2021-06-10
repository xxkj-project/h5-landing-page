/**
 * 公共工具函数
 */

/**
 * 身份证校验
 */
function checkIdCard(idNumber) {
  if (idNumber !== '') {
    var p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9xX]$/
    if (!p.test(idNumber)) {
      this.$toast({
        message: '请输⼊正确身份证号！',
        position: 'middle',
        duration: 3000
      })
    } else if (p.test(idNumber)) {
      var istst = idNumber.split('')
      var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
      var parity = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
      var sum = 0
      var ai = 0
      var wi = 0
      for (var i = 0; i < 17; i++) {
        ai = istst[i]
        wi = factor[i]
        sum += ai * wi
      }
      if (parity[sum % 11].toString() !== istst[17]) {
        this.$toast({
          message: '请输⼊正确身份证号！',
          position: 'middle',
          duration: 3000
        })
      } else {
        return true
      }
    }
  } else {
    this.$toast({
      message: '请输⼊身份证号!',
      position: 'middle',
      duration: 2000
    })
  }
}

/**
 * 日期时间格式化
 * @param {date} time js的date类型或时间戳
 * @param {string} format 自定义时间格式，选填，默认为'{y}-{m}-{d} {h}:{i}:{s}'
 * @return {string} 默认格式 2018-09-01 10:55:00
 */
function formatDate(time, format) {
  time = time || new Date()
  format = format || '{y}-{m}-{d} {h}:{i}:{s}'
  let date = time
  if (typeof time !== 'object') {
    if (('' + time).length === 10) time = +time * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return timeStr
}

/**
 * 日期格式转时间戳
 * @param {date} date date类型 2019-05-24 14:22:17
 * @return {string} 1558678937000
 */
function getTimestamp(date) {
  if (!date) {
    return new Date().getTime()
  }
  if (typeof date === 'string') {
    date = date.replace(/-/g, '/')
  }
  return new Date(date).getTime()
}

/**
 * 日期时间文字化
 * 比较传入时间与当前本地时间，文字化显示日期时间
 * @param {date} time js的date类型或时间戳
 * @param {string} cFormat 自定义两天前的时间格式，选填
 * @return {string} 刚刚 n分钟前 n小时前 1天前
 */
function txtFormatTime(time, format) {
  if (!time) {
    return 'null'
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000
  if (diff < 30) {
    return Math.ceil(diff) + '秒前'
    // return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  } else {
    return formatDate(time, format)
  }
}

/**
 * 对象参数序列化(并转码)
 * @param {object} obj 对象参数
 * @return {string} a=1&b=2&c=3
 */
function objToUrlParams(obj) {
  let str = ''
  Object.keys(obj).forEach(v => {
    if (obj[v] !== undefined) {
      str += `${encodeURIComponent(v)}=${encodeURIComponent(obj[v])}&`
    }
  })
  return str.slice(0, -1)
}

/**
 * 获取地址参数
 * @param {string} url 指定地址，默认取当前页地址
 * @return {string} { a: 1, b: 2, c: 3 }
 */
function getQueryObject(url) {
  url = url || window.location.href
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

/**
 * 创建唯一的字符串
 * @return {string} ojgdvbvaua40
 */
function createUniqueString() {
  const timestamp = +new Date() + ''
  const randomNum = parseInt((1 + Math.random()) * 65536) + ''
  return (+(randomNum + timestamp)).toString(32)
}

/**
 * 文件下载
 * @param {string} url 文件下载链接url，带上接口参数
 * @param {string} name 前端自定义的下载文件名，带上文件后缀名，选填
 * chrome会优先使用接口返回的命名，edge会优先使用此name
 */
function downloadFile(url, name) {
  const ele = document.createElement('a')
  ele.target = '_blank'
  ele.href = url || ''
  ele.download = name || ''
  document.body.appendChild(ele)
  ele.click()
  document.body.removeChild(ele)
}

/**
 * 获取字符串的字节长度
 * @param {String} str 字符串
 * @returns {number} 字节长度
 */
function getByteLength(str) {
  let len = 0
  for (let i = 0; i < str.length; i++) {
    // eslint-disable-next-line
    if (str[i].match(/[^\x00-\xff]/gi) != null) {
      len += 2
    } else {
      len += 1
    }
  }
  return len
}

/**
 * 数字千分化
 * @param {number} num 数字
 * @return {number} 10,000
 */
function toThousands(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

/**
 * 数字存储大小格式化
 * @param {number} num 存储大小 单位：Byte
 * @param {number} digits 保留几位小数
 * @return {string} 2MB
 */
function toStorage(num, digits) {
  if (num < 1024) {
    return num + 'B'
  }
  num = (num * 1000) / 1024
  const si = [
    { value: 1e18, symbol: 'E' },
    { value: 1e15, symbol: 'P' },
    { value: 1e12, symbol: 'T' },
    { value: 1e9, symbol: 'G' },
    { value: 1e6, symbol: 'M' },
    { value: 1e3, symbol: 'K' }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol + 'B'
    }
  }
}

/**
 * 函数防抖
 * @param {function} fn 函数
 * @param {number} t 等待时间（毫秒）
 * @return {function}
 */
function debounce(fn, t) {
  let timeId
  let delay = t || 500
  return function() {
    let args = arguments
    if (timeId) {
      clearTimeout(timeId)
    }
    timeId = setTimeout(() => {
      timeId = null
      fn.apply(this, args)
    }, delay)
  }
}

/**
 * 函数节流
 * @param {function} fn 函数
 * @param {number} t 间隔时间（毫秒）
 * @return {function}
 */
function throttle(fn, t) {
  let flag = true
  let interval = t || 500
  return function() {
    let args = arguments
    if (flag) {
      fn.apply(this, args)
      flag = false
      setTimeout(() => {
        flag = true
      }, interval)
    }
  }
}

/**
 * 深克隆(深拷贝)
 * @param {object|array} 源数据
 * @return {object|array}
 */
function deepClone(source) {
  return JSON.parse(JSON.stringify(source))
}

/**
 * 获取数据类型
 * @param {any} data 数据
 * @return {string} 'array'
 */
function getDataType(data) {
  const str = Object.prototype.toString.call(data)
  return str.match(/\s(\w*)\]/)[1].toLowerCase()
}

export default {
  // 身份证校验
  checkIdCard,
  // 日期时间格式化
  formatDate,
  // 日期格式转时间戳
  getTimestamp,
  // 日期时间文字化
  txtFormatTime,
  // 对象参数序列化
  objToUrlParams,
  // 获取地址参数
  getQueryObject,
  // 创建唯一的字符串
  createUniqueString,
  // 文件下载
  downloadFile,
  // 获取字符串的字节长度
  getByteLength,
  // 数字千分化
  toThousands,
  // 数字存储大小格式化
  toStorage,
  // 函数防抖
  debounce,
  // 函数节流
  throttle,
  // 深克隆
  deepClone,
  // 获取数据类型
  getDataType
}
