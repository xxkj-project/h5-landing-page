/**
 * rem适配方案
 */
;(function(window, document) {
  // var sizeUI = 750 // 定义设计图尺寸
  // var remBase = 75 // 定义基准值
  var sizeUI = 375 // 定义设计图尺寸
  var remBase = 37.5 // 定义基准值
  var docEl = document.documentElement
  var bodyEl = document.querySelector('body')

  setRemUnit()
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function(e) {
    if (e.persisted) setRemUnit()
  })
  function setRemUnit() {
    var docFontSize = (docEl.clientWidth / sizeUI) * remBase
    docEl.style.fontSize = docFontSize + 'px'
    bodyEl.style.fontSize = 16 / docFontSize + 'rem'
  }
})(window, document)
