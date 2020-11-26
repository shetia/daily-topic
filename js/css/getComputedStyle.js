/* 
如何获取 html 元素实际的样式值?

*/
function getStyleByAttr(el, name){
  if (name) {
    return window.getComputedStyle ? window.getComputedStyle(el, null)[name] : el.currentStyle[name]
  } else {
    return window.getComputedStyle ? window.getComputedStyle(el, null) : el.currentStyle
  }
}