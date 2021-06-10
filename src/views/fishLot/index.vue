<!-- 
   promotion_h5_v1
-->
<template>
  <div class="promotion">
    <div class="main">
      <div class="logo"></div>
      <div class="btnBox">
        <span class="androidBtn" @click="toAndroid"></span>
        <span class="iosBtn" @click="toIos"></span>
      </div>
      <div class="code"></div>
    </div>
    <!-- 微信环境点击下载按钮遮罩提示 -->
    <wechatMask v-show="isShowMask" @closeMask="closeMaskHandle" />
  </div>
</template>

<script>
import wechatMask from '@/components/wechatMask'
import platform from '@/utils/platform'
// import api from '@/api/index'
// import OpenInstall from '@/utils/openInstall'
export default {
  name: '',
  data() {
    return {
      // 渠道码
      code: '',
      isShowMask: false,
      infoData: {},
      openInstallObj: null
    }
  },
  mounted() {
    // this.isShowMask = !platform.isWechat
    // console.log('browser-env', this.isShowMask)
    // this.code = this.$route.params.code
    // this.getData()
  },
  methods: {
    closeMaskHandle(data) {
      console.log(data)
      this.isShowMask = data
    },
    toAndroid() {
      // console.log(platform.isWechat)
      if (platform.isWechat) {
        this.isShowMask = true
        return
      }
      window.location.href = 'http://bzzhibofile.oss-accelerate.aliyuncs.com/file/im/app/android/richMore.apk'
    },
    toIos() {
      // console.log(platform.isWechat)
      if (platform.isWechat) {
        this.isShowMask = true
        return
      }
      window.location.href = ''
    },
    toDownload(type) {
      console.log('type', type)
      console.log(this.infoData)
      console.log('-openInstallObj-', this.openInstallObj)
      // if (platform.isAndroid && type === 'android') {
      //   console.log('当前为android')
      // } else {
      //   return
      // }
      // if (platform.ios && type === 'ios') {
      //   console.log('当前为android')
      // } else {
      //   return
      // }
      // this.isShowMask = true // TODO 测试用
      // 非android环境
      console.log(platform)
      if (!platform.isAndroid) {
        console.log('非安卓环境')
        this.openInstallObj.wakeupOrInstall()
        return
      }
      console.log('-android-url-', this.infoData.androidUrl)
      console.log('-isshowmask-', this.isShowMask)
      // 后台没有返回url
      if (!this.infoData.androidUrl) {
        console.log('没有android包下载地址')
        this.openInstallObj.wakeupOrInstall()
        return
      }
      console.log('111')
      // 是否是微信环境
      if (!platform.isWechat) {
        console.log('非微信环境')
        window.location.href = this.infoData.androidUrl
        return
      }
      console.log('222')
      // 微信环境显示遮罩
      this.isShowMask = true
      return false
    },
    getData() {
      // const { code } = this.$route.params // 渠道码
      console.log('-code-', this.code)
      api.getInfo({ code: this.code }).then(res => {
        console.log('res', res)
        if (res.code == 200) {
          const data = res.data
          this.infoData = data
          // this.infoData.androidUrl = 'https://twww.tangseng.io/download/index.html' // TODO 自测临时使用
          console.log(this.infoData)
          this.initOI()
        } else {
          this.$toast(res.msg)
        }
      })
    },
    // 初始化OpenInstall
    initOI() {
      let params = {}
      params = this.code ? { key: this.infoData.id, code: this.code } : { key: this.infoData.id }
      console.log(params)
      this.openInstallObj = OpenInstall.initOpenInstall(params)
      console.log(this.openInstallObj)
    }
  },
  components: { wechatMask }
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
@imgUrl: '~@/assets/images/fishLot/';

.promotion {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: url('@{imgUrl}bg.png') no-repeat center / cover;
  .logo {
    width: 75px;
    height: 119px;
    background: url('@{imgUrl}logo.png') no-repeat center / cover;
    margin-bottom: 50px;
  }
  .btnBox {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    span {
      width: 185px;
      height: 46px;
    }
    .androidBtn {
      background: url('@{imgUrl}androidBtn.png') no-repeat center / cover;
      margin-bottom: 25px;
    }
    .iosBtn {
      background: url('@{imgUrl}iosBtn.png') no-repeat center / cover;
    }
  }
  .code {
    width: 160px;
    height: 160px;
    background: url('@{imgUrl}code.png') no-repeat center / cover;
  }
}
</style>
