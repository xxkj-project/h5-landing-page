/**
 * 根据运行平台做相应的处理
 */
import platform from '@/utils/platform'

export default {
  mounted() {
    this.setMixinsHeaderBar()
  },
  methods: {
    // 配置引入headerBar后的自适应样式
    setMixinsHeaderBar() {
      const headerBarEle = document.querySelector('.header-global')
      if (!headerBarEle) return
      const routerEle = document.querySelector('#app > div')
      routerEle.classList.add('adapterTags')
      // 根据运行平台添加相应的类名
      // console.log(platform)
      Object.keys(platform).forEach(v => {
        if (platform[v]) {
          routerEle.classList.add(v)
        }
      })
    }
  }
}
