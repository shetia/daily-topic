/* 
第 151 题：用最简洁代码实现 indexOf 方法
*/
String.prototype._indexOf = function (a, start) {
  let str = this;
  start = start || 0
  for (var i = start; i < str.length; i++) {
    if (str[i] == a) {
      return i;
    }
  }
  return -1;
}

let test = [
  ['abcd', ['c'], 2],
  ['abde', ['e'], 3],
  ['aebde', ['e', 0], 1],
  ['aebde', ['e', 2], 4],
  ['aebde', ['f'], -1],
]

for(let item of test){
  let [str, params, ans] = item
  let res = str._indexOf(...params)
  console.log(res, res === ans)
}