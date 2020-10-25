/*
第 160 题：输出以下代码运行结果，为什么？
如果希望每隔 1s 输出一个结果，应该如何改造？
注意不可改动 square 方法
*/
const list = [1, 2, 3]
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

/* function test() {
  list.forEach(async x=> {
    const res = await square(x)
    console.log(res)
  })
} */
// test()

// forEach是不能阻塞的，默认是请求并行发起，所以是同时输出1、4、9。

/* 解1 用普通for循环也行*/

async function test(){
  let i = 0
  while (i < list.length){
    let res = await square(list[i])
    console.log(res)
    i++
  }
}

/* 解2 for...of*/

async function test(){
  for(let x of list){
    let res = await square(x)
    console.log(res, 'for...of')
  }
}

/* 解3
axios 源码里所用到的，利用 promise 本身的链式调用来实现串行
*/
var promise = Promise.resolve()
function test(i = 0){
  if(i === list.length) return
  promise = promise.then(() => {
    return square(list[i])
  })
  promise.then(res => {
    console.log(res, 'promise')
  })
  test(i + 1)
}


/* 解4
《ES6 入门》中还提到了使用 reduce 解决
*/
function test() {
  list.reduce(async (a, b) => {
    await a;
    let res = await square(b)
    console.log(res, 'reduce')
  }, undefined)
}

test()