const appKey = 's5hzj9' // 原生客户端app提供的key值
/**
 * @param 初始化OpenInstall
 * @param params 参数对象
 * @return openInstall实例
 */
function initOpenInstall(params) {
  // 初始化 TODO 如果存在openInstall实例就使用这个实例，如果没有就创建
  console.log('-openinstall-params-', params)
  let openInstallObj
  if (openInstallObj) {
    console.log('已经有openInstallObj实例了')
    return openInstallObj
  }
  openInstallObj = new OpenInstall(
    {
      appKey,
      /*可选参数，是否优先考虑拉起app，以牺牲下载体验为代价 ,下载体验就是我说的 要点两次下载才可以下载，，第一次没反应 拉起是正常的。。。*/
      preferWakeup: true,
      onready: function() {
        console.log('-openInstall-this-', this)
        let m = this
        m.schemeWakeup()
      }
    },
    params
  )
  // console.log(new OpenInstall())
  return openInstallObj
}

export default {
  // 初始化openInstall
  initOpenInstall
}
