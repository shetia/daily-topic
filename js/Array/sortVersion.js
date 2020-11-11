/* 
versions 是一个项目的版本号列表, 因多人维护, 不规则, 动手实现一个版本号处理函数
*/

function sortVersion(versions){
	return 	versions.sort((a, b) => {
		let A = a.split('.')
		let B = b.split('.')
    let n = A.length > B.length ? A.length : B.length
    for(let i = 0; i < n; i++) {
      let pre = A[i] || 0
      let next = B[i] || 0
      if (pre !== next) return A[i] - B[i]
    }
	})
};
var versions = ['1.45.0', '1.5', '6', '3.3.3.3.3']
console.log(sortVersion(versions ))