/**
 * @param 通过传递的字符串数字获取语言标识
 */
export function formatLanguageType(data) {
  data = +data
  console.log(data)
  let str = ''
  switch (data) {
    case 0:
      str = 'zh' //中文简体 zh
      break
    case 1:
      str = 'zh-CN' //中文繁体 zh-CN
      break
    case 2:
      str = 'en' //英文 en
      break
    case 3:
      str = 'th' //泰语  th
      break
    case 4:
      str = 'ko' //韩语 ko
      break
    case 5:
      str = 'vi' //越南语 vi
      break
    case 6:
      str = 'ja' //日语 ja
      break
    case 7:
      str = 'in' //印度尼西亚 in
      break
    default:
      break
  }
  console.log(str)
  return str
}
