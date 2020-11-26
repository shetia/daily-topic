/* 
如何获取 html 元素实际的样式值?

*/
function getStyleByAttr(el, name){
  return window.getComputedStyle ? window.getComputedStyle(el, null)[name] : el.currentStyle[name]
}
function getAllStyle(el){
  let styleObj = document.defaultView.getComputedStyle(el, null)
  let obj = {}
  for(let styleName of styleObj){
    // obj[styleName] = styleObj.getPropertyValue(styleName)
    obj[styleName] = getStyleByAttr(el, styleName)
  }
  return obj
}