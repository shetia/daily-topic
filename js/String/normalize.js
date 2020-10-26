/* 
第 152 题：实现一个 normalize 函数，能将输入的特定的字符串转化为特定的结构化数据

字符串仅由小写字母和 [] 组成，且字符串不会包含多余的空格。
示例一: 'abc' --> {value: 'abc'}
示例二：'[abc[bcd[def]]]' --> {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}
*/

const normalize = (str) => {
  var result = {}
  let list = str.split(/[\[\]]/g).filter(Boolean) // 分割字符串并去除空字符串
  list.reduce((obj, item, index, arr) => {
    obj.value = item
    if(index !== arr.length -1) {
      return (obj.children = {})
    }
  }, result)
  return result
}

let test = [
  "[a[b[c]]]",
  "",
  "asd",
  "[aads",
  "asdasd]",
  "[asddd]",
  "[a[d]",
  "[s[]]",
  "[abc[bcd[def]]]"
]
for(let str of test){
  console.log(normalize(str))
}