module.exports = {
  plugins: {
    autoprefixer: {},
    // 插件 postcss-plugin-px2rem，postcss-px-to-viewport二选一即可
    // 使用postcss-px-to-viewport可能会对使用ui框架有影响，例如vant-ui
    // 'postcss-plugin-px2rem': {
    //   rootValue: 37.5,
    //   unitPrecision: 5,
    //   propWhiteList: [],
    //   propBlackList: [],
    //   exclude: false,
    //   selectorBlackList: ['noRem'],
    //   ignoreIdentifier: false,
    //   replace: true,
    //   mediaQuery: false,
    //   minPixelValue: 2
    // }
    'postcss-px-to-viewport': {
      viewportWidth: 375, // 视图的宽度
      viewportHeight: 667, // 视图的高度
      // viewportWidth: 750, // 视图的宽度
      // viewportHeight: 1334, // 视图的高度
      unitToConvert: 'px', //将要转化的单位
      unitPrecision: 3, //(Number)指定`px`转换为视窗单位值的小数位数，默认是5
      minPixelValue: 1, // (Number) 默认值1，小于或等于`1px`不转换为视窗单位
      selectorBlackList: ['.ignore', '.hairlines'], // (Array) 指定不转换为视窗单位的类，保留px，值为string或正则regexp，建议定义一至两个通用的类名
      mediaQuery: false // (Boolean) 是否在媒体查询时也转换px，默认false

      // propList: ['*'], //(Array)指定可以转换的css属性，默认是['*']，代表全部属性进行转换
      // viewportUnit: 'vw', //(String)指定需要转换成的视窗单位，默认vw
      // fontViewportUnit: 'vw', //(String)指定字体需要转换成的视窗单位，默认vw
      // replace: true, //替换包含vw的规则，而不是添加回退。
      // exclude: [],  // (Array or Regexp) 设置忽略文件，如node_modules
      // landscape: false,
      // landscapeUnit: 'vw',
      // landscapeWidth: 568
    }
  }
}
