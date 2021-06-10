<!-- 全局header -->
<template>
  <div class="header-global" :class="{ inWebView: isInWebView }">
    <!-- 返回按钮 -->
    <span class="leftIcon" @click="goBack"></span>

    <div class="headTitle">{{ headTitle || routerTitle }}</div>

    <span class="right" @click="onRight">
      <!-- 右侧slot插槽 -->
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      routerTitle: ''
    }
  },
  props: {
    // 自定义标题
    headTitle: {
      type: String,
      default: ''
    },
    onBack: {
      type: Function
    },
    onRight: {
      type: Function,
      default: () => {}
    },
    isInWebView: {
      type: Boolean,
      default: true
    }
  },
  created() {
    this.getTitle()
  },
  mounted() {
    console.log('-headerBar-')
  },
  methods: {
    getTitle() {
      if (this.$route.meta) {
        this.routerTitle = this.$route.meta.title || ''
      }
    },
    goBack() {
      if (this.onBack) {
        this.onBack()
        return
      }
      if (this.$route.path == '/index') {
        console.log('-返回客户端-')
      } else {
        this.$router.go(-1)
      }
    }
  },
  components: {}
}
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类

// header高度
// @height: 42px;
// // 客户端状态栏预留高度
// @statusBarHeight: 41px;

// 166 bar+顶部留白

// header高度
@height: 42px;
// 客户端状态栏预留高度
@statusBarHeight: 25px;
// 图片路径
@imgUrl: '~@/assets/images/common/';
// // 基础设计去图375，蓝湖标准设计图750 需要除以2
// @multiple: 0.5;

.header-global {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  height: @height;
  background-color: #fff;
  text-align: center;
  line-height: @height;
  color: #171717;
  // font-family: PingFangSC-Medium,PingFang SC;
  font-family: PingFang-SC-Bold;
  font-size: 18px;
  box-sizing: content-box;
  .leftIcon {
    position: absolute;
    left: 10px;
    top: 10.5px;
    z-index: 10;
    width: 12px;
    height: 20px;
    background: url('@{imgUrl}blackLeftArrow.png') no-repeat center / cover;
  }
  .right {
    position: absolute;
    right: 10px;
    top: 0;
    z-index: 10;
    font-size: 14px;
  }
  // &.inWebView {
  //   padding-top: 0;
  //   .leftIcon {
  //     top: 21px/2;
  //   }
  //   .right {
  //     top: 0;
  //   }
  // }
  &.inWebView {
    padding-top: @statusBarHeight;
    .leftIcon {
      top: @statusBarHeight + 10.5px;
    }
    .right {
      top: @statusBarHeight;
    }
  }
}
</style>

<style lang="less">
/*
 * 适配各平台头部间距
 * 配合mixins adapter
 * 无scoped，作用于全局
 */
// headerBar高度
@height: 42px;
// 客户端顶部预留高度
@statusBarHeight: 25px;

// .adapterTags {
//   padding-top: @height;
//   &.isWechat {
//     padding-top: 0;
//   }
//   &.isInnerApp {
//     padding-top: @height;
//   }
// }
.adapterTags {
  padding-top: @height + @statusBarHeight;
  &.isWechat {
    padding-top: 0;
  }
  &.isInnerApp {
    padding-top: @height + @statusBarHeight;
  }
}
</style>
