const Path = require('path')
// const TerserPlugin = require('terser-webpack-plugin')

// console.log('-----proxyCode:', process.env.VUE_APP_PROXY_CODE)

console.log('-----nodeEnv:', process.env.NODE_ENV)

console.log('-----serverENV:', process.env.VUE_APP_SERVER_ENV)

console.log('-----serverURL:', process.env.VUE_APP_SERVER_URL)

// console.log(process.env)

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? `/download/` : '/',
  outputDir: `download`,
  assetsDir: 'static',
  lintOnSave: true, // 是否在保存的时候检查
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  // 添加webpack配置
  configureWebpack: config => {
    // 定义快捷路径标识
    const myAlias = {
      '@': Path.resolve(__dirname, './src'),
      public: Path.resolve(__dirname, './public')
    }
    // 性能提示
    let myPerformance = {}
    if (process.env.NODE_ENV === 'production') {
      myPerformance = {
        hints: 'warning',
        maxEntrypointSize: 1024000,
        maxAssetSize: 1024000
      }
    }
    // 更新config
    config.resolve.alias = { ...config.resolve.alias, ...myAlias }
    config.performance = { ...config.performance, ...myPerformance }
  },
  // 修改webpack配置
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  }
}
