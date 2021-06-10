<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // 友盟统计添加
    const script = document.createElement('script')
    script.src = 'https://s23.cnzz.com/z_stat.php?id=1277701086&web_id=1277701086'
    script.language = 'JavaScript'
    document.body.appendChild(script)
  },
  watch: {
    $route() {
      // console.log('-app-', window._czc)
      if (window._czc) {
        let location = window.location
        let contentUrl = location.pathname + location.hash
        let refererUrl = '/'
        window._czc.push(['_trackPageview', contentUrl, refererUrl])
      }
    }
  }
}
</script>

<style lang="less">
#app {
  height: 100%;
  overflow: auto;
  font-size: 14px;
  // background-color: #F2F2F2;
  -webkit-overflow-scrolling: touch;
}
</style>
