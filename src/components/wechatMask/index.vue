<!-- 
   遮罩
-->
<template>
  <!-- 微信环境点击按钮提示 -->
  <div class="mask" @click="closeMask">
    <div class="main">
      <div class="txt">点击右上角，选择浏览器打开</div>
      <span class="arrowIcon"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  //   props: {
  //       isMask: {
  //           type: Boolean,
  //           default: false
  //       }
  //   },
  mounted() {},
  methods: {
    closeMask() {
      this.$emit('closeMask', false)
    }
  },
  components: {}
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
@imgUrl: '~@/assets/images/common/';
.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 999;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  .main {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 10px 10px 0 0;
    .arrowIcon {
      width: 92px;
      height: 72px;
      background: url('@{imgUrl}arrow.png') no-repeat center / cover;
      margin-bottom: 8px;
    }
    .txt {
      font-size: 16px;
      line-height: 20px;
      color: rgba(255, 255, 255, 0.86);
      padding-right: 6px;
    }
  }
  // &::after {
  //   content: '';
  //   display: block;
  //   width: 92px;
  //   height: 72px;
  //   background: url('@{imgUrl}arrow.png') no-repeat center / 92px 72px;
  //   position: absolute;
  //   top: 6px;
  //   right: 23px;
  // }
}
</style>
