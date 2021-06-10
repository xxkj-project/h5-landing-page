<!--  -->
<template>
  <div class="loading">
    <!-- 自定义加载动画 -->
    <!-- <transition name="loading-transition">
      <div class="loading-global" v-show="isShow">
        <div class="loading-content">
          <div class="loading-text">{{ text }}</div>
          <div class="loading-icon">
            <img src="@/assets/images/loading.gif" alt="" />
          </div>
        </div>
      </div>
    </transition> -->

    <!-- 使用vant-ui自带的 -->
    <div class="loading-global" v-show="isShow">
      <div class="loading-content">
        <van-loading :type="vantLoadingConfig.type" :color="vantLoadingConfig.color">{{ text }}</van-loading>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      vantLoadingConfig: {
        // type: 'spinner',
        type: 'circular',
        color: '#1989fa'
      }
    }
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    }
  },
  mounted() {},
  methods: {},
  components: {}
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
.loading-transition-enter,
.loading-transition-leave-to {
  opacity: 1;
}
.loading-transition-leave,
.loading-transition-enter-to {
  opacity: 0;
}
.loading-transition-enter-active,
.loading-transition-leave-active {
  transition: all 0.3s;
}

.loading-global {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1999;
  width: 100%;
  height: 100%;
  //   background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  transition: opacity 0.3s linear;
  .loading-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .loading-text {
      color: orange;
      line-height: 64px;
      font-size: 32px;
      text-align: center;
    }
    .loading-icon {
      width: 80px;
      height: 80px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
