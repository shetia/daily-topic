/* 
第 158 题：如何模拟实现 Array.prototype.splice
*/

Array.prototype._splice = function(start, deleteCount, ...addList) {
  if(start < 0){
    if(Math.abs(start) > this.length){
      start = 0
    } else {
      start += this.length
    }
  }
  if(typeof deleteCount === 'undefined'){
    deleteCount = this.length - start
  }
  let removeList = this.slice(start, start + deleteCount)
  let right = this.slice(start + deleteCount)
  let addIndex = start
  addList.concat(right).forEach(item => {
    this[addIndex] = item
    addIndex++
  })
  this.length = addIndex
  return removeList
}

/* test */
let arr = [1,2,3,4,5]
arr._splice(1, 1)
console.log(arr)
arr._splice(1, 0, 9)
console.log(arr)
arr._splice(1, 0, 7,8)
console.log(arr)