/*
第 159 题：实现 Promise.retry，成功后 resolve 结果，失败后重试，尝试超过一定次数才真正的 reject
*/

Promise.retry = function (promiseFn, times = 3){
  let i = times
  return new Promise(async (resolve, reject) => {
    while(i--){
      console.log(`尝试第${times - i}次`)
      try{
        let res = await promiseFn()
        resolve(res)
        break;
      } catch(e){
        if(!i) reject(e, '报错')
      }
    }
  })
}
/* test */
function getProm() {
  const n = Math.random();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      n > 0.9 ? resolve(n) : reject(n)
    }, 1000);
  });
}
Promise.retry(getProm, 5).then(res=> {
  console.log(res, '成功')
}).catch(e => {
  console.log(e, '失败')
})