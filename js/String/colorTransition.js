/* 
RGB转换为16进制
*/

String.prototype.colorHex = function () {
  // RGB颜色正则
  let reg = /^(rgb|RGB)/
  let color = this
  if (reg.test(color)){
    let strHex = '#'
    let colorArr = color.replace(/[rgb|RGB|\(|\)]/g,'').split(',')
    strHex += colorArr.map(t => {
      let hex = Number(t).toString(16)
      if (hex === '0') hex += hex
      return hex
    }).join('')
    return strHex
  } else {
    return String(color)
  }
}

/* 
16进制转换为RGB
*/

String.prototype.colorRgb = function(){
  let color = this.toLocaleLowerCase()
  let reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/
  if (reg.test(color)){
    if (color.length === 4){
      let newColor = '#'
      for(let i = 1; i < 4; i++){
        let a = color[i]
        newColor += a + a
      }
      color = newColor
    }
    let arr = []
    for(let i = 1; i < 7;i+=2){
      let hex = color.slice(i, i + 2)
      arr.push( parseInt('0x' + hex) )
    }
    return `rgb(${arr.join(',')})`
  } else {
    return color
  }
}
let test = [
  ['rgb(255,255,255)', '#ffffff'],
  ['rgb(0,255,255)', '#00ffff'],
  ['rgb(0,255,0)', '#00ff00'],
]
for(let i = 0; i < test.length; i++){
  let [colorStr, ans] = test[i]
  let _ans = colorStr.colorHex()
  console.log('RGB转换为16进制: ', colorStr, '->' ,_ans, _ans === ans)
}
for(let i = 0; i < test.length; i++){
  let [ans, colorStr] = test[i]
  let _ans = colorStr.colorRgb()
  console.log('16进制转换为RGB: ', colorStr, '->' , _ans, _ans === ans)
}