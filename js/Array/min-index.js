/* 
用最精炼的代码实现数组非零非负最小值 index

// 例如：[10,21,0,-7,35,7,9,23,18] 输出 5, 7 最小
function getIndex(arr){
      let index=null;
      ...
      return index;
}
*/

function getIndex(arr){
  let index = -1;
  let min = Infinity
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0 && arr[i] < min) {
      min = arr[i]
      index = i
    }
  }
  return index;
}

let test = [
  [[10,21,0,-7,35,7,9,23,18], 5],
  [[10,21,0,-7,35,7,9,23,1], 8],
  [[1,21,0,-7,35,7,9,23,1], 0],
  [[], -1],
  [[-1,-2,-3], -1]
]
for(let i = 0; i < test.length; i++){
  let [arr, n] = test[i]
  console.log(getIndex(arr) === n)
}