module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    // 局部引入vant组件配置
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      },
      'vant'
    ]
  ]
}
