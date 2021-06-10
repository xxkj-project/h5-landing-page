/**
 * 手机号验证
 * @param {string} 手机号码
 * @returns {Boolean}
 */
export function validCellphone(str) {
  //   const reg = /^[0-9]{11}$/
  const reg = /^1(3|4|5|6|7|8|9)\d{9}$/
  return reg.test(str)
}

/**
 * 邮箱验证
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email) {
  // eslint-disable-next-line
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

// /**
//  * 身份证验证
//  * @param {string} idCard
//  * @returns {Boolean}
//  */
// export function validIdCard(idCard) {
//   const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
//   return reg.test(idCard)
// }

/**
 * 身份证验证
 * @param {string} idCard
 * @returns {Boolean}
 */
export function validIdCard(idNumber) {
  var p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9xX]$/
  if (!p.test(idNumber)) {
    // 验证位数
    console.log(222)
    return false
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
      // 验证真伪
      return false
    } else {
      return true
    }
  }
}

/**
 * 验证用户名不能为汉字
 * @param
 */
export function validUserName(str) {
  const reg = /^[A-Za-z0-9]*$/
  return reg.test(str)
}

/**
 * 验证字母小写
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * 验证字母大写
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * 验证是否数字
 * @param {string} str
 * @returns {Boolean}
 */
export function validNumber(str) {
  const reg = /^[0,9]+$/
  return reg
}

/**
 * 验证是否是字母
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * 验证字符串中是否包含中文
 * @param {string} str
 * @returns {Boolean}
 */
export function validChinese(str) {
  const reg = new RegExp('[\\u4E00-\\u9FFF]+', 'g')
  return reg.test(str)
}

/**
 * 验证密码必须为 8-64为字母、数字、特殊符号组成
 */
export function validPwd(str) {
  const reg = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,.\/]).{8,64}$/
  return reg.test(str)
}
